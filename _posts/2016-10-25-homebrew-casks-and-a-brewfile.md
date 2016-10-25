---
title: Homebrew, Casks and a Brewfile
date: 2016/10/25
layout: post
---

My Macbook air keeps crashing and over the 3 years owning it I've had to wipe the hard drive and reinstall everything at least 10 times.

Ignoring the computer issues, I believe there are benefits to starting fresh once in a while. It's as though you clear away the cobwebs, making things run soother. It's as if you've bought a brand new machine.

But, as nice as it can be, it is a pain the ass to go through and install everything you had before. All you're apps, preferences, scripts like node and git, there's a lot to get through. However, there is a eloquent solution available.

## Homebrew

[Homebrew](http://brew.sh/) is the missing package manager for Mac OS and it makes installing things a breeze. Gone are the days of searching, downloading and installing the things you want manually.

Its simple to use and all done via the command line. As an example, to install git, you would run the following in your terminal.

```
$ brew intsall git
```

## Casks

Homebrew doesn't just install developer scripts, it can also install a lot of your favourite apps with the help of [Homebrew Casks](https://caskroom.github.io/). So, to install Spotify you would simply run the following in your terminal.

```
$ brew cask install spotify
```

## Homebrew Bundle

[Homebrew Bundle](https://github.com/Homebrew/homebrew-bundle) is a great way to manage the apps and scripts you want to install. By creating a single `Brewfile`, you can list out everything you want to install, then simply run `$ brew bundle`. Homebrew will work through the dependecies listed and install them if they haven't been already.

Here's an example of what a `Brewfile` might look like.

```
# Configure where our applications go
cask_args appdir: '/Applications'

# install scripts we want
brew 'wget'
brew 'git'
brew 'hub'
brew 'heroku-toolbelt'
brew 'node'

# get brew cask for apps
tap 'caskroom/cask'

# install the apps we want
cask 'sublime-text'
cask 'google-chrome'
cask 'iterm2'
cask 'alfred'
cask 'dropbox'
cask 'spotify'
cask 'flux'
cask 'caffeine'
cask 'slack'
```

## Lets automate it all

Combining all three we can create a small script that will install homebrew and all our apps and dependencies automatically for us.

First, lets create a quick `install.sh` script. This will check to see if homebrew is installed, If it's not we'll install it. Once Homebrew is installed we'll run `$ brew bundle`, installing all the dependencies inside our Brewfile.

```
#!/bin/bash
#
# Install all the things with Homebrew, Casks and a Brewfile
#

# If Homebrew is not installed
if ! which brew > /dev/null; then
     # Install Homebrew 
     /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
fi;

# Update brew
brew update

# Install everything in Brewfile
brew bundle
```

With everything done, when we come to setup a new machine all we have to do is download the `install.sh` and `Brewfile`, and run the following.

```
$ ./install.sh
```

Then go make yourself a brew and enjoy, leaving homebrew to handle the rest. All the code used here can be found on [Github](https://github.com/jjgrainger/Brew). Fork it, make it your own and enjoy Homebrew handling your Mac setup for you.
