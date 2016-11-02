---
title: Automate processes with codification
date: 2016/11/22
layout: post
excerpt: Use codification to automate your processes
---

Processes are boring. When ever I hear that word, a little bit of me dies inside and I think that comes down to what they are.

The best definition I can think of for processes is:

> A process outlines the steps taken to produce repeatable outcomes.

And thats just it, they're rigid. You *must* follow the steps to the letter, otherwise the outcome won't be the same every time. Each step is a mundane task too. Move this from a to b, download x and put it here, make a directory called y. It's boring work.

## Processes aren't bad, its just how we make them

Processes, when done right, can be incredibly useful for many reasons.

- They're a means of sharing knowledge across teams.
- They communicate that knowledge in a way everyone can understand.
- They empower people, allowing them to be autonomous.
- Help to produce the same results, again and again.

So there are a good reasons to have good processes, but where does it go wrong?

When we think of processes we imagine written documents or flow diagrams that describe the steps required in order to produce a desired outcome. When processes are formatted this way, problems can start to occur.

- People misinterpret the information.
- People don't understand the language being used.
- People don't know where that information is.
- People miss steps, or execute them incorrectly.

So what can we do to make them better?

## Codification

[Hashicorp](https://www.hashicorp.com), the people who brought you [Vagrant](https://www.vagrantup.com/), have what they call [The Tao of Hashicorp](https://www.hashicorp.com/tao.html). Inside, they share the guiding principles behind the way they work. There's a lot of great ideas to take away, but the one thing that caught my attention was the ideas around codification.

This short snippet sums up the idea around condification quite nicely.

> "Codification is the belief that all processes should be written as code, stored, and versioned."

The statement itself highlights a lot of benefits that comes from codifying your processes, but there is so much more codification offers.

### Share knowledge through code

Processes need to be communicated amongst teams, in a language that people can understand. Code is a language understood by a team of developers.

Code can be self explanatory, its just a command to the machine telling it what to do.  If needed, comments can provide more information in context of the code.

Code can be stored in a centralized repository. This provides a team with a single place anyone can go to find what they're looking for. Pull requests, change logs, versions and the code itself. Everything you need is in one place.

### Change can happen quickly

Processes change over time. As new tools become available and people discover better ways of doing things, a process will improve. In order to maintain efficiency, we want to implement these changes as soon as possible.

Continuos improvement is nothing new. We want to adapt quickly and improve with small, incremental changes. We can do this by taking advantage of the tools we use already. With git, creating branches, adding in changes and merging them in can be done swiftly.

### Promotes automation

Code is instructions for computers to execute, just like steps in a process, but instead of humans executing them, a machine does. By offloading processes onto machines we can take advantage of them.

Machines are incredibly good at running tasks. If the coded process is written well, we can trust its execution to produce the results we want. And in doing so, remove opportunities for human error.

Furthermore, machines can execute tasks faster than a human. By taking these mundane tasks away from the people, it frees up there time. Time that would be wasted manually doing things a computer could do ten times faster. This time saved is then available to the human, allowing them focus on tasks that machines cannot do.

## Example

Scaffolding is a great example of codification. The process of setting up a project can be handed off to a tool such as [Grunt](#) or [Yeoman](#), where the instructions to creating a projects starting point is written in code.

