---
layout: post
title: "The joy of merge"
category: SQL
tags: [work, .net, sql-server]
---
{% include JB/setup %}

A recent customer requirement was to have a process to import a list of data from CSV and incrementally update an *existing* table of the same data, adding/updating/deleting rows as required in order to get the two into sync. The production table has extra columns, with the CSV import being simply a list of (for argument’s sake) customer IDs and names. The technology here is .NET and SQL-Server. 

In the past we might have used a process like this:
 * Import the data into a temporary table
 * Use a query to delete/archive any production data rows not present in the new imported list
 * Use a query to update any existing production data rows that are different in the imported list
 * Use a query to insert any new rows from the imported list into the production data
 * Present the results ("[n1] rows added, [n2] rows updated and [n3] rows deleted”) to the UI and/or system logs.

All well and good, and it’s a safe and established way of going about it. However… enter the SQL `MERGE` command, introduced in SQL-Server 2008. This allows us to perform all of the above data operations in a single SQL statement. Credit to [this article](https://www.aspsnippets.com/Articles/SqlBulkCopy--Bulk-Insert-records-and-Update-existing-rows-if-record-exists-using-C-and-VBNet.aspx) (from 2014 - never tell me I’m not bang up to date!) for giving the bare bones on how to go about it, and that is definitely recommended reading for a deeper dive, as is the [Microsoft documentation on MERGE](https://docs.microsoft.com/en-us/sql/t-sql/statements/merge-transact-sql). However, for a brief introduction, here is the syntax we’ve used:

	CREATE PROCEDURE [dbo].[mergeCustomers]
	    @tblNewCustomerList CustomerType READONLY

	AS
      MERGE INTO Customers 
      USING @tblNewCustomerList NewCustomerList

      ON Customers.CustomerID = NewCustomerList.CustomerID

      /* For an existing row we just update the name details */
      WHEN MATCHED THEN
      UPDATE SET Customers.FirstName = NewCustomerList.FirstName,
                            Customers.LastName = NewCustomerList.LastName

      /* For a new row, insert the relevant data */
      WHEN NOT MATCHED BY TARGET THEN
      INSERT (CustomerID, FirstName, LastName)
      VALUES (NewCustomerList.CustomerID, NewCustomerList.FirstName, NewCustomerList.LastName)

      /* Row is in the data but not in the upload - delete it */
      WHEN NOT MATCHED BY SOURCE
      DELETE;

      /* Now return the number of rows affected */
      SELECT @@ROWCOUNT
 
	RETURN

The first question this raises is: what’s that `@tblNewCustomerList` parameter? The answer is: it’s a user-defined table TYPE, which allows us to pass an entire “table” of data into the stored procedure. In .NET/C# terms this means we create an in-memory `DataTable` object, populate it with the contents of the CSV file, and then pass it to the stored procedure. In our case, data lengths and other validation is done in code, in order to ensure (as far as possible) that the data is compliant with any NULL rules or SQL field lengths before being passed, so that SQL won’t reject the entire update. 

The C# code is of this form:

        DataTable dt = new DataTable();
        DataRow row;
        int rows affected = 0;
        dt.Columns.Add(“CustomerID", typeof(int));
        dt.Columns.Add(“FirstName", typeof(string));
        dt.Columns.Add(“LastName", typeof(string));
        
        // Then repeated chunks of this sort of thing to add all our data to the datatable
        row = dt.NewRow()
        row[“CustomerID”] = 1;
        row[“FirstName”] = “Julian”;
        row[“LastName”] = “Woodward”;
        dt.Rows.Add(row);

        // Then when we’ve finished constructing the data
        string connString = [insert your SQL connection string here];
                    
        using (SqlConnection conn = new SqlConnection(connString))
        {
            SqlParameter param = new SqlParameter("@tblNewCustomerList", SqlDbType.Structured)
            {
                TypeName = "dbo.CustomerType",
                Value = dt
            };

            using (SqlCommand cmd = new SqlCommand(“dbo.mergeCustomers", conn))
            {
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add(param);

                conn.Open();
                rowsaffected = (int)cmd.ExecuteScalar();
            }
        }

The last piece of the jigsaw, then is this TYPE thing: how do we create that? The answer: go into (I’m using Visual Studio 2015) the “SQL Server Object Explorer” tool (via the [View] menu if it’s not already visible); and open the twisties in the order
Databases -> [your database] -> Programmability -> Types -> User-Defined Table Types

<img src="/assets/img/blog/sqlserver-udtt.png" alt="Screenshot: SQL-Server User-Defined Table Types menu" title="Screenshot: Webstorm" style="display: block; margin: 1em auto "/>


Right-click to add a new one, and then define it pretty much as you would a new table. For instance:

	CREATE TYPE [dbo].[CustomerType] AS TABLE
	(
	    [CustomerID]  INT           NOT NULL,
	    [FirstName]   NVARCHAR (50) NULL
	    [LastName]    NVARCHAR (50) NULL
	)

That’s all folks!
Or… is it?

Here’s the thing. That `MERGE` command is enormously powerful, but the information you get back from it is extremely limited: `@@ROWCOUNT` will tell you the number of rows it touched. But remember our original pattern, which allowed us to feed back to the to user the individual counts of rows added/updated/deleted? Let’s say we need to find a way to do that.

The first thing to fix is that at the moment we are touching ALL existing rows with the FirstName and LastName, even if they are in fact the same, so let’s change that so that we’re only touching the rows we need to touch. That’s actually a simple change to the piece of syntax that deals with the case when we have a match, replacing

      WHEN MATCHED THEN
with

      WHEN MATCHED
      AND Customers.FirstName<>NewCustomerList.FirstName
      OR Customers.LastName<>NewCustomersList.LastName
      THEN

This now tells us the real number of necessary updates, in `@@ROWCOUNT`, but still doesn’t give us the separate counts of updates, insertions and deletions that we desire.

One approach might be to have a separate stored procedure which compared the new and existing data and built some reports on what the `MERGE` command *will* do when it’s run. But that’s potentially error-prone, particularly if there’s a chance the data will change in between the two SQL statements being executed. 

A better approach involves changing the design of the table slightly to add an extra two columns:

	MergeBatchID - char(36) - NULL
	MergeAction - char(1) - NULL

Within the SQL procedure we can generate a batch ID as a GUID, thus:

      DECLARE @batchID AS char(36)
      SET @batchID = NEWID()

and then the updates and inserts can set it appropriately:

      UPDATE SET MergeBatchID = @batchID,
                            MergeAction = ‘U'
                            Customers.FirstName = NewCustomerList.FirstName,
                            Customers.LastName = NewCustomerList.LastName
and

      INSERT (MergeBatchID, MergeAction, CustomerID, FirstName, LastName)
      VALUES (@batchID, 'C', NewCustomerList.CustomerID, NewCustomerList.FirstName, NewCustomerList.LastName)

Using this we can then have some further SQL within the same stored procedure to build the detail we need. Possibly this would be more efficient done as a `GROUP BY` query, but for our purposes we’re happy with a couple of quick-running `COUNT(*)` type queries. Of course, we can’t get the deleted number from the data, because the relevant data has been, um, deleted. But we can derive it from the total returned by `@@ROWCOUNT` and the Updates/Creates numbers we've already extracted:

      DECLARE @Total as int
      DECLARE @Creates as int, @Updates as int
      
      SELECT @Total = @@ROWCOUNT
      SELECT @Creates = Count(*) FROM ClientCompany cc WHERE MergeBatchID=@BatchID AND MergeAction='C'
      SELECT @Updates = Count(*) FROM ClientCompany cc WHERE MergeBatchID=@BatchID AND MergeAction='U'

      SELECT @Creates as CreatedCount, @Updates as UpdatedCount, 
             @Total-(@Creates+@Updates) as DeletedCount, @Total as TotalCount

Naturally, the C# code will also need to modified to read the results. But, other than that, there we have it: the `MERGE` syntax, with full user-friendly stats. 

In our production example, which isn't so different from this, an incremental update of about 10,000 rows of imported CSV takes 1-2 seconds. 
