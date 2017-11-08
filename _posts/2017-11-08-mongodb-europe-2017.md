---
layout: post
title: "MongoDB Europe 2017"
category: LDC Via
tags: [infrastructure, mongodb, mdbe17]
---
{% include JB/setup %}
<div class="full-header">
  <img src="/assets/img/blog/mdbe-17-logo.png" alt="Header image: MongoDB Europe 2017 logo" title="MongoDB Europe 2017 logo" height="199px" width="384px" />
</div>

It’s been quiet on this site for a couple of months, and that’s because as usual we’re all heads-down working. So many things to do, so many things. Sometimes however, one has to take a step back and look around, see what’s happening, see what’s around the corner, and see what others are doing.

A few years ago, all of us attended MongoDB “days” in London which were interesting, niche-ish geek-fests. That has really changed now. MongoDB is over a decade old, and at the MongoDB Europe conference today, they [officially announced version 3.6](https://www.mongodb.com/mongodb-3.6?jmp=homepage), and its impressive feature-set.

Our intrepid loon Ben attended said conference which was well-organised, well-attended, and pretty well-populated with useful content. Particular sessions of note included those on the forthcoming developer-focused product [MongoDB Stitch](https://www.mongodb.com/cloud/stitch), along with [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) which has been in beta for some time. These satellite offerings look great (oh my: query-able back-ups in Atlas!), but what of the core product?

Well, version 3.6 of MongoDB offers a number of intriguing features, which can be summarised as follows:

* Change streams: invoked with a simple <code>coll.watch()</code> these are [Observers](https://en.wikipedia.org/wiki/Observer_pattern) for MongoDB. Fab!
* “Retryable” writes in the event of failures.
* Oodles of document updates including hugely increased “expressibility” in queries, aggregations, pipelining, array processing and updating. These look to be very powerful, and I think [Matt](http://mattwhite.me) will be cock-a-hoop with them.
* [R driver](https://www.r-project.org) to support advanced analytics and business intelligence.
* Support for [JSON schema](http://json-schema.org).
* Tunable consistency: customise your app’s balance between read-write consistency needs and overall availability.

You can read more about 3.6 and the future of MongoDB on the [official web site](https://www.mongodb.com/).
