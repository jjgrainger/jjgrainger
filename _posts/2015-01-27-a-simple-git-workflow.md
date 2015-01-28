---
title: A simple git workflow
date: 2015/01/28
layout: post
---

When looking into git workflows you will come across plenty of different branching models all with there own way of doing things. For anyone starting out with git these workflows can look a little intimidating with lots of branches and rules on what has to be done and when.

When we brought git into our process we needed something simple. A workflow that anyone, regardless of how well they know git or how frequently they use it, can get to grips with it quickly. We wanted something flexible that we could adjust to fit a projects needs without having to overhaul the workflow that is in place.

We've tried [gitflow](http://nvie.com/posts/a-successful-git-branching-model/) and it was overcomplicated for what we needed. We've also tried [githubflow](http://scottchacon.com/2011/08/31/github-flow.html) but we felt pull requests weren't something we wanted to use. Now after some trial and error we've finally settled on something that works for us.

So here's how we do it.

1. Create a descriptive named branch from master
2. Carry out work in that branch, committing little and often
3. Once work is finished, merge into master and push

Simple! Now lets look at it in more detail.

### Notes on the master branch

Before diving in lets look at the master branch.

The master branch is the only branch that has any strict rules to it. One is that no commits should be made to the master branch directly, all work should take place and be committed in your working branches.

During development the master branch should represent the most up-to-date, stable version of the project, it may be incomplete but what is there should be working with no major bugs or nasty errors.

When the project is live the master branch should mirror the current production state. Therefore anything in master has either been deployed or will be very soon.

With this in mind we know that the master branch is a safe place to branch off and start working from.

### 1. Create a descriptive named branch from master

When creating a branch you need to give it an appropriate name, ideally one that is short and describes the work that is going to be carried out.

This should keep you focused on the work that you intend to do, helping you make relevant and logical commits.

### 2. Carry out work in that branch, committing little and often

While working in your branch you should be committing little and often, thereby creating a clean and readable commit log making it easier to understand the progression of a project.

These working branches can also be pushed to the same name branch at origin acting as a backup but also allows you to continue your work from another machine or allow another developer to pick it up from where you left off.

Unlike the master branch working branches have no strict rules and should be considered 'cheap'. You can create, push, pull, merge and delete these branches freely.

### 3. Once work is finished, merge into master and push

When you've finished, and everything has been tested, you can now merge your work into the master branch and push to origin. Now thats done, its simply a matter of repeating these steps, or maybe take a tea break... or a celebrate with a beer!


### It's simple

I believe this git workflow is easy to grasp and useful to anyone whether you're small team or solo developer.

It provides a basic foundation which you can expand upon when needed. If you need another integration branch other than master, its just a matter of creating another branch and using that. Want to use pull requests, you can.

In the end its simple and it gets the job done.
