---
layout: post
category : LDC Via
title: "Why oh why oh why (Part One)"
tags : [intro, why]
---
{% include JB/setup %}

We thought it would be helpful to explain why we've created LDC Via, and why you might want to use it.

Between us at LDC we have about 70 years of experience working with IBM (Lotus) Notes and Domino. We’ve been there through all the ups and downs and ins and outs of the product’s history since version 3 back some time in the late 20th century (when you were a mere lad or lass, of course).

What we’re seeing now is that Notes and Domino are viewed (whether correctly or not—that’s a separate discussion!) as being somewhat old-fangled, uncool and—that horrible word—“legacy”. The upshot is that some organisations are reducing, or even stopping, investment in this platform. For email they may well be migrating, or have migrated, to Microsoft or Google. Those that are staying with IBM may be considering moving to IBM SmartCloud for email. So, for many, the on-premises Domino servers have become a liability, a problem, and an unwanted overhead. But—and it’s a big but—there are important business records and data locked away on those servers.

So that’s the first reason why we built LDC Via. We believe that many organisations need a route away from Domino as a strategic data store. That may not mean they’re dropping Notes / Domino entirely, of course. But it may mean that they want to downscale or eliminate internal infrastructure, it may mean that they want to retire the Notes / Domino applications but have the data available, or it may mean that they want to redevelop the applications on an alternative platform.

Alongside this gradual shift in focus away from Domino, has been a recent and fairly rapid rise in “NoSQL” databases. The irony, of course, is that Domino’s NSF data structure is itself a NoSQL database. But it’s an ageing one, with undoubted issues of performance and scalability when compared to some of the younger contenders. And with the rise of these databases has been a parallel rise in acceptance of new development architectures to make the most of them, most notably the “MEAN stack”. Here at LDC Via we opted to develop first against the MongoDb back-end, as that is arguably the most accepted and widespread of these modern NoSQL databases.

Where the Domino NSF database has always been a market-leader is in its security structures. Readers fields, Authors fields, encryption keys, database encryption, etc. There just isn’t anything else like it. Except, well, now there is: LDC Via.

We hope that’s given you a glimpse into why we’ve built this product. It’s because we believe you need it. In part two we’ll explore why we believe that.
