---
layout: page
title: "Java utility: installation &amp; configuration considerations"
category: "Technical"
---
{% include JB/setup %}

If you want to use our Java migration tool, then you will need to install the Java Runtime (JRE) on your local machine. Which version you install will depend on your operating system, and your own preferences when it comes to JRE implementations.

(Note that it is crucial that you install a 32-bit version, due to limitations with Domino’s Java implementation).

Run the install wizard.

LDC Via makes use of cryptography, so you may need to upgrade the policy files as some providers only ship Java with the basic crypto policies. If you see errors like this when running LDC Via, you will definitely need to upgrade the policy:

```
java.security.InvalidKeyException: Illegal key size
at javax.crypto.Cipher.checkCryptoPerm(Cipher.java:1024)
```

To upgrade your policies, download the Cryptography Extension (JCE) files for the relevant version of Java you have installed.

Extract the files and copy the US_Export_Policy.jar and Local_Policy.jar files to `<java-jre-home>/lib/security`, replacing the existing files. It is important to note that this is for the JRE, not and JDK that you may have installed.

Now we need to make sure that the `notes.jar` and `ncso.jar` are on the classpath for Java.

(You may wish to restart your machine so that all these changes are picked up).

It is possible that you will encounter an error `java.lang.UnsatisfiedLinkError: no nlsxbe in java.library.path`. If this happens, add the following switch to your command line when executing the migration: `-Djava.library.path=<EXE PATH>` where `<EXE PATH>` is the path to your Notes installation (e.g. `c:\ibm\notes`).

#### Example Configuration of Environment Variables
When installing Java, you will need to make sure that your environment variables are set up correctly: CLASSPATH, JAVA_HOME and PATH.