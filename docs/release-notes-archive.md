---
layout: page
title: "Older release notes archive"
category: "Release notes"
---
{% include JB/setup %}

### New release: 1.0.201511091200
* A tweak just for our benefit, so we know when some lucky soul signs up to our offering
* We added an “Order By” configuration option for search results, which makes them approximately 3000% more useful
* You can now export documents in EML format, which is pretty handy I’d say
* We’ve exposed (snigger) creation date as an attribute in imported database properties
* If you have a lot of databases, the DBViewer page can get somewhat out of hand.
* We’ve reigned in the anarchy with some filtering
* We’ve got computed fields now! Ring any bells? This is mainly for use in LDC Via Lens, but hey there’s API support there too, so have at it

### New release: 1.0.201508190900
* LDC Via Lens is all well and good, but now you can edit stuff as well as read it. Oh ho!
* If you add the magical text `?all` to an API URL when accessing a document, a really rather useful boolean called `__iseditable` is returned in the payload. Splendid: contextually-aware UIs here we come…
* There have been a few bug squashing expeditions in LDC Towers: the Activity Logs viewer and various screen layouts benefit the most.
* It can be tricky, getting started with a new platform or API. So to ease the path, we’ve added some demo downloads to the Database Migrator page, with single click migration of sample databases so you can play with this stuff straight-away.
* The website supporting our IMPORTant endeavours (see what I did there?) has undergone a massive amount of work: we hope you like it (more stuff coming).
[Documentation for the Java utility errors](/release-notes/java-util-errors) is in place, and refinement is ongoing.
* Oh, talking of the Java utility, there’s a new version! More robust error handling, more useful reporting. Nice.
* An LDC Via application can be made available to any authenticated user, even those from a different organisation, which could be handy.
* … this adds to other bits of code we added to support our new Dev Hub discussion forum.
* We tried to standardise our CSS between the website and the application. We almost succeeded.
* We extended the idle session timeout to twenty minutes.
* We modified a couple of error messages for clarity.
* You can now delete fields from collections (data and meta data).
* … and, and you can add new fields to collections (meta data).

### New release: 1.0.201507011600
* We fixed a thing so that the thing that returns you things after you delete things in the API works
* Whilst normal users aren’t “super users” (in the strictest sense of the meaning in Via: everyone is super to us of course), they couldn’t see all database details – now they can
* OH MY GOODNESS BETTY, THE BIG ONE: we added support for full-text indexing and searching!! (no, I don’t know who Betty is)
* So then we also added full-text search to our Lens templates
* … and then were on a roll, so we added full-text search to the Discussion, Doc Library, Teamroom and Mail templates
* We now show you date / time created for users in the users view. At last
* We hit an obscure bug with complex search queries not returning all results, which was unacceptable. Now made acceptable (we fixed it)
* The view pager in Lens has had some under-the-hood jiggery-pokery making it BETTER
* When defining a screen for viewing data in LDC Via Lens, field definitions can now be dragged n dropped around the screen dynamically. MUCH better than specifying numeric order the long way, which was really boring

### New release: 1.0.201506040800
* We updated our swish PDF exporter to use our equally swish corporate font (Raleway).
* We brought our new offering, LDC Via Lens, into the Raleway fold too!
* The user screen was displaying emails which was a tad impersonal: now sorted.
* Deleting a user is now a simpler, tidier process
* … which means you no longer need to remove accounts in what was an entirely pointless and separate step. We can only apologise for how things used to be.
* The API key reset button was out of whack. It is now whack.
* We removed the zip code field from the account screen. No-one needed to see that.
* We made the registration screen help text helpier.
* We fixed a bug to do with linking and unlinking super users. It’s not very exciting but Ben is proud of it so we’re giving him that.
* Are you a SuperUser, a super-user or a super user? Log in and find out.
* We fixed a logging bug in user name management. Again, not very exciting but we give Matt props this time.
* **Important**: all our lovely standard templates are now in same sub-domain as the main application, which is as it should be.
* **Really important**: trial accounts now get two databases! How cool is that?
* We added a “New Database” wizard which is darned useful.
* Matt was on a roll so then he added a “New Collection” wizard too.
* We added an “Open As…” button so any database can be viewed within any template.
* LDC Via Lens: we added admin screens for our new Lens views
* … so I suppose we should mention that, er, we added “views” to LDC Via Lens
* There was a bug to do with switching between Settings and Collections in the Database Viewer page. He squashed now!

### New Release: 1.0.201505051400
* We added some new metadata for collections (field position, label and key field flag). This is really useful and splendid because… well you’ll just have to see.
* … Oh OK, we’ll tell you: we added a new config-driven application template which uses said meta data to render data the way you want. What about that eh?
* We want to be more helpful and give you a hand with this stuff, so we’ve made our welcome email (post-registration) more friendly and useful.
* We’re keen to know how you happened upon our happy offering, so we’ve added a “how did you hear about us” option to the organisation screen (also asks you this most pertinent of questions when you register).
* We fixed some alert CSS so it’s more suitably alert-y.
* We fixed an an issue whereby the admin view was being shy about revealing database names.

### New Release: 1.0.201504231300
* We’ve added some pointers to the Database Migrator page so it’s even more obvious than ever before what to do. How kind are we?
* We’ve updated the version of [mongoose](https://mongoosejs.com/) used in the tool. No word on what Rikki-Tikki-Tavi thinks of that
* There was a wee bug-a-boo when searching with regex. That’s fixed now, so you can shoot yourself in the foot a myriad other ways before _we_ screw things up for you
* Rich text. Ah rich text. What a wee pest you are. Minor null value bug fixed!
* All of our standard templates are now [XComponent](http://xcomponents.org/)-ified! Cool.
* More error handling added to Via’s hourly cron job. If time stops, we should be OK.
* You can now send API keys as URL parameters so you don’t have to tinker with your HTTP headers if you don’t want to.