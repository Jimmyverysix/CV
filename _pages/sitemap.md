---
layout: archive
title: "Sitemap"
permalink: /sitemap/
author_profile: true
---

{% include base_path %}

<div class="sitemap-container">
  <h2>Pages</h2>
  <ul class="sitemap-list">
    {% for post in site.pages %}
      <li class="sitemap-item">
        <a href="{{ post.url | absolute_url }}">{{ post.title }}</a>
      </li>
    {% endfor %}
  </ul>

  <h2>Posts</h2>
  <ul class="sitemap-list">
    {% for post in site.posts %}
      <li class="sitemap-item">
        <a href="{{ post.url | absolute_url }}">{{ post.title }}</a>
      </li>
    {% endfor %}
  </ul>

  {% capture written_label %}'None'{% endcapture %}

  {% for collection in site.collections %}
    {% unless collection.output == false or collection.label == "posts" %}
      {% capture label %}{{ collection.label }}{% endcapture %}
      {% if label != written_label %}
        <h2>{{ label }}</h2>
        {% capture written_label %}{{ label }}{% endcapture %}
      {% endif %}
      <ul class="sitemap-list">
        {% for post in collection.docs %}
          <li class="sitemap-item">
            <a href="{{ post.url | absolute_url }}">{{ post.title }}</a>
          </li>
        {% endfor %}
      </ul>
    {% endunless %}
  {% endfor %}
</div>

<style>
.sitemap-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.sitemap-list {
  list-style-type: none;
  padding: 0;
}

.sitemap-item {
  margin-bottom: 10px;
}

.sitemap-item a {
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.sitemap-item a:hover {
  color: #0056b3;
}
</style>