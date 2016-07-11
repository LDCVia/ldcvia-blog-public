---
layout: post
title: "LDC Via and SAML"
category: "Releases"
tags: [saml, authentication, ldcvia, features, idp, sp]
---
{% include JB/setup %}

Last month we announced the release of “Eton Mess” which includes a number of nifty features and general improvements for the platform. One of the features which Eton Mess brings to the table actually dates back to one of our “Forced Rhubarb” point releases, and the eagle-eyed amongst you may have noticed it in the [associated release notes](https://ldcvia.zendesk.com/hc/en-gb/articles/207579359-New-Release-1-0-20160420-minor-point-for-Forced-Rhubarb-):

<blockquote>Feature: SAML is now an option for organisations wanting to use it. Whoop!</blockquote>

Huge fanfare eh? :-) SAML stands for “Security Assertion Markup Language”, and we use it to provide Single Sign-On (SSO) functionality between an authentication service of your choice, and LDC Via.

Authentication services are known as “Identity Providers” (IdP) in the SAML world. The applications and platforms like LDC Via which take this authentication information and make use of it are known as “Service Providers” (SP).

In practical terms, this means that once the appropriate configuration has happened, an organisation can have its authenticated users proceed directly to LDC Via from their intranet or other corporate systems without a pesky log-in screen getting in the way.

SAML doesn’t mandate the method of authentication used, so Identity Providers just need to support the protocol (as do downstream Service Providers of course). This means that all manner of centralised identity stores can be used as IdPs; for example, Microsoft Active Directory and Google can both act as IdPs.

The good news is that with “Eton Mess”, if you have a SAML environment in mind for integration with LDC Via, we can work with you to make that a reality.

_Eton Mess was released on June 8th. A full list of all the lovely functionality in this version can be found in  [our release notes](https://ldcvia.zendesk.com/hc/en-gb/articles/208944465-New-release-Eton-Mess-1-0-20160607-)._
