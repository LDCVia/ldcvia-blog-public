---
layout: post
title: "Using Google Apps Script with LDC Via"
category: LDC Via
tags: [code, Google, apps script, LDC Via, api]
date: 2017-05-23 14:52:15;

---

{% include JB/setup %}

As some of us know, managers love a good spreadsheet. And [G Suite Sheets](https://gsuite.google.co.uk/products/sheets/) is a very capable offering in this space. With a lot of organisations going down the Google path, we thought it might be fun to have little play with G Suite and [LDC Via](http://ldcvia.com) working in tandem.

G Suite makes use of [Apps Script](https://developers.google.com/apps-script/) to provide the equivalent of MS Office macros. You can add code to Google Docs, Sheets, Forms, Slides and more. Whilst the code can make use of optional &#8220;triggers&#8221;, when it comes to Google Sheets, you can actually reference functions written in apps script directly within your spreadsheet formula.

For example, if I write a function called `someFunctionOrOther()` in the script editor, I can make use of this function in my spreadsheet simply by referencing it in a standard cell formula: `=someFunctionOrOther`. Easy eh? So let&#8217;s use it with LDC Via. Via provides a comprehensive REST API, and you can consume such APIs in apps script. We have an activity API in Via which provides simple stats (number of audit log items) for each database that the current user account has access to. Let&#8217;s pull this data into a spreadsheet, and then we can analyse it further.

Here&#8217;s some sample apps script to consume the activity API:

```
function getViaDbActivity() {
  // Set this to your key
  var apikey = "<API KEY>";

  // Via API endpoint for database activity
  var url = "https://eu.ldcvia.com/1.0/activity";

  // Request options: note the headers object
  var options = {
    'method' : 'get',
    'contentType' : 'application/json',
    'headers' : { 'apikey': apikey }
  };

  // Perform the request
  var response = UrlFetchApp.fetch(url, options);
  var data = JSON.parse(response.getContentText());

  // Iterate response JSON and pass data back
  var array = [];
  Object.keys(data).forEach(function(db, index) {
    var numberOfLogs = data[db];
    array.push([db, numberOfLogs]);
  });

  return array;
}
```
The function returns an array which is automatically parsed into rows and columns when a single cell references the function. We end up with something that looks like this:

![Google Sheet / LDC Via screenshot](http://ldcviablog.s3.amazonaws.com/via-activity.png)

Note how we&#8217;ve then fired up the G Suite &#8220;Explore&#8221; function which lets us start to make sense of our data.

Nifty eh? And oh so simple!
