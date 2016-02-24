---
layout: post
title: "Who exactly are you?"
category: "Security"
tags: [ldcvia, security, api]
---
{% include JB/setup %}

We’ve always been keen to make it as easy as possible for you, as a developer, to get authenticated against our API. This is why we used a simple API Key model. We had feedback from some developers that they would prefer us to allow a more traditional session cookie approach to authentication. 

In our most recent version of LDC Via, we’ve enabled just that. There are now two different ways that you can authenticate your users against our services. You can continue to use the API Key if that suits your need. But you can also now use a session cookie.

You get allocated the cookie quite simply. You just post the username and password of the user to our service and we return a session cookie if it is valid. Then, whenever you make another request against our services you have to pass the session cookie back to our servers. If the cookie is still valid then we will perform the operation. It’s all documented in our [API page](http://api.ldcvia.com/#login-(for-session-cookie)).

The use-case for this is most likely to be client-side JavaScript applications using, for example, jQuery or AngularJS. You may be aware that Ajax is not designed to pass cookies to remote servers. So we had to make some changes to our servers (that’s all done, don’t worry), but you’ll also need to make some changes in your code. In jQuery you’ll want to use the [“xhrFields -> withCredentials” setting](http://api.jquery.com/jquery.ajax/). And in AngularJS you would, similarly, set the withCredentials property to true on your $.ajax requests.

This is just one example of adding features to LDC Via because you, our users, want them. If you have ideas for improving LDC Via, please do [contact us](https://ldcvia.zendesk.com/hc/en-gb/requests/new).
