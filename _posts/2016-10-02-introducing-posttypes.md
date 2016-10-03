---
title: Introducing PostTypes
date: 2016/10/02
layout: post
excerpt: A big update to the WordPress custom post type class
---

I released the [WordPress custom post type class](https://github.com/jjgrainger/wp-custom-post-type-class) back in May 2013. Since then it has been received well by the community with over 250 stars on Github and growing. People have made some great contributions, helping to take it further and make it what it is today. It has even been recommended by other open source projects like [Herbert](http://getherbert.com/0.9/custom-post-types).

Over the years I have looked at ways to try and Improve the class. I began to identify things I would have done differently as well as things I wanted to add. It took some time, but I decided to release a completely new version of the project, [PostTypes](https://github.com/jjgrainger/PostTypes).

Here are just a few things that PostTypes does to make it easier to use than its predecessor.

## PSR-4 Autoloading

The custom post type class was set up for [PSR-0](http://www.php-fig.org/psr/psr-0/) autoloading which is now deprecated. You can download the file and add it to your project by hand, but that seems a bit old fashioned.

To take full advantage of [Composer](https://getcomposer.org/), PostTypes uses [PSR-4](http://www.php-fig.org/psr/psr-4/) autoloading. This makes it quick and easy to install, setup and get started.

```php?start_inline=true
// include Composers autoloader
require __DIR__ . '/vendor/autoload.php';

use PostTypes/PostType;

// ready to use class
```

## A Better API

When I created the custom post type class I designed it from the API back. In an empty file, I wrote out how I wanted to use the class and its methods. And from that, I started working on the functionality. I believe this lead to its ease of use, but now parts of it feel.. icky.

I admire [Laravels](https://laravel.com/) API. It's simple, easy to read and feels human and with PostTypes, I wanted to achieve the same thing.

What seemed simple enough ended up becoming quite difficult as you start to pick at minor details. But yet, it’s the small things that can make a huge difference.

```php?start_inline=true
// create a book post type
$books = new PostType('book');

// add a genre taxonomy
$books->taxonomy('genre');

// set the menu icon
$books->icon('dashicons-book-alt');
```

## Better column management

One issue with the original class was there was no efficient way to manage columns. To add one column you would have to define them *all*, which made the process painfully tedious.

Now PostTypes has a column manager that handles this more efficiently. There are a handful of new methods that allow you to add, hide and order columns giving you more flexibility. The original methods to set, populate and define sortable columns, are now part of the column manager.

```php?start_inline=true
// hide multiple columns
$books->columns()->hide(['author', 'date']);

// add custom columns
$books->columns()->add([
    'price' => __('Price'),
    'rating' => __('Rating'),
]);

// set the order for particular columns
$books->columns()->order([
    'rating' => 2,
    'genre' => 4
]);
```

## What's next?

One of the many reasons for creating PostTypes was to help future-proof the project. I believe the changes made will make it easier make changes and improvements in the long run.

So why not give [PostTypes](https://github.com/jjgrainger/PostTypes) a try the next time you need to make a custom post type in WordPress.

The books example used in this post is available in full [here](https://github.com/jjgrainger/PostTypes/blob/master/examples/books.php).
