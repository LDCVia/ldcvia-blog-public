---
layout: post
title: "Why don’t we migrate code?"
category: LDC Via
tags: [code, migration, LDC Via]
date: 2017-05-16 13:23:21;

---

{% include JB/setup %}

Now that the dust has settled after [Engage](http://engage.ug), it’s back to work, and time to address a few things that often come up when we exhibit at conferences.

When we embarked upon [the LDC Via platform](http://ldcvia.com), we made a conscious design decision about application logic, and more specifically, application code (agents, script libraries, form events and so forth). We do *not* attempt to convert any of these constructs when we migrate content from a Domino database to our platform.

## Why? ##

* I don’t write JavaScript like I write LotusScript. Do you?
Languages have moved on (capabilities, syntax, patterns): what works for VB6-style Lotusscript looks odd in 21st century Java or JavaScript.

* How can you take advantage of the good new stuff if you convert your old business logic the old-fashioned way? What about modern language constructs like lambdas and promises?

* There is no magic bullet: can you _really_ convert code and logic from Domino without intervening?

* Do you *want* to translate this code? It may well be redundant, or you may want to take advantage of moving your app to have a bit of a tidy-up. For example, why not shift all those form events to one central location? Get rid of those pesky myriad button clicks and bind them to a page in one fell swoop… Who wants cruft in their shiny new app?

* Code might be locked to the platform and no longer really apply. For example, custom dialogue boxes and <abbr title="User Interface">UI</abbr> classes in the Notes client.

* Auto-translated code could be prone to errors.

* Good LotusScript is strongly-typed, JavaScript is not.

* Do you actually understand the business logic behind the legacy codebase? It’s entirely possible that no one does. Do you want to migrate an application “lock, stock and barrel” without knowing how it actually works?

All well and good, but what _is_ the best approach for migrating your Domino databases? Given that you’re already migrating all of your data, now would be a good time to re-validate the business logic behind your application.
Have the best of both worlds: improve your application’s workflow sure, but now is the time to improve the quality of your code, beef up your test coverage, and so on.

Needless to say, [we can help you every step of the way](mailto:info@ldcvia.com?subject=Migration%20help%20please!): we’ve got plenty of experience in this space.
