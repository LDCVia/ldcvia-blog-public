---
layout: post
title: "node.js marches on"
category: LDC Via
tags: [work, node.js]
---
{% include JB/setup %}

Nothing in the world of programming ever stays still, and, as time moves on things only change faster and faster it seems.

In our world we do a lot of node.js development and we've recently been taking stock of where we are.

As a rule of thumb, you want to be running on even number ["LTS" (Long Term Support)](https://github.com/nodejs/LTS) versions of node.js. As of today (July 2017), version 6 is where most people should be and then in October the default will switch to version 8. The transparency is great, but the change is relentless.

Some legacy code was, until recently running on the node.js 4.x codestream. This is still supported, but it won't be after April 2018, so it was time to bring it up to date, and a [recent security vulnerability](https://nodejs.org/en/blog/vulnerability/july-2017-security-releases/) was the perfect opportunity to upgrade the codebase.

It's when you dig back into older code like that, that you realise how much the style of coding has changed in even just the last 3 or 4 years.

Back then, the default way of working with network calls was `[callbacks](http://callbackhell.com/)`. When your code is nice and simple, callbacks make a lot of sense and they're pretty easy to manage. But imagine working in our world where *everything* is based around network calls to our [API](http://api.ldcvia.com), things quickly become hard to manage.

And this is where `promises` entered. Our internal standard is to use a package called [bluebird](http://bluebirdjs.com/) which is a really pleasant way of working. Increasingly you're able to make use of native promises in node.js as more and more support for [ES6](http://es6-features.org/) is added, but we stick with Bluebird for the moment.

But of course, nothing stays the same. With the advent of node.js 8.x we have support for `[async/await](https://ponyfoo.com/articles/understanding-javascript-async-await)`. As ever, the grass is always greener, but even from a syntax point of view it looks cleaner, and when you're dealing with large code bases, that's an important consideration.

So, for the moment, we're sticking with node.js 6.11.1, but paying close attention to releases as they come from the node.js foundation.