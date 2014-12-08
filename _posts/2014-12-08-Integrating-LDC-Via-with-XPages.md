---
layout: post
category : LDC Via
title: "Integrating LDC Via with XPages"
tags : [xpages, api, how-to, code, rest]
---
{% include JB/setup %}

One of the key use cases for LDC Via that we see is for archiving data for successful IBM Domino applications. We all know that Domino has limitations: when a database gets too big, it can really affect performance… but there’s so much good stuff in Domino–like security and integration with email–that it would be a shame to have to migrate your whole application to a completely different platform.

What if there was a “middle ground”? How about moving older or inactive data to a different storage area, but one that still maintains document-level security? You may be surprised to learn how straightforward it is to integrate XPages with other platforms via a REST API.

By way of illustration, we’ve created a sample Domino application that connects to the LDC Via service, obtains a list of LDC Via-supplied databases that the current user can see, and lets the user browse those databases (an individual MongoDB database contains one or more “collections”, and each collection contains documents). Hopefully you can see by looking at the code that makes up the sample app just how easy this is. The main component that drives it all is a managed bean that pulls data from our REST services:

<script src="https://gist.github.com/whitemx/9ec7fafec207e66fd392.js"></script>

Using this code combined with a single XPage, we can retrieve the aforementioned database list, together with lists of collections within those databases, and for each collection the documents it contains (all based on what the user is permitted to see):

<script src="https://gist.github.com/whitemx/a23a13a6a495029437af.js"></script>

![LDC Via database list screenshot](/assets/LDCViaXPagesDemo.png)

The screenshot shows the list of migrated NSF files (“databases”) that our test user has access to. We’ve selected the database called **unpsampler.nsf**, and then a collection therein called “Document”. This collection contains 88 documents accessible to the user, and using the API we can then view the first 30 documents, paging through the rest in much the same way you would with a Domino view.

This is a very simple demo, and it wouldn’t take much effort to customise the code to fit your specific requirements. From the end user’s point of view there need be no difference at all in their experience, except that your XPages application is hopefully more responsive as you reduce the amount of live data you’re working with!
