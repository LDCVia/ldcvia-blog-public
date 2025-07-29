---
layout: page
title: "Release notes: Forced Rhubarb”"
category: "Release notes"
---
{% include JB/setup %}

We fixed a styling issue on the “Country” field in our registration screen (no-one wants an ugly drop-down).

… In fact, talking of registrations, we now have a new slimline registration page for the app! It’s so much quicker and easier to get up and running with LDC Via. Hurrah!

No more ninja responses! We fixed a bug in the responses API: all response documents are now identified, regardless of the form used to create them.

A splendid user spotted an issue in LDC Via Lens when it came to Javascript mixing it up with rich text fields. This bug was squashed within minutes of the ticket being raised. Customer and coder working in harmony ladies and gentlemen, right there.

#### Subsequent minor point releases:
* We were being strict and rejecting HTTP requests that didn’t have “accept” headers… we’ve loosened our grip for now.
* You can insert documents and if you fancy it, we’ll generate an RFC4122 (v4) compliant UNID for you. How’s about that!
* When using the `/login` API call with dodgy credentials, we now reject you in the expected way (i.e. a 401) rather than doing something unseemly.
* A new field is coming in a later release, and we‘ve added special support for it (exciting).
* File attachments with commas in their names weren’t being displayed correctly in some admin screens: we are now correctly commaifying them.
* Random `console.log(...)` statements, BEGONE!
* Admin functionality relating to organisations and look-ups. (SSSSH! If I told you more I’d have to kill you).
* We now allow undefined organisations. OK, maybe we don’t allow them. But we don’t get in a server-side hissy fit over them anymore.
* Improved error logging: improved errors? Or improved logging of them? Who can say.
* We updated our MongoDB drivers so that we can continue to give you the very best that MongoDB and LDC Via have to offer.
* Feature: [SAML](https://auth0.com/blog/how-saml-authentication-works/) is now an option for organisations wanting to use it. Whoop!
* We updated the Get User API calls so that the relevant organisation IDs are returned for that user. Always handy.