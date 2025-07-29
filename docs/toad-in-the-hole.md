---
layout: page
title: "Release notes: “Toad in the Hole”"
category: "Release notes"
---
{% include JB/setup %}
#### API shenanigans
Sometimes you just don’t know where you are. To that end, we’ve added a new API method which lets you locate the collection of a document, when you only know its UNID and database: `1.0/document/:db/:unid`

Whilst we were at it, the password reset API has had a wax ’n’ polish: a new two-stage password reset call is at your disposal, so you can trigger the whole password reset thing from your front-end application: we’re all about a lovely seamless user experience.

Another API update concerns attachments: you can now add files to documents using either BASE64 strings or file uploads, all within the API. We also deal with multiple attachments going into the same rich text item without screeching. Because that’s how we roll, and it’s The Right Thing To Do.

*NIFTY CHANGE ALERT:* we’ve improved the document “Get responses” API call so that it now supports proper threading. You can now have a full response hierarchy presented in the get responses response (sorry), rather than the flat list of yore. Very cool! Read more in [the API docs](https://api.ldcvia.com).

We now return a JSON object when there is an error in the `/1.0/database/:db` call, which makes far more sense than returning a string (not that we ever did that of course. _Cough_).

(Likewise with the `/1.0/databases` code. _Double cough_).

When dealing with database metadata, we now support tags. This means that you can group different databases by tag in your applications, and generally categorise migrated data in a way that makes sense to you.

Finally, NEW THING ALERT! We have a new API documentation site. It’s still at [https://api.ldcvia.com](https://api.ldcvia.com) but it’s all new ’n’ stuff.

#### Other stuff
**NEW BIG FEATURE!** Domain search allows you to perform a search against multiple databases in one operation. Smashing. And whilst you’re doing that, you can also sort multiple fields in your search results. Two changes, one mahoosive improvement to searching in LDC Via!

But that is not all. Oh no no no. In more good news for searching, you can now use **regular expressions** in your structured queries. Not only is this amazingly ~~complicated~~ ~~confusing~~ ~~nerdy~~ powerful, it also means that you can do case insensitive searches (pHeW).

(As an aside, whilst this search stuff was in development we were able to squash the random but rare full-text-indices-going-awol-when-editing-collection-schema bug. Whoop!)

Now this is freaky. Apparently Domino can produce invalid JSON. What are the chances?

Well anyway, our nifty online migration utility takes such nonsense in its stride, rather than falling over and clasping its knee, wailing.

**UNEXCITING BUT GOOD TO KNOW ALERT:** we upgraded everything to the latest version of node.js, and for giggles we also upgraded our Express middleware (about flaming time).

**LDC Via Lens**: we’ve fixed the “allow create” and “allow edit” switches so that they actually do what they say. We figured we may as well.

The **LDC Via web app** has had some love! When viewing a document in our standard admin console, keen observers will note the all-new “View Raw JSON” tab — yes that’s right, you can look at a document in all its naked glory. (Filth).

Our NSF Utility has been seen in the wild. SO. MANY. COMMITS…