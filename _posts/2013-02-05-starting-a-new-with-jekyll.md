---
title: Starting a new with Jekyll
date: 2013/02/15
layout: post
published: false
---

Majority of websites I build today use Wordpress as a <abbr title="Content Management System">CMS</abbr>, whether a blog, simple website, portfolio or large e-commerce site, Wordpress was the go to tool to get the job done. So being a Wordpress developer you would naturally assume it would be my blogging tool?

Wordpress is a great platform for bringing together the variety of people needed to establish a website,
web designers, developers, writers, but for someone who can fit into all these roles, Wordpress becomes a bloated system with too many bells and whistles.

I needed something simpler, something that allowed me to blog in a simple way using the tools I was familiar with, and that's where Jekyll comes in.


## Introducing Jekyll

[Jekyll](https://github.com/mojombo/jekyll) is <q>a simple, blog aware, static site generator</q> built with Ruby. It takes a template directory filled with template parts, posts and assets, runs them through the engine returning a static website.

It uses Liquid templating language, an extraction of the e-commerce system [Shopify](http://shopify.com), allowing you to build simple templates used across the entire site.

Jekyll makes use of [YAML](https://github.com/mojombo/jekyll/wiki/YAML-Front-Matter) front matter where you can define the post title, date, permalink and other meta data like categories. You can also create your own meta data with YAML and define the templates you would like the page or post to use.

Jekyll also compiles [Markdown](http://daringfireball.net/projects/markdown/), a popular test-to-HTML tool amongst developers who blog. The advantage of Markdown is you can write plain text posts then have them converted to valid HTML pages when your site is compiled.

Jekyll is also the engine behind [Github Pages](http://pages.github.com/), used to create pages for your github project and, because Jekyll is <q>blog aware</q> your blog. 

One feature Jekyll does lack however is comments but with [Disqus](http://www.disqus.com) to the rescue

A glimpse into Jekyll and you can already start to see the the many benifits of running your blog with Jekyll and Github pages.

* Free hosting with Github Pages
* Manage site and posts with git
* Write posts and test site locally
* Write posts in Markdown
* Use git to deploy site and new posts
* Simple templating with Liquid
* Serve up a Static Site, Faster and no more Database Queries
* Comments handled with [Disqus](http://www.disqus.com)

My reasons for using Jekyll is mostly for its simplicity. By allowing me to run my blog using the tools I'm most familiar with as well as provide a simple set up

This post is merely an introduction to Jekyll highlighting the reasons why its now become my blogging platform of choice. In the future I will be writing a tutorial looking into Jekyll in more detail and how you can set up your own blog with Jekyll and Github Pages.