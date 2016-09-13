---
layout: post
title: "More about KEEP.WORKS"
category: "KEEP.WORKS"
tags: [keep.works, news]
---
{% include JB/setup %}

We’ve been asked numerous times to explain a little more about what [KEEP.WORKS](http://keep.works) is, what it does, what it doesn’t do, how it works, and who it’s for. 

Before tackling those, let’s talk about why we’ve created it. 


## Why KEEP.WORKS?

There are two main reasons. Firstly: Notes - there’s a lot of it about, but it’s also on the endangered species list. By which we mean there are many individuals and teams whose Notes applications - that they rely on to run their job/work - are being removed or threatened by an organisation shutting down their IBM Domino/Notes infrastructure. So [KEEP.WORKS](http://keep.works) is designed to help them have a low-cost migration path. At the very least, it lets them retain their data, safe from the destructive urges of their management and IT people. But more, it lets them continue to work with that data (more on this later). And it’s sufficiently low-cost that it can all pass through on expenses or a company credit card.

The second reason for [KEEP.WORKS](http://keep.works) is that we’ve found that some people have understandably struggled with the migration tooling we provide to move data into LDC Via. That’s been down to a mixture of Domino complexities and LDC Via complexities, but it has been a stumbling block. So [KEEP.WORKS](http://keep.works) is a way of removing that barrier by having us do the heavy lifting. It’s limited to small-ish NSFs - up to 2Gb and 50,000 documents - but that’s plenty for many uses, and sufficient for a serious pilot in the case of larger applications.


## Who is it for?

* Individuals who have useful data locked into NSFs but no longer use Notes and may not even have it installed any more
* Individuals whose Notes applications are under threat from shifting IT strategy
* Departments and teams within an organisation that rely on threatened Notes applications to run their operations
* People or organisations wanting to ‘try’ the LDC Via platform with as little learning curve as possible
* Those looking to bring simple Notes client apps to the web


## What does it do?

As the website says: you upload your NSF, we convert it onto the LDC Via platform automagically, and then you access and work with your data via a browser or mobile device. 

If the NSF you upload is a ‘standard’ Notes/Domino one, we provide your data back to you in a working application. The types of NSF we support here are:

* Personal templates
   * Contacts, also known as “Personal Address Book”
   * Journal
   * Mail (read-only)
* Team templates
   * Discussion
   * TeamRoom
   * Document Library

It can take as little as 10 minutes to move data from Notes/Domino into KEEP.WORKS, and have it operational on the cloud and fully mobile-enabled. Additional users can be created using the [KEEP.WORKS](http://keep.works) application.

If your NSF is not based on one of those templates, then we have a point-and-click interface to allow you to build a “no code” interface onto your data, that will allow you and your users to interact with - search, update, export - the data on desktop and mobile devices.


## Pricing

We wanted to keep the pricing as simple and predictable as possible. Partly because we like it that way, and partly perhaps in reaction to the labyrinthine pricing of certain large software businesses (naming no names). So it’s a flat per-month pricing structure, with no additional per-user costs, and no minimum period. There’s even a 14-day free trial period before any cost in incurred, so you get to really kick the tyres before your credit card gets charged: if you don’t like it, or it’s not what you needed, simply cancel the account before the 14 days are up. 

See [https://keep.works/#pricing](https://keep.works/#pricing) for full pricing details. 


## What doesn’t it do?

We’ve said what it does, who it’s for, and how much it costs. But what about the limitations? Well, first thing first: it’s not a “magic bullet” solution. There have been attempts in the past to automate the process of transforming an application from the Notes/Domino world into a.n.other world. In our view, any such attempt is doomed to failure. Notes/Domino applications are highly complex, and rely on a variety of programming models: @formula, LotusScript, hide-whens, sections, computed subforms, xpages, server-side triggered and scheduled agents, etc. For an older and/or complex application the end result is often a barely-intelligible jumble of code. Any automated conversion is destined to make that less intelligible and less maintainable. 

Our approach, as with [LDC Via](http://ldcvia.com), is to retain the data in as perfect a form as reasonably possible, while removing the reliance on legacy server platforms and obscure and outdated software development tools. We provide a simple point-and-click interface to allow you to define the form layout. Over time we will be providing more options, in response to user feedback, but we wouldn’t want to set up the expectation that you can develop a complex multi-faceted application entirely within [KEEP.WORKS](http://keep.works): that’s not what this product is for.


## How does it work?

[KEEP.WORKS](http://keep.works) is an application built on top of the [LDC Via](http://ldcvia.com) platform. It’s not a core part of [LDC Via](http://ldcvia.com), which is why it has its own name and website, and is hosted separately from [LDC Via](http://ldcvia.com). Everything we’ve done on the [KEEP.WORKS](http://keep.works) site uses the normal published [LDC Via REST-based APIs](http://api.ldcvia.com) to do its work. You could subscribe to [LDC Via](http://ldcvia.com) and go out and build a [KEEP.WORKS](http://keep.works) type tool yourself, if you so chose (with the one minor caveat of the database conversion process that runs behind the scenes - that’s not exposed as API calls).  


## What next?

Well, if you’re one of those who made it onto our beta programme - congratulations, and you will receive an email this week detailing how to create your account. If you’re not … you’ll have to wait until we go fully live in a few weeks time. You can register your interest in [KEEP.WORKS](http://keep.works) at [https://keep.works/#register](https://keep.works/#register). 



