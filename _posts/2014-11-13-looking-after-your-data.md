---
layout: post
category : LDC Via
title: "Looking after your data"
tags : [how, security, data]
---
{% include JB/setup %}

There is a phrase regarding security on websites that terrifies developers: “It’s not a question of whether you get hacked, but *when*.” It’s popular with the media of course―doom-laden articles will always sell, and strictly speaking this terrifying sentence is correct―*but only for a given value of ‘correct’*.

For example, I don’t think anyone could stop the NSA getting access to private data if the NSA had a thousand years and warehouses of dedicated brute-force script kiddies at their disposal (no doubt backed by law). What we can do however, is make cracking data so bloody hard that the whole process becomes untenable. For LDC Via, we consider the “base data type” for all migrations to be financial transactions from large corporates―in other words, we do not play fast and loose with this stuff.

As we built LDC Via we had to consider the usual suspects in terms of attack vectors, and the defensive layers we need to provide. This is compounded by the fact that IBM Domino has always provided such good, simple security. We provide various options when using LDC Via, from simple data conversion to fully-converted applications with reasonably complex security requirements―and so there are appropriate decisions to be made.

Thankfully, different members of LDC take care of different areas of the application, and this enables us to impose a global security policy with each member taking care of a number of the constituent layers.

We break down the defensive layers into two categories:

1. “The usual suspects”
2. “Just For Us”

###“The Usual Suspects”###
These are the layers that all web apps have to deal with. Quite a lot of them are irrelevant for on-premises solutions, but take on huge importance in our cloud offering.

**Ports and firewalls.** An easy one―only those ports absolutely necessary are opened. By default this means SSL (port 443), with the option of port 80 if non-secure transactions are required. *That is it*: no database ports, no remote access ports etc. We separate dedicated client servers from each other with firewalls as well, so there is no inter-communication between your dedicated boxes and those used by our other clients.

**Operating system.** We use a hardened Linux build for our production servers, with proper patching and all the things that keep administrators happy.

**Hardware.** Where provided by our hosting providers we offer hardware encryption. Now that most decent physical storage is based on solid-state technology, we have found that hardware encryption is not the performance horror it once was. If this is a requirement for your implementation, please tell us.

**NSA.** A new player in the security arena is the National Security Agency in the US. Their curious assertion that they have the right to take any data they deem fit for their purposes from anywhere on the planet means that even if your data is not stored in the continental USA, if the hosting provider has an office registered there then the NSA can pressure that organisation to provide access to your data (with the hosting provider and LDC Via legally obliged not not to tell you about it).

Well, we are registered in the UK, and we have access to multiple hosting providers, both local and international, to meet the different data security needs of clients.

**Databases.** All databases offer a variety of security options, and the methods we implement will vary according to the back-end server involved. In our current offering (based on MongoDb) we use both standard MongoDb users and roles for security (rather than those wide-open “service accounts” that so often lead to wholesale database leaks in the case of a security breach).

However, that’s not enough: MongoDb only really offers granular security down to a “collection” level, so that leads us on to the the next level of security…

###“Just for us”
**Readers and authors.** One of the core tenets of IBM Domino security, and something that is a devil to reproduce in other systems. Readers and authors fields, controlling document- and field-level access to data. Very few systems and databases provide document-level security, so to effect this level of security, we have a “data wrapper”: we have constructed a wrapper that goes round any attempt to access the database from the application (a Java driver wrapper is also provided). The meta-data stored in the database is checked against the requesting user and the various levels of access are granted on that basis. This includes group access as well as individual rights.

**Configurable security.** At any time, administrators can modify which fields in a collection are used to define security, and of course, will always be able to see all documents (you won’t lose anything!)

So there you go, some of the background to security in LDC Via. As Mark says, it’s like arguing about politics: never-ending, often quite heated, but one day we will build a better world (if the rest of the buggers stop talking rubbish).
