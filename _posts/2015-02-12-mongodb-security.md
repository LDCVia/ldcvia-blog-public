---
layout: post
category : LDC Via, MongoDB
title: "MongoDB security"
tags : [mongodb, security, data]
---
{% include JB/setup %}

MongoDB security concerns have recently hit the press: you may have seen some of the posts. The latest focusses on some German students who identified tens of thousands of MongoDB databases that are wide open: no security on them at all!

[Information Age: Major security alert as 40,000 MongoDB databases left unsecured on the internet](http://www.information-age.com/technology/security/123459001/major-security-alert-40000-mongodb-databases-left-unsecured-internet)

Setting aside the insanity of not performing the most basic of security procedures, it&#8217;s probably good to outline how we at LDC Via approach this sort of thing, courtesy of our very own Matt White&hellip;

>It&#8217;s a pain in the bum for us to get access to the databases, let alone anyone else.

Yep. We lock our MongoDB servers down. We lock them away from the internet. We lock our databases down. And then we employ application-level security too. That&#8217;s how it should always be done.
