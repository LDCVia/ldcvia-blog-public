---
layout: post
title: "Using Textract with node.js on Heroku"
category: LDC Via
tags: [work, heroku, textract]
---
{% include JB/setup %}

One of the projects we're working on at the moment relies heavily on the use of file attachments. Not a problem, LDC Via does that! But we also needed to be able to render some preview text from the contents of the files, so if a PDF, Word document, Excel sheet, or even an image has some text on it, we wanted to be able to show a brief summary of the contents to the user.

Enter the [Textract plugin](https://textract.readthedocs.io/en/stable/#). This is a Python utility which can dig into the contents of files and extract it. It's also really simple to install locally, you just need to make sure Python's installed and `npm install` does the rest for you.

But then we get to the real world. A dev machine is one thing, but when your app needs to be deployed to [Heroku](https://heroku.com) things get a little more complex. Typically, your app will be of one type: node.js, python, ruby or whatever. But we now needed to have an app that contained two different codebases. Luckily it's a relatively simple procedure to set it up.

First, you'll want to configure your project. In our case, we're primarily a node.js app, so we already have our `package.json` file which defines all out dependencies. But because we also want to add some python dependencies, we need to add a new file: `requirements.txt`:

```
# This file contains all python dependencies that are required by the textract
# package in order for it to properly work.

argcomplete==1.8.2
chardet==2.3.0
python-pptx==0.6.5
#pdfminer.six <-- go back to this after the shebang fix is released (see https://github.com/goulu/pdfminer/issues/27)
https://github.com/goulu/pdfminer/zipball/e6ad15af79a26c31f4e384d8427b375c93b03533#egg=pdfminer.six
docx2txt==0.6
beautifulsoup4==4.5.3
xlrd==1.0.0
EbookLib==0.15
SpeechRecognition==3.6.3
https://github.com/mattgwwalker/msg-extractor/zipball/master
six==1.10.0
```

Next, we need to add another file called `Procfile`. This is basically an instruction file for Heroku that tells it what to do when it's starting your application. Normally, when you only have a single codebase you don't need the file as Heroku can make some assumptions, but with two different codebases we need to give some guidance. So, in our case the file will simple look like this:

```
web: npm start
```

Once you've committed these files to your code repository... nothing will happen. We've made all the code changes we need to, but now we need to go to Heroku. You can obviously do all this with the CLI, but for pretty picture's sake, you'll want to go to your application settings page and scroll down to the `Buildpacks` section.

![Buildpacks](https://ldcvia.s3.amazonaws.com/heroku-buildpacks.png)

Click the `Add Buildpack` button and, in our case we choose Python from the list of options.

Once that's added, we can simply re-deploy the application in the normal way and Textract will magically work!