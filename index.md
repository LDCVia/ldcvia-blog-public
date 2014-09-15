---
layout: page
title: 
tagline: 
---
{% include JB/setup %}

{% for post in site.posts %}
<div class="blog margin-bottom-40">
	<h1><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></h1>
    <div class="blog-post-tags">
        <ul class="list-unstyled list-inline blog-info">
            <li><i class="fa fa-calendar"></i> {{ post.date | date_to_string }}</li>
        </ul>                    
    </div>
    <p>{{ post.content }}</p>
    
</div>
{% endfor %}