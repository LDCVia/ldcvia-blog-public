---
layout: post
title: "LDC Via Lens"
description: ""
category: "LDC Via"
tags: [ldcvia]
---
{% include JB/setup %}
As you may know, we already offer free application templates for Discussions, Document Libraries, Teamrooms and mail files. But what do you do when you’ve migrated a custom database to LDC Via and you want to provide your users with a simple view of the data, no bells or whistles?

Enter LDC Via Lens.

Lens is an application template that is driven by configuration, meaning that you can define how a screen of data is laid-out and presented. Using Lens, you can quickly create an interface onto your data that will make sense to your users and allow them to interrogate and explore the data effectively and easily.

## LDC Via Lens: key fields
In the Database Viewer admin page, you can elect to “Modify Collection Schema” which shows all of the settings for a collection in your database. What this means is that you can see all of the fields for documents stored in the collection, change their data type, their position on-screen, and whether a particular field is an “LDC Via Lens” field (i.e. available to end users), with an associated field label.
(We’ve added this distinction between “key” and “non-key” fields: all fields are important, but some are not ones that you need or want to expose to end users. By flagging a field as “key”, this means that when you use our [Export to PDF](http://api.ldcvia.com/#export-to-pdf) API, or Lens, we will just show the key fields.)
In the screenshot shown below, we have defined four key fields. Subject is positioned first, then Categories, From and Body. “From” we want to display with a label of “Created By” and the Body field is rich text, so we’ll just take the automatically parsed HTML version of that field.

![Sample Meta Data](http://ldcvia.s3.amazonaws.com/SampleMetaData.png)

Once these settings are saved, select the “Open as Application” link on the Database Viewer page and your work is done:

![Demo App](http://ldcvia.s3.amazonaws.com/DemoApp.png)

## LDC Via Lens: views
We don’t stop there! If the key field functionality is a nod to half of the old way of doing things in IBM (Lotus) Notes—i.e. forms—then what about the other half, views?
Well, in the Database Settings screen, you can also create view filters. This means that any time a user accesses the database with Lens they can use the “views” that you’ve created to find useful data more easily.
Naturally you can manage your views with our API, so if you’re building your own application, any views you create are still available.

## Security
Of course, all of this honours our document-level security model. You are free to distribute application URLs with LDC Via Lens functionality to all your users without any concerns about them seeing data they shouldn’t.

## Conclusion
LDC Via Lens allows you to create a read-only user experience for your migrated Notes / Domino data in next to no time, and provides your people with  an experience they can easily understand and work with. Let’s go through all this in a video, and you can see exactly how polished an interface LDC Via Lens can give you!:

<iframe src="https://player.vimeo.com/video/129667073" class="video560" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

If you want to go further (i.e. editing content as well as just reading it), we provide a beautifully-crafted set of REST APIs, as well as plenty of code samples to get you started. You can create applications against your precious data (or—of course—brand new applications) rapidly.
