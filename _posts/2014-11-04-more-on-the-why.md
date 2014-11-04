---
layout: post
category : LDC Via
title: "More on the why..."
tags : [intro, why]
---
{% include JB/setup %}

We’ve spoken about the whys and wherefores of LDC Via already, but some of the use cases [we mentioned in our last post](/2014/10/01/why-oh-why-part-2/) probably bear some expansion. So let’s do that.

**1. Re-homing historical data from servers that are being retired**
A number of organisations maintain Domino infrastructure purely so that they can reference data held thereon&#8212;no new development, no real activity, but they need to &#8220;keep the lights on&#8221;. These servers may be poorly-supported, may not have robust back-up, and can even be running out-dated or un-patched infrastructure (I think many of us have heard about Domino 6 or 7 boxes still running in production). So why not kick those boxes into touch and serve up your data in a modern, cost-effective manner (with support)?

**2. Archiving data from Notes & Domino applications that have grown too large for Domino**
There are all manner of tips &#8217;n&#8217; tricks to make your applications scale. Ultimately however, there are some limitations in our venerable platform, and it is not the solution for every hosting use-case.

The mark of a successful Domino application is one that has lasted years and become overloaded with documents. Why not give the old app a new lease of life? Move historical data off to a platform like LDC Via, and let your Domino application&#8217;s view indices breathe once more.

(Incidentally, if this use-case is especially of interest, do look out for **our LDC Via-XPages integration demo on this very site**)

**3. Integrating Domino-based data with other applications**
Domino can be a bit of a silo. Sure, there are ways of surfacing its data in other environments, but that can get tricky fast. Pushing selected data to LDC Via, with its REST API layer and pleasing user interface could be a solution here. All modern application platforms play well with REST-ful systems, and Via provides a platform for customisation and extension as you see fit.

**4. Selectively making Domino-based data available outside the firewall without exposing your Domino infrastructure**
A lot of your data and tooling sits behind the corporate firewall, and that's for very good reason. However, you may have a business requirement to open up a sub-set of your data to selected third parties. Why not migrate that data directly to Via, and use its API to access it the way you want? A simple, modern user interface comes out of the box, but you have the option of coding your own functionality using our REST APIs and your Javascript frameworks of choice.

**5. Migration of Domino applications to other stacks for increased interoperability and performance**
Current environments include the <abbr title="MongoDb, Express, AngularJS, node.js">MEAN</abbr> stack, and this has a vibrant user-base. Why not take advantage of these skills and opportunities? This means granting Domino data access to a new generation of developers.

**6. Exposing ‘IBM Notes’ application data to non-Notes clients (e.g. web and mobile)**
As per item #4, a lot of corporate data may only be accessible via IBM Notes clients inside the firewall. You _could_ Domino-enable such applications in a bid to move away from fat clients. Or perhaps your organisation has a target platform for projects that doesn’t include Domino? Well, LDC Via could be an option.
