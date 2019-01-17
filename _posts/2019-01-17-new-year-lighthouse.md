---
layout: post
title: 'New year lighthouse!'
category: 'LDC Via'
tags: [code, tips, browsers, chrome]
---

{% include JB/setup %}

<div class="blog-header">
  <img src="/assets/img/blog/lighthouse-logo.png" style="height: '228px'; width: '381px';" alt="Google Chrome / Lighthouse graphic" />
</div>

Happy new year (albeit a somewhat belated greeting on our part). Let’s hope 2019 brings us all some reprieve from the unrelenting bad news out there! They say that the key to happiness is dealing with what you _can_ control, and so to that end we’re going to spend this blog post re-visiting an old tool that you may have ignored for a wee while – I know I have, given that my day-to-day work rarely includes front-end web development.

So: [Lighthouse](https://developers.google.com/web/tools/lighthouse/), a collection of open-source tools aimed at checking web pages for things like performance, accessibility, search engine optimisation (urgh) and general best-practice-type-stuff. The Lighthouse tooling was added to Google Chrome some time back; certainly [version 3 has been there since Chrome v69](https://developers.google.com/web/updates/2018/05/lighthouse3).

Lighthouse is triggered by simply opening [DevTools](https://developers.google.com/web/tools/chrome-devtools/) in Chrome, and selecting to run an audit on a given website. After it has done its thing, you are presented with something like this:

<p><img src="/assets/img/blog/lighthouse-screen.png" style="height: '325px'; width: '539px';" alt="Screenshot of Lighthouse tools report" /></p>

Once the tool has finished doing its thing, and the report screen is rendered, you can dive into all of the stats to your heart’s content. Clicking on each top-level circle provides a list of passes and fails, with onward links to aid remediation. Even in 2019, many web sites fall down on their accessibility scores. Running Lighthouse on your site is a sobering experience. We’ve got lots to do now! However, what a nifty tool!
