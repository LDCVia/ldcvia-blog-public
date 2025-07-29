---
layout: page
title: "Java utility: error messages"
category: "Technical"
---
{% include JB/setup %}

#### VIAJT-001
Unhanded error while running createDocument.

#### VIAJT-002
We got a "UnsatisfiedLinkError" when making the connection to the Domino database via createSession; this can be due to one of two reasons:

#### VIAJT-003
Unhanded error while creating a connection to the server via createSession.

#### VIAJT-004
Unhanded error while performing a local database conversion.

#### VIAJT-005
We got an 405 error when trying to send the document to the API, which means that document already exists you should be doing a post to update an existing document rather than a put.

#### VIAJT-006
Unhanded error while performing a PUT to the remote server via the API convert during the actual PUT action.

#### VIAJT-007
Unhanded error while performing a put to the remote server via the API convert either before or after the actual http request.

#### VIAJT-008
Unhanded error while trying the get the size of the metadata during the GetMeta function, we need the log to fix this one.

#### VIAJT-009
Unhanded error while trying the get the database or collections during the GetMeta function.

#### VIAJT-010
We cant get the mongo Admin db, you must stipulate this in your config file.

#### VIAJT-011
Unable to get LicencekeyOrgId so we have not written any meta data.

#### VIAJT-012
Unhanded error while running the SetMeta function.

#### VIAJT-013
No con-fig document is stipulated for when the setconfigs are called.

#### VIAJT-014
Unhanded error while running the Setconfigs function.

#### VIAJT-015
Could not open the source Domino Directory nsf in the getNotesUser function.

#### VIAJT-016
Unhanded error while running the getNotesUser function.

#### VIAJT-017
Could not open the source Domino Directory in the getGroupUserList function

#### VIAJT-018
Unhanded error while running the getNotesUser function.

#### VIAJT-019
Could not open the source Domino Directory in the getRoleUserList function.

#### VIAJT-020
Unhanded error while running the getRoleUserList function.

#### VIAJT-021
Unhanded error while running the getMongoDate function, most likely a badly formatted notes date, we need the log to fix this one.

#### VIAJT-022
Unhanded error while running the getMongoDate function, most likely a badly formatted Java date, we need the log to fix this one.

#### VIAJT-023
Unhanded error while running the vectorToArrayListOfDoubles function, most likely a badly formatted Vector Object.

#### VIAJT-024
Unhanded error while running the getFieldStrings function.

#### VIAJT-025
Unhanded error while running the getFirstCalender function, most likely a badly formatted Vector Object.

#### VIAJT-026
Unhanded error while running the getFirstDate function, most likely a badly formatted Vector Object.

#### VIAJT-027
Unhanded error while running the getAllViewsNames function, most likely we cant get access to the database.

#### VIAJT-028
Unhanded error while running the getAllFormNames function, most likly we cant get access to the database.

#### VIAJT-029
Unhanded error while running the saveConversionLog (notesUnid, mongoUnid) function.

#### VIAJT-030
Unhanded error while running the saveConversionLog (notesUnid, mongoUnid, status, convertedDate, notes) function.

#### VIAJT-031
Unhanded error while running the convertView function, most likely we cant get access to the view.

#### VIAJT-032
Unhanded error while running the convertForm function, most likely we cant get access to the form.

#### VIAJT-033
Unhanded error while running the makedbRefName function, most likely we cant get access to the Database.

#### VIAJT-034
Unhanded error while initialising Resource.

#### VIAJT-035
We cant connect to the target mongo database, normally either a wrong server address or Port number.

#### VIAJT-036
We cant logon to the target mongo database, we can connect to it but not login so most likely a incorrect user name or password.

#### VIAJT-037
We cant logon to the target mongo database, we can connect to it but no logon details have been provided.

#### VIAJT-038
We cant connect to the mongo log database, normally missing either wrong address or Port number.

#### VIAJT-039
We cant logon to the mongo log database, we can connect to it no logon details have been provided or the user name or password password are.

#### VIAJT-040
We cant logon to the mongo log database, we can connect to it no logon details have been provided.

#### VIAJT-041
We cant connect to the mongo log database, We are getting an unknown host error back.

#### VIAJT-042
We cant connect to the mongo admin database, normally either a wrong server address or Port number.

#### VIAJT-043
We cant logon to the mongo admin database, we can connect to it but no logon details have been provided or the user name or password password are.

#### VIAJT-044
We cant logon to the mongo admin database, we can connect to it but no logon details have been provided.

#### VIAJT-045
We cant connect to the mongo admin database, We are getting an unknown host error back.

#### VIAJT-046
We cant connect to the mongo user database, normally either a wrong server address or Port number.

#### VIAJT-047
We cant logon to the mongo user database, we can connect to it no logon details have been provided or the user name or password password are.

#### VIAJT-048
We cant logon to the mongo user database, we can connect to it no logon details have been provided.

#### VIAJT-049
We cant connect to the mongo user database, We are getting and unknown host error back.

#### VIAJT-050
There was an error in the config file. the line before this error in the log file gives details.

#### VIAJT-051
There was an error with the licence, please see the line after this one and send us that error.

#### VIAJT-052
You have not specified how you want to convert the database(s) - please check the 'convert.by' setting in the config file.

#### VIAJT-053
Unhanded error while running RealMain, we need the log to fix this one.

#### VIAJT-054
No view could be found with the name specified in the output log in the currently open database, please check you have spelt the view name correctly.

#### VIAJT-055
No forms could be found in the database.