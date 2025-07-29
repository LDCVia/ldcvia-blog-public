---
layout: page
title: "Java utility: parameters"
category: "Technical"
---
{% include JB/setup %}

The Java Import Utility works with a configuration file in order to import your data as you would like it. The file includes a number of parameters; whilst you don’t need them all, full details for each one provided. 

**Name:** api.targeturl
**Mandatory / optional:** Mandatory
**Values:** A fullly qualified URL
**Description:** This the URL of the Via API, it will most likely be the cloud URL of one of the Via clusters but can by your own on premise url
**Example:** api.targeturl = https://eu.ldcvia.com

**Name:** api.userkey
**Mandatory / optional:** Mandatory
**Values:** A fullly qualifiyed URL
**Description:** This the API Key that will with an email address provide you access to the REST API For Via
**Example:** api.userkey = a6ce7286c137656b40fb63213e078740

**Name:** convert.by
**Mandatory / optional:** Optional
**Values:** view or form
**Description:** what do you want to convert by i.e what do you want the mongo db collections named after view/form
**Example:** convert.by = view

**Name:** convert.forms
**Mandatory / optional:** Optional
**Values:** (The forms that you want converting
**Description:** document that use which forms do you want converting, leave blank for all
**Example:** convert.forms = memo, config

**Name:** convert.security.fieldtypes
**Mandatory / optional:** Optional
**Values:** readers/authors/all/none
**Description:** which security field types do you want convert
**Example:** convert.security.fieldtypes = all

**Name:** convert.target = Local
**Mandatory / optional:** Optional
**Values:** local/remote/both
**Description:** the target for the conversion
**Example:** convert.target = Local

**Name:** convert.uniqueID
**Mandatory / optional:** Optional
**Values:** guid or unid
**Description:** which Domino document ID you want to key on. UNID is the Domino universal ID and only unique within a single database, where as the GUID is unique across a whole system (the only real reason to use GUID is if you are merging multiple NSFs into a single MongoDB)
**Example:** convert.uniqueID = unid

**Name:** convert.views
**Mandatory / optional:** Optional
**Values:** (The views that you want converting
**Description:** documents that are in which views that you want converting, leave blank for all
**Example:** convert.views = Admin\\All Documents

**Name:** db.mongo.adminbd
**Mandatory / optional:** Optional
**Values:** a text string without special charaxters
**Description:** the database name in which all settings and structure data will be stored
**Example:** db.mongo.adminbd= NSF2MongoDB

**Name:** db.mongo.logbd
**Mandatory / optional:** Optional
**Values:** a text string without special characters
**Description:** the database name in which all logged action are stored
**Example:** db.mongo.logbd = logsdb

**Name:** db.mongo.password
**Mandatory / optional:** Mandatory
**Values:** (A text String)
**Description:** The user account on the mongo db that you wish to perform the database migration
**Example:** db.mongo.password = password

**Name:** db.mongo.portnumber
**Mandatory / optional:** Optional
**Values:** (the port number that you MongoDB is listening on)
**Description:** If you have setup your target MongoDB to listen on an alternative port to 27017 then you can change that with this parameter
**Example:** db.mongo.portnumber = 27017

**Name:** db.mongo.servername
**Mandatory / optional:** Mandatory
**Values:** (Either a FQDN for the server or an IP address )
**Description:** The target MongoDB server is you are migrating data directly to a server rather than the LDC Via API
**Example:** db.mongo.servername = 127.0.0.1

**Name:** db.mongo.targetbds
**Mandatory / optional:** Mandatory
**Values:** (one or more collection name names
**Description:** This is the name of the target collection that you want the databases migrated to, if there are the same number of target collections as there are source databases in "nsf.sourceDbNames" then they will be paired off, if there is only one target collection then all source databases will be migrated to that one collection, if the collection already exists then database will be appended / updated within that collection (the existing collection will not be replaced with a new one)
**Example:** db.mongo.targetbds = issHomeNewtest

**Name:** db.mongo.username
**Mandatory / optional:** Mandatory
**Values:** (A text String)
**Description:** The user account on the mongo db that you wish to perform the database migration
**Example:** db.mongo.username = root

**Name:** db.mongo.usersbd
**Mandatory / optional:** Optional
**Values:** a text string without special characters
**Description:** the database name in which all user and group details will be stored
**Example:** db.mongo.usersbd = nsf2users

**Name:** language
**Mandatory / optional:** Optional
**Values:** EN (currently that is the only value we support as we have not done the other language translations)
**Description:** The 2 letter value for the language the tool will run in.
**Example:** language = EN

**Name:** licence
**Mandatory / optional:** Optional
**Values:** (a valid licence phrase
**Description:** Licence phrase, only valid for beta or an enterprise key, this defaults to beta if no org.licenseKey is present
**Example:** licence = demo

**Name:** logging.runlog
**Mandatory / optional:** Optional
**Values:** Any valid file name for your operating system
**Description:** This is the name of the text file that is generated with details of the migration that is generated when you run the command line tool
**Example:** logging.runlog = runlog.txt

**Name:** nsf.idPassword
**Mandatory / optional:** Mandatory
**Values:** (any text string)
**Description:** This is the password for the id file that is referenced in the notes.ini that is being used by the Java Command line tool
**Example:** nsf.idPassword = password

**Name:** nsf.sourceDbNames
**Mandatory / optional:** Mandatory
**Values:** (one or more database names
**Description:** The source database that you want converted if there are multiple database then it must have the same number as db.mongo.targetbds
**Example:** nsf.sourceDbNames = Directory\\Documents.nsf , extrastruff.nsf

**Name:** nsf.sourceNAB
**Mandatory / optional:** Optional
**Values:** names.nsf
**Description:** The source name and address book that will be used for user and group lookup.
**Example:** nsf.sourceNAB = names.nsf

**Name:** nsf.sourceNABView
**Mandatory / optional:** Optional
**Values:** ($VIMPeople)
**Description:** The view in the name and address book that you want to use for your name look ups this view must have the first column in the format abbreviated full names eg Joe Bloggs/Acme
**Example:** nsf.sourceNABView = ($VIMPeople)

**Name:** nsf.sourceServerName
**Mandatory / optional:** Mandatory
**Values:** (The name of the source server)
**Description:** The server upon which the source NSF files reside. This can be left empty to use the current server (which is the setting that you would use is you were running the utility on the actual Domino server)
**Example:** nsf.sourceServerName = test/acme

**Name:** org.address01
**Mandatory / optional:** Mandatory
**Values:** (A text string)
**Description:** Part of the organisational object for your user, only needed if you are directly importing your data into MongoDB but still wish to use the LDC Via security model
**Example:** org.address01 = 24 Ivymount Road

**Name:** org.address02
**Mandatory / optional:** Mandatory
**Values:** (A text string)
**Description:** Part of the organisational object for your user, only needed if you are directly importing your data into MongoDB but still wish to use the LDC Via security model
**Example:** org.address02 = town

**Name:** org.addressCity
**Mandatory / optional:** Mandatory
**Values:** (A text string)
**Description:** Part of the organisational object for your user, only needed if you are directly importing your data into MongoDB but still wish to use the LDC Via security model
**Example:** org.addressCity = London

**Name:** org.addressCountry
**Mandatory / optional:** Mandatory
**Values:** (A text string)
**Description:** Part of the organisational object for your user, only needed if you are directly importing your data into mongo db but still wish to use the LDC Via security model
**Example:** org.addressCountry = United Kingdom

**Name:** org.addressPostalCode
**Mandatory / optional:** Mandatory
**Values:** (A text string)
**Description:** Part of the organisational object for your user, only needed if you are directly importing your data into MongoDB but still wish to use the LDC Via security model
**Example:** org.addressPostalCode = XX1 1XX

**Name:** org.addressState
**Mandatory / optional:** Mandatory
**Values:** (A text string)
**Description:** Part of the organisational object for your user, only needed if you are directly importing your data into MongoDB but still wish to use the LDC Via security model
**Example:** org.addressState = Greater London

**Name:** org.licenseKey
**Mandatory / optional:** Mandatory
**Values:** (A text string)
**Description:** Part of the organisational object for your user, only needed if you are directly importing your data into MongoDB but still wish to use the LDC Via security model
**Example:** org.licenseKey = password

**Name:** org.name
**Mandatory / optional:** Mandatory
**Values:** (A text string)
**Description:** Part of the organisational object for your user, only needed if you are directly importing your data into MongoDB but still wish to use the LDC Via security model
**Example:** org.name = LDC Via Ltd

**Name:** org.phone
**Mandatory / optional:** Mandatory
**Values:** (A text string)
**Description:** Part of the organisational object for your user, only needed if you are directly importing your data into MongoDB but still wish to use the LDC Via security model
**Example:** org.phone = 020202020202

**Name:** org.state
**Mandatory / optional:** Mandatory
**Values:** (A text string)
**Description:** Part of the organisational object for your user, only needed if you are directly importing your data into MongoDB but still wish to use the LDC Via security model
**Example:** org.state = XXXX

**Name:** users.generateGroups
**Mandatory / optional:** Optional
**Values:** yes no
**Description:** if you want group names found in readers, authors and names fields to be converted into groups
**Example:** users.generateGroups = yes

**Name:** users.generateRoles
**Mandatory / optional:** Optional
**Values:** yes no
**Description:** if you want roles found in readers, authors and names fields to be converted into groups
**Example:** users.generateRoles = yes

**Name:** users.generateUsers
**Mandatory / optional:** Optional
**Values:** yes no
**Description:** If you want names found in readers, authors and names fields to be converted into user accounts
**Example:** users.generateUsers = yes

**Name:** users.userlog
**Mandatory / optional:** Optional
**Values:** Any valid file name for your operating system
**Description:** where to store the output log file for any users generated; this will default to ’userlog.txt’ (note that plain text passwords are stored too).
**Example:** users.userlog = usersgenerated.txt

**Name:** user.email
**Mandatory / optional:** Mandatory
**Values:** (a valid email address)
**Description:** This the email address that will with an API key will provide you access to the LDC Via REST API.
**Example:** user.email = colin@ldcvia.com