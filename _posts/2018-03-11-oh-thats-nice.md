---
layout: post
title: Relaunching Oh That's Nice
date: 2018-03-17
---

I launched [Oh That's Nice](https://ohthatsnice.net) back in June 2016. It was a side project setup to bookmark websites I like and share them with the world.

I'd first built the site with WordPress. I would create screenshots using various browser extensions, upload the posts to WordPress and have a plugin to schedule out tweets. This setup was fine to begin with but soon things started to fall apart.

The whole process of updating the site was taking forever. The screenshots I was creating were inconsistant sizes and the scheduled posts would fail. In the end it was taking up a lot of my time and the whole thing became a chore.

I had given up on the project for several months but eventually came back with the drive to make things easier.

## Oh Thats Nice v2.0

It was around summer 2017 I decided to do something about it. I'd had enough of spending hours updating the site only to run into problems that would take up more of my time.

After a bit of research, and few months of development, I relaunched [Oh Thats Nice](https://ohthatsnice.net) in September 2017.

The main focus of the new site was _to automate as much as possible_. This forced me to refine the process of updating the site and offload as many of the steps to a variety of scripts and tools.

Now, the time it takes to update the site has been drastically reduced. Automating the different steps involved has made things more consistant and easier to maintain.

Here's a brief list of the components involved in running Oh That's Nice.

* Taking screenshots with [webshot.js](https://github.com/jjgrainger/webshot)
* Hosting screenshots to [S3](https://aws.amazon.com/s3/) with [webshots.js](https://github.com/jjgrainger/webshot)
* Static site built with [Jekyll](https://jekyllrb.com/)
* Automated builds and deploys with [Travis CI](https://travis-ci.org/jjgrainger/ohthatsnice)
* Hosting with [Surge](https://surge.sh)
* Further automation with [nicebot](https://github.com/jjgrainger/nicebot)

I'll go into more detail about some of steps taken in future blog posts, but in the mean time, [visit the site](https://ohthatsnice.net), check it out on [Github](https://github.com/jjgrainger/ohthatsnice) and follow the project on [Twitter](https://twitter.com/OhThatsNice_).

