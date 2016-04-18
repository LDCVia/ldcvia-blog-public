---
layout: post
title: "Excelling at data manipulation with LDC Via"
description: ""
category: "LDC Via"
tags: [ldcvia, excel, development, how-to]

---
{% include JB/setup %}
There’s no point having an all-singing all-dancing database application, if the data is locked up and can’t easily be extracted, reported on, analysed, and easily re-purposed for use elsewhere. Everybody’s favourite tool for working with business data in these ways is Microsoft Excel. So, naturally, it’s important that LDC Via has great (excel-lent, in fact) support for Excel. And it does, using Microsoft’s ‘Power Query’ feature.

When we were talking to people at the Engage conference in Ghent, this question came up, so we felt it warranted a fairly detailed ‘how-to’ blog post. In fact, the process is pretty simple, and to make it even simpler we’ve not only written it down step-by-step, but also provided a downloadable Excel file to get you up and running.


![Excel Spreadsheet with LDC Via Data](http://ldcvia.s3.amazonaws.com/ExcelPowerQuery.png)

Using [Power Query](https://www.microsoft.com/en-gb/download/details.aspx?id=39379), which is a free add on to Excel, we can create a parameter-driven spreadsheet that pulls in data from any internet source, including LDC Via.

As ever, the internet is a wonderful source for getting started with these things, so thanks to the likes of [Ken Puls](http://www.excelguru.ca/blog/2014/11/26/building-a-parameter-table-for-power-query/) and [Matt Masson](http://www.mattmasson.com/2014/11/iterating-over-an-unknown-number-of-pages-in-power-query/) this is what we built in a few hours: [LDC Via - Excel Power Query Sample](http://ldcvia.s3.amazonaws.com/ExcelPowerQueryLDCVia.xlsx). There are two sheets in the workbook: ‘LDC Via Data’ displays a table of data that has been pulled from LDC Via; and ‘Settings’ contains the configuration settings that define where to get the data from, what API key to use, and which fields to display in the output results.

To create all this we need two Power Query functions and a main “routine” to actually get the data.

The first function is called fnGetParameter and simply reads the settings from the Settings worksheet:
<script src="https://gist.github.com/whitemx/e9ce60e4aed73377b007.js"></script>
We have four configuration settings:
endpoint defines the LDC Via API endpoint from which data will be extracted. The simplest one will use our collections API that gets lists of documents from a collection
count defines how many documents at a time will be extracted from the API
apikey is your API Key that authenticates you to LDC Via
fields is a comma separated list of field names from the LDC Via collection that will be displayed in the results

Next we need to actually go and get each page of data from LDC Via, and the fnGetCollectionData function performs this task:
<script src="https://gist.github.com/whitemx/7d98d95d07d2039b3004.js"></script>
The relevant page number is passed in as a parameter called “start”, and then we use the Web.Contents and Json.Document functions to retrieve the data and parse it into an object that we can work with.

The documentation for Power Query, is, shall we say, opaque at best, but there is a list of functions that are available to you [on the Microsoft site](https://support.office.com/en-sg/article/Power-Query-formula-categories-125024ec-873c-47b9-bdfd-b437f8716819)—the Power Query editor itself feels very much like going back to the Notes @formula editor, but once you get your head around it, you can perform some pretty powerful operations on the data.

In our case we’re loading the JSON document from LDC Via, extracting an array of document objects stored in the “data” property, converting that to a table, and returning all this to the calling function.

Now we need to pull these two functions together and actually run the query to load the data:
<script src="https://gist.github.com/whitemx/04dcc407c1c5a6ee6d81.js"></script>
Power Query doesn’t really have the concept of a For style loop, so we have to spoof that by creating our own range of page numbers. In this case we’ll loop from 1 to 100, and with 1,000 documents per request that will allow us to get up to 100,000 documents from LDC Via. For each page we call the fnGetCollectionData function, extract the fields that are specified in the settings worksheet, and finally insert them into the main worksheet.

Clearly the speed of all this depends on the number of documents in the database in the first place, but even the example above, with 40,000 documents, takes less than a minute to load and parse all of the data.

<iframe src="https://player.vimeo.com/video/125773559" class="video560" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

To go and get data from a different collection in LDC Via, simply modify the settings worksheet as appropriate, right-click on the GetTableData function, and choose the “Refresh” option: the data will be automatically downloaded and parsed.

Of course, once all your data is loaded you can do all of the things that you’re used to with Excel: pivot tables, filtering, sorting, charts and so on. The world is your mollusc.
