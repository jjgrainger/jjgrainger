---
title: Blogging with Jekyll
date: 2013/02/15
layout: post
---

Majority of websites I have built have all used Wordpress, whether it's a blog, a simple website, portfolio or a large e-commerce, Wordpress was the go to tool to get the job done. For my blog though, Wordpress wasn't ideal.

Wordpress is a great platform for bringing together the variety of people needed to establish a website, web designers, developers, writers, but for someone who can fit into all these roles, Wordpress becomes a bloated system with too many bells and whistles.

I needed something simpler, something that allowed me to blog in a simple way using the tools I was familiar with, and that's where Jekyll comes in.

<pre><code class="prettyprint lang-css">.class {
	margin: 0;
	padding: 0;
	background-color: #fff;
	border: 1px solid #333;
}</code></pre>

<pre><code class="prettyprint lang-css">&lt;ul id="main-menu" class="nav">
	&lt;li>&lt;a href="/blog/" title="Blog">Blog&lt;/a>&lt;/li>
	&lt;li>&lt;a href="/blog/" title="Blog">Blog&lt;/a>&lt;/li>
&lt;/ul></code></pre>


## Introducing Jekyll.

Jekyll is an engine that compiles templates, assets and markdown into a static site formatted into a blog.... [more here]

It comes with some great benefits, one being that it works exceptionally well with git, allowing me to version control both my site and its content. Working well with git consequently means it will work very well with GitHub, more so with GitHub pages.

By creating a repository with username.githib.com and once a Jekyll site is pushed to this repository, GitHub magically compiles the site and serves at http://username.github.com. Best of all this hosting is available for free!

It answers all my needs, providing some lovely perks.

* use git version control site and posts
* write and test locally before publishing
* use git to deploy new posts
* host for free on GitHub
* write posts in markdown
* templates with liquid
* serve static site
* comments handled by disqus

I will cover Jekyll in more detail later down the line including a tutorial showing you how you can set up your own blog with Jekyll too, but for now I just wanted to share the reasons why I made the move.