---
title: A scaffold for creating scaffolds
date: 2017/04/09
layout: post
---

Scaffolding is nothing new, but is still a powerful way to get setup on any type of project. It generates a starting point by creating the basic file and folder structure. All done faster than if you were to start building the project from scratch.

There are plenty of tools out there with [Yeoman](http://yeoman.io/) being the most popular. Yet, my go-to tool for scaffolding is [Grunt](http://gruntjs.com/project-scaffolding). It's simplicity and flexibility is what makes it very easy to set up a scaffold to your liking. 

I've abused this flexibility by creating scaffolds for many types and projects. I have even gone so far to create a [scaffold for scaffolds](https://github.com/jjgrainger/scaffold).

## A scaffold for scaffolds

This quick and dirty scaffold...

* Prompts you for some basic info
* Creates and populates a `README.md` from the prompts provided
* Creates a basic `teamplate.js` to help you get started
* Creates an empty `root` directory for all the files you want to process and copy

It's very basic, but enough to get you creating a scaffold for whatever your needs. I've also included a brief [document](https://github.com/jjgrainger/scaffold/blob/master/Creating-Scaffolds.md) with some useful tips to help get you started.

Happy scaffolding!
