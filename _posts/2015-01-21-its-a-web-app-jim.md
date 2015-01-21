---
layout: post
category : LDC Via
title: "It's a web app, Jim, but not as we know it"
tags : [angularjs, rest api]
---
{% include JB/setup %}

We’ve talked previously about integrating (LDC Via with XPages)[http://blog.ldcvia.com/2014/12/08/Integrating-LDC-Via-with-XPages/] but the whole point of our (REST API)[https://ldcvia.zendesk.com/hc/en-gb/sections/200324872-API] is that anything that can talk over a network can use our services. So we’ve been busy. 

So far, when you access the LDC Via website, you get some pre-rolled templates that allow you to view your old Domino data in an easier to read way. We provide templates that work with your migrated Mail Files, Discussions, Document Libraries and Teamrooms. But how about creating your own custom applications?

Today we have released our first public template. It’s a standalone implementation of the classic Teamroom that has been created using (AngularJS)[https://angularjs.org].

![LDC Via Teamroom](http://ldcvia.s3.amazonaws.com/ldcvia-teamroom.png)

First things first, you can go and (play with the template here)[http://ldcvia.s3.amazonaws.com/ldcvia-teamroom/app/index.html] the username is demouser@ldcvia.com and the password is Password00.

This is not meant to be a masterpiece of UI design, or even the most full featured Teamroom clone in history. But what it does show is an existing Teamroom database that was migrated to LDC Via using our tools and then allows you to continue using it, adding new documents and responses. All of this is done using static HTML and Javascript pages that talk to the LDC Via REST API using standard AngularJS functionality. Indeed, the app we've linked to is running on a boring old web server with no fancy schmancy authentication engines or server side scripting.

What this means is that you can create and deploy quite complex business applications with nothing more than a simple HTTP server, LDC Via takes care of everything else for you including data storage and authentication.

We’ve made the source code for the template available for use from (Github)[https://github.com/ldcvia/ldcvia-teamroom] under the MIT license, so you will be able to make use of the code to get going with your own custom applications.
