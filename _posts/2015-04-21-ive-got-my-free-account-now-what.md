---
layout: post
title: "I’ve got my free account. Now what?"
description: ""
category: "LDC Via"
tags: [ldcvia, primer, how-to]
---
{% include JB/setup %}

We decided that everyone should be able to try out LDC Via for free. With our trial account you get full functionality so that you can see and do everything that paid accounts can. We know there’s a lot to LDC Via, and it can be a little overwhelming, so we thought we’d talk about what you may want to try out [having signed up](https://eu.ldcvia.com/register).

First things first, you’ll want to migrate some data. You’ve got two choices here. If your Domino server is internet-facing and you can enable [Domino Data Service](http://infolib.lotus.com/resources/domino/8.5.3/doc/designer_up1/en_us/DominoDataService.html#Overview) then a cloud-based migration is the simplest route. Our [Migration Cheatsheet](https://ldcvia.zendesk.com/hc/en-gb/articles/201029202) document should help you get set up there.

Once your Domino server is configured, you can go to the [Database Migrator](https://eu.ldcvia.com/migrator) page and enter the details for your server. You’ll need to enter the URL pointing to your database, your Domino username and password and then select the view that you want to migrate. That’s it! We do the rest of the work for you.

![Database Migrator Page](http://ldcvia.s3.amazonaws.com/DBMigrator.png)

If your Domino server is not internet-facing or DDS is out of the question, then you can use our [Desktop Migration Utility](https://ldcvia.zendesk.com/hc/en-gb/articles/202077211-Getting-started-Remote-migration-). You just need to complete the config file and run the migrator from your desktop machine.

Once done, now that we have some data we’ll want to do something with it. If the database you migrated matches one of our standard templates (Mail, Discussion, Teamroom, Document Library) then you can go to the [Database Viewer](https://eu.ldcvia.com/dbviewer) page and view your application.

![Discussion Template](http://ldcvia.s3.amazonaws.com/DiscussionTemplate.png)

The main benefit of LDC Via comes with the use of our [REST API](http://api.ldcvia.com) of course: you can now create custom applications using whatever technology you prefer. We have samples using [XPages](https://github.com/LonDC/demos-xpages), [.NET](https://github.com/LonDC/demos-dotnet) and [AngularJS](https://github.com/LonDC/templates-discussion) to get you started, but anything that can talk to a REST API can use our services.

Hopefully thoughts will be bubbling to the top of your mind…

* What if I want to run a “live archive” of data from Domino so that I can reduce the size of my NSF?
* What if I want to securely expose a subset of data behind the firewall to customers via the internet?
* What if I want to shut down a Domino server but retain access to all of the data?
