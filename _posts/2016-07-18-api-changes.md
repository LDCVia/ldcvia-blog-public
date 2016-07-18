---
layout: post
title: "Eton Mess API changes"
category: "Releases"
tags: [api, ldcvia, features, ]
---
{% include JB/setup %}

A large portion of our time is spent writing applications that use LDC Via as a back-end. As we do more and more development, we identify improvements to the <abbr title="Application Programming Interface">API</abbr> that will make our lives (and, therefore, the lives of our customers) easier.

In our most recent “Eton Mess” release there have been several changes to the API, but we thought we’d concentrate on just two key updates for now:

The first is a completely new API method [dbacl](http://api.ldcvia.com/#get-list-of-database-users), which returns a list of all people in your organisation who have access to a specific database. By way of example, this method recently proved useful in determining to whom new document notifications should be sent.

The second change we want to highlight is an update to the API methods which allow the storage of unstructured metadata.

_Eh? What? Why?_

We’re currently writing a new application and we needed to store various settings for the application somewhere, but didn’t really want to create a new database just for this. We can now store those little switches and bits of information about the app in the database details and cache them as required. Handy!

If you want to make use of this new feature, we’ve updated the API documentation to tell you how: [set database details](http://api.ldcvia.com/#set-database-details).

We’ve said this many times, but it still holds true: we don’t have any hidden APIs. If we discover something that we need then we’ll create a new API and publish it for everyone to use. So, whatever we can do with the LDC Via platform, anyone else can as well. And we’re always looking for ways to improve things: if you have any ideas, please let us know.

_Eton Mess was released on June 8th. A full list of all the lovely functionality in this version can be found in [our release notes](https://ldcvia.zendesk.com/hc/en-gb/articles/208944465-New-release-Eton-Mess-1-0-20160607-)._
