---
layout: post
title: "Oh a-linting I will go"
category: LDC Via
tags: [work, ide, programming]
---
{% include JB/setup %}
<div class="blog-header">
  <img src="/assets/img/blog/eslint.png" alt="Header image: ESLint" title="Header image: ESLint" width="256px" height="256px" style="float: right;" />
</div>

Often when I talk with developers who are firmly in the C# or Java camp their main objection to JavaScript is that it’s not strongly typed. And indeed, if you're new to the world of JavaScript, this is a big thing to get over.

But there are strategies, best practices if you will, which can make the transition easier. One I thought worth mentioning is [ESLint](https://eslint.org/). This is a process whereby you statically validate your code to make sure it adheres to a set of rules you define. These rules can be as lax or strict as you like, but, applied properly they make your code more supportable, more readable and less error-prone.

So, how to get started I hear you ask? A lot depends on your working environment. If you use a modern editor like [VS Code, Atom or Sublime Text](http://blog.ldcvia.com/2017/08/23/my-editor-sublime-text) then there will be a plugin you can install to help you along. In your project, you add a `.eslintrc` file which defines the rules you want to apply and then you look, with horror, at the hundreds of errors that have suddenly appeared in your code.

But fear not, things aren’t as bad as they appear. Your ESLint plugin will probably have a command to automatically fix “easily fixable issues” such as using single quotes rather than double quotes for strings, or indentation of your code. Once these are all addressed you can  fix the rest of the issues manually, and relatively quickly.

I’ve recently completed this exercise with a large code base primarily because we want to put some focus on performance: if I have code that is predictably organised, then this makes the process a lot easier.

A great side effect is that the rest of the developers on the team can pick up the code I’ve been butchering and immediately have some familiarity with the style.

The most popular eslint configuration is published by [AirBnB as an open source project](https://github.com/airbnb/javascript). It’s a great starting point, but the beauty of these configurations is that if you don’t like a rule then you can simply turn it off. Or, on a case by case basis you can also turn off the rule in your code. As an example, [here is the LDC Via `.eslintrc` file](/assets/files/eslintrc-demo.txt).

Linting your code is not, in itself going to make it great code, but it will be a big help to you and, at the end of the day you can go home with a slightly smug feeling that you’ve gone that extra step to be a good programmer. And who doesn’t like to feel a bit smug sometimes?
