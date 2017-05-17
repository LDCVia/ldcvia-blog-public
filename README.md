## Writing
Draft your posts in Markdown (e.g. in a Google doc), complete with [front matter](http://jekyllrb.com/docs/frontmatter/).

Note that blog post files should be named thus:

`yyyy-mm-dd-blog-title-text.md`

… and that front matter should look like this:

```
---
layout: post
title: "Blog post title"
category: "LDC Via"
tags: [ldcvia, some_tag, conferences]
---
{% include JB/setup %}
```
(there’s a template gdoc provided in the draft blog posts folder on Google Drive - copy that as a starting point if you like).

## Publishing
When publishing to Github pages (in the “_posts” folder), copy the content of the relevant Google doc into a new plain text file. Name it as above, but with the file suffix “.md”

Note that the project you publish to is ldcvia.github.io, and that all commits should go to the *gh-pages* branch.
