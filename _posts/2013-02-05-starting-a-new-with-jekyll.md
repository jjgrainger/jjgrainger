---
title: Starting a new with Jekyll
date: 2013/03/11
layout: post
---


I've been trying to blog since I started getting serious about writing code. Majority of websites I build today use Wordpress as a <abbr title="Content Management System">CMS</abbr> and at first it was my choice for a blogging platform. Its a great platform for bringing together the variety of people needed to establish a website from designers, developers, writers and more but for a developer looking to run a personal blog Wordpress becomes a bloated system with too many bells and whistles.

I needed something simpler, something that allowed me to blog in a simple way using the tools I was familiar with, and that's where Jekyll comes in.


## Introducing Jekyll

[Jekyll](https://github.com/mojombo/jekyll) is <q>a simple, blog aware, static site generator</q> built with Ruby. It takes a directory filled with template parts, posts and assets, runs them through the engine returning a static website.

It uses [Liquid](http://liquidmarkup.org/) templating language, an extraction of the e-commerce system [Shopify](http://shopify.com), allowing you to build simple templates used across the entire site. The language itself is minimal, easy to understand and doesn't take over your markup.

Jekyll also makes use of [YAML](https://github.com/mojombo/jekyll/wiki/YAML-Front-Matter) front matter for meta information. Here you can define or overide the default post title, date, permalink and other meta data. Alongside categories and tags, you can also create your own meta data with YAML and define the templates you would like the page or post to use allowing you to fully customize your site within each individual post or page.

Jekyll can compile [Markdown](http://daringfireball.net/projects/markdown/), a popular text-to-HTML tool amongst developers who blog. Using Markdown you can write plain text posts, without the clutter of HTML, and have them converted to valid HTML pages when your site is compiled. If needs be you can included vanilla HTML as well as Markdown in your posts.

Jekyll is also the engine behind [Github Pages](http://pages.github.com/), used to create pages for your github projects. This allows you to use Github Pages to host your Jekyll blog for free and manage your post and site with [git](http://www.git-scm.com).

One feature Jekyll does lack however is comments but this is easily solved with [Disqus](http://www.disqus.com) a commenting service that works well on any site including Jekyll sites. Simply copy and paste the script into your template files and its ready to go.

A glimpse into Jekyll and you can already start to see the the many benifits of running your blog with Jekyll and Github pages.

* Free hosting with Github Pages
* Manage site and posts with git
* Write posts and test site locally
* Write posts in Markdown
* Use git to deploy site and new posts
* Simple templating with Liquid
* Serve up a Static Site, Faster and no more Database Queries
* Comments handled with Disqus

My reasons for using Jekyll is mostly for its simplicity. It allows me to run my blog using the tools I'm most familiar with as well as provide a simple set up that lets me focus on my writing.

This post is an introduction to Jekyll highlighting the reasons why its now become my blogging platform of choice. In the future I will be writing a tutorial looking into Jekyll in more detail and how you can set up your own blog with Jekyll and Github Pages.