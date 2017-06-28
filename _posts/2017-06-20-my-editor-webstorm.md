---
layout: post
title: "My editor is WebStorm"
category: LDC Via
tags: [work, WebStorm, ide, programming]
---
{% include JB/setup %}
<div class="blog-header">
  <img src="/assets/img/blog/WebStormLogo.png" alt="Header image: WebStorm, logo" title="Header image: WebStorm Logo" width="122px" height="113px" style="float: right;" />
</div>

_Continuing our series where we talk about our preferred code editor_

A lot has been said, written, and ranted, about programming editors and <abbr title="Integrated Development Environment">IDE</abbr>s over the years. Allow us to add to the noise.

This week Mark has his rant about [WebStorm](https://www.jetbrains.com/webstorm/)&hellip;

----
Traditionally I have used the big clunky IDEs based on Eclipse such as [IBM RAD](http://www-03.ibm.com/software/products/en/application) and [My Eclipse](https://en.wikipedia.org/wiki/MyEclipse) However on a recommendation from [Ben](https://twitter.com/benpoole) I switched to [IntelliJ IDEA](https://www.jetbrains.com/idea/) for my Java and Scala work. After that it was but a short step to IntelliJ’s companion IDE, [WebStorm](https://www.jetbrains.com/webstorm/)

My main criteria in an IDE is not to cost me time or make me scream in anger: WebStorm manages beautifully here. It is light and easy-going, opening and restoring with no fuss, and whilst I’m aware that I don’t use it to its full capacity, a few of the things I love about it are:

  * It does not fight with your source control. Given the long-term nature of a lot of my clients, their source control systems vary hugely over time. In addition, with so many cooks in the mix, you often have to clean up big mistakes — I find a file explorer as the easiest way to do this, so I use [Tortoise svn](https://tortoisesvn.net/) and [Tortoise git](https://tortoisegit.org/) to deal with my source control. Unlike many other IDEs, WebStorm has no issue with this and doesn’t try to take control, it just keeps me informed of the changes without _any_ set-up.
  * Search results update as you change items. This sounds like a simple thing, but when you are searching for an item across multiple files and are changing each one after a brief investigation, having live search results which keep track of those changes is great.
  * “Context joining” is very, very clever: jumping around files following object and function links works very smoothly, particularly for a non-static language like JavaScript. I find that this speeds up my work a great deal, although it makes you a little lazy on your function size as large functions don’t get confusing anything like as quickly.

<img src="/assets/img/blog/webstorm.png" alt="Screenshot: Webstorm" title="Screenshot: Webstorm" height="292" width="450" style="display: block; margin: 1em auto "/>

As my work tends to involve a wide range of issues, not just code, I use a stack of “secondary” programs too:

* [SOAP UI](https://www.soapui.org/) - Still the best program for messing around with XML-based web services.
* [EditPad Pro](https://www.editpadpro.com/) - even with all the new contenders out there, on the Windows platform this is still the best text editor.
* [SQuirreL SQL Client](http://squirrel-sql.sourceforge.net/) - Not the best SQL client _per se_, but far and away the best one for debugging Java data source issues.
* [Keystore Explorer](http://keystore-explorer.org/) - This has saved my sanity more times that I can remember when it comes to dealing with complex SSL key issues.

## Chrome extensions
* [Restlet](www.restlet.com/Client‎) - How anyone does any REST services work without this is beyond me.
* [Salesforce Advanced Code](https://chrome.google.com/webstore/detail/salesforce-advanced-code/lnkgcmpjkkkeffambkllliefdpjdklmi?hl=en) - picking up code from existing organisations is a right pain, this code searcher helps hugely.
* [Grammarly](https://app.grammarly.com/) - Because both my spelling and grammar *suck*. 

So there you have it: more an overview of my entire toolbox than a simple IDE post!

