---
layout: post
title: "Full text search"
category: "LDC Via"
tags: [ldcvia, search]
---
{% include JB/setup %}
 
“Search?” I hear you mutter, “full text search? Really?”

Well yes indeed! We’ve always offered a field-based search facility in LDC Via, but of course, chances are your users will want to search for a phrase across an entire document or collection of documents. Enter LDC Via’s full text search functionality.

Searching like this is often a must-have in an application, but it’s not straightforward to implement when dealing with a platform like LDC Via that offers document-level security. We took some time and did it right, implementing full-text search for those using paid tiers in LDC Via. So if you’re signed up to one of our [paid plans](http://ldcvia.com/prices.html), you have a single box to tick and you’re good to go:

![Database settings screen](http://ldcvia.s3.amazonaws.com/db_settings.png)

Full search functionality will now be available in both the standard templates we offer and the [LDC Via API](http://api.ldcvia.com/#search-in-a-collection).

You can also combine full text search with standard field-based search in a single query. For example, you could issue a single query to get all contracts with an issue date between 01-Jan-15 and 31-Mar-15 within the category “New client”, and mentioning “banana” anywhere in their text.
