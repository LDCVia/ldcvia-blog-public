---
layout: page
title: "Java utility: getting started"
category: "Technical"
---
{% include JB/setup %}

We provide a Java desktop utility that will migrate your Domino data to MongoDB. MongoDB is a massively scalable document database, analogous to the NSF file format.

If you want to simply migrate your existing Domino data to MongoDB without any of the application layer that LDC Via can offer such as document level security and our REST API, then you will need to follow these steps, assuming you have a support agreement with us:

1. Configure your MongoDB environment. This is a free download from the MongoDB website, the installation guides can be found [on the MongoDB site](https://www.mongodb.com/docs/manual/installation/).
2. [Install Java on your local machine](/docs/java-util-starting), including crypto changes.
3. Contact us for the LDC Via JAR file.
4. Gather together the required configuration data for the migration:
  * Your email address
  * Your LDC Via API Key (provided to you by LDC Via)
  * Your LDC Via Licence Key (provided to you by LDC Via)
  * The MongoDB username and password
  * The address (host name or IP address) of the MongoDB server

To access your API Key and Licence Key, log into the LDC Via website and follow the steps shown below:

<iframe src="//player.vimeo.com/video/114867512" width="500" height="281" frameborder="0" allowfullscreen=""></iframe>

An example configuration file is shown below:

<script src="https://gist.github.com/whitemx/d3eac3567a293a925ab6.js"></script>

It is easiest if the JAR file provided to you by LDC Via and the config file you created are in the same directory. Open a command prompt to this directory and enter the following command:

```
java -jar ldcvia.jar config-local.txt
```

(Note that this should be run from a machine that has the Notes client installed and configured on it).

The migration will run when you hit return, progress will be logged in the command window and will also be written to the “runlog” referenced in the config file.

To examine the migrated data, we would recommend using [MongoDB Compass](https://www.mongodb.com/products/tools/compass).