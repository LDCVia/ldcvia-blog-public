---
layout: post
title: 'Migrating IBM Quickr'
category: 'LDC Via'
tags: [code, migration, LDC Via, IBM Quickr, Domino.doc]
---

{% include JB/setup %}

<div class="blog-header">
  <img src="/assets/img/blog/icon-quickr.jpg" style="height: '175px'; width: '175px';" alt="IBM Lotus Quickr icon" />
</div>

For the last eighteen months or so we’ve been engaged in a project to provide two things for a client:

1. Migrate multiple IBM Quickr places to our platform, and;
2. Develop a new web application to replace IBM Quickr, both for the migrated content, and for new places as required.

This is not an insignificant piece of work: Quickr was a content management platform that had a lot of investment from Lotus and IBM at various points, and it was around for a long time. Furthermore, once we had won the work and we were in the throes of advanced planning, we were also looking to undertake a massive re-write of the entire Via migration utility.

## A re-write? Really??

Those who have been with us for a while will recall the web-based migration tool – still available on our site – which provides an excellent demonstration for part of what our platform does. However, if you are serious about bulk-migrating data: multi-NSF applications, mapping security fields, custom content, driving through schema changes and the like, then it’s our Java-based migration utility you need.

When we started to build Via over five years ago, we embarked upon an ambitious development programme: not only would we code the <abbr title="Application Programming Interface">API</abbr> layer, we would also build migration tooling ready for day one. This was admirable but misguided, because the upshot was that we were building direct-to-MongoDB migration code alongside the abstraction layer of our API. <span class="highlight">In short, the migration utility did not use our own API</span>, which was clearly undesirable for all manner of reasons.

Opting to re-work the migration utility was therefore The Right Thing To Do. We simply had to mitigate that technical debt, take a deep (collective) breath and crack on. The Quickr migration project clearly underlined the need for a flexible, speedy migration path.

Almost every piece of code in the migration utility has been re-designed and re-written. We have multiple “importer” classes which can handle selection criteria at the form, document, view, database, directory and, of course, Quickr level. A “bootstrap” class orchestrates the import process, and handles everything from dynamic configuration loading to dealing with different types of directories for migrating user profiles too. <span class="highlight">We can even merge multiple Quickr places into one.</span>

Want to know more? Fancy migrating from Quickr, or even Domino.Doc? (Yes, that too!) <a href="mailto:info@ldcvia.com?subject=Website%20query%20re%20Quickr">Drop us a line</a>.
