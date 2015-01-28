---
title: Easy Wordpress custom post types
date: 2013/07/15
layout: post
excerpt: I've created a PHP Class for creating Wordpress Custom Post Types quickly and easily.
---

I've used, and continue to use, Wordpress to develop practically every website I build for clients. It's a sturdy platform, easy to customize with the basic content management tools needed to get a site going.

A lot of the customisation we do to Wordpress is creating custom post types. This is invaluable for keeping site content organised and easily done using a couple of wordpress functions.

However, registering a post type only goes so far. The native admin edit screen offers taxonomy dropdown filters and useful admin columns that, where possible, are sortable, helping you filter through and find the posts you want to edit. You can customize your post type to support these features too, but soon enough what was a few lines of code is now a few hundred.

Then trying to carry the same code accross for other websites, editing function names, variables and labels to match the new project becomes a tedious task. If only there was something to make this all easier...

## Enter the Custom Post Type Class

I [created a PHP class](http://github.com/jjgrainger/wp-custom-post-type-class) designed for developers to create custom post types quickly while providing simple methods to enhance the admin edit screen. With just a few methods you can create a post type, add a number of taxonomies, create filters and add admin columns with just a few lines of code. Here's how:


First [download](http://github.com/jjgrainger/wp-custom-post-type-class) and include the class file into your themes functions.php like so:

{% highlight php startinline %}
include_once('CPT.php');
{% endhighlight %}

And we're ready to rock and roll. We're going to use a 'books' example to demonstrate how it works.

### Create a Post Type

To create a post type you simple create a new object from the class passing the post type name.

{% highlight php startinline %}
$books = new CPT('book');
{% endhighlight %}

The post type name is required as the class will automatically generate the labels from this name (by capitalizing and adding an 's' at the end). If you post type name cannot be pluralized this way e.g Person -> People, you can provide an array of the names you want:

{% highlight php startinline %}
$people = new CPT(array(
    'post_type_name' => 'person',
    'singular' => 'Person',
    'plural' => 'People',
    'slug' => 'people'
));
{% endhighlight %}

The post type name is the only arguement required, all others are optional.

The optional second parameter is the arguments for the post type used by the `register_post_type` function.

The class uses the Wordpress defaults where possible. To override the default options simply pass an array of options as the second parameter. Not all options have to be passed just the ones you want to add/override like so:

{% highlight php startinline %}
$books = new CPT('book', array(
    'supports' => array('title', 'editor', 'thumbnail', 'comments')
));
{% endhighlight %}

For all available options see the [Wordpress Codex](http://codex.wordpress.org/Function_Reference/register_post_type#Parameters).

And thats you've created your post type. Whats next?

### Adding Taxonomies

You can add taxonomies easily using the `register_taxonomy` method like so:

{% highlight php startinline %}
$books->register_taxonomy('genres');
{% endhighlight %}

this method accepts two arguments, names and options. The taxonomy name is required and can be string (the taxonomy name), or an array of names following same format as above when registering a post type. see the [Wordpress codex](http://codex.wordpress.org/Function_Reference/register_taxonomy#Parameters) for all possible options.


### Filters

When you register a taxonomy through the class, the taxonomy is *automagically* added to the admin edit screen as a filter and a column.

You can define what filters you want to appear by using the `filters()` method:

{% highlight php startinline %}
$books->filters(array('genre'));
{% endhighlight %}

By passing an array of taxonomy names you can choose the filters that appear and the order they appear in. If you pass an empty array, no drop down filters will appear on the admin edit screen.


### Columns

You can add your own custom columns to include what ever value you want, for example with our books post type we will add custom fields for a price and rating.

You can define what columns you want to appear on the admin edit screen with the `columns()` method by passing an array like so:

{% highlight php startinline %}
$books->columns(array(
    'cb' => '<input type="checkbox" />',
    'title' => __('Title'),
    'genres' => __('Genres'),
    'price' => __('Price'),
    'rating' => __('Rating'),
    'date' => __('Date')
));
{% endhighlight %}

The key defines the name of the column, the value is the label that appears for that column on the admin edit screen. Once you've defined your columns you will then need to populate them.

### Populating Columns

You will need to create a function to populate a column that isn't automatically populated (see the [readme](https://github.com/jjgrainger/wp-custom-post-type-class) for more details).

You do so with the `populate_column()` method like so:

{% highlight php startinline %}
$books->populate_column('column_name', function($column, $post) {

    // your code goes here…

});
{% endhighlight %}

so we can populate our price column like so:

{% highlight php startinline %}
$books->populate_column('price', function($column, $post) {

    echo "£" . get_field('price'); // ACF get_field() function

});
{% endhighlight %}

*NOTE: the above example uses an [ACF](http://www.advancedcustomfields.com) function not featured with the class.*

### Sorting Columns

If it makes sense that column should be sortable by ascending/descending you can define custom sortable columns like so:

{% highlight php startinline %}
$books->sortable(array(
    'column_name' => array('meta_key', true)
));
{% endhighlight %}

The true/false is used to define whether the meta value is a string or integer, reason being is that if numbers are ordered as a string they will be ordered incorrectly.

so for our books example you will use:

{% highlight php startinline %}
$books->sortable(array(
    'price' => array('price', true),
    'rating' => array('rating', true)
));
{% endhighlight %}

So there we have it! We've set up a custom post type, added taxonomies, filters and additional columns with just a few lines of code.


The idea was to make it easy to create custom post types while providing simple methods to enhance the admin edit screen with taxonomy filters and additional columns.

It's still in beta and requires some testing against various examples but all in all it does the job!

The code is available in [GitHub](https://github.com/jjgrainger/wp-custom-post-type-class) for all to use freely, any problems set up an [issue](https://github.com/jjgrainger/wp-custom-post-type-class/issues), anything you'd like to add send over a [pull request](https://github.com/jjgrainger/wp-custom-post-type-class/pulls).

If you do use the class please let me know via [Twitter](http://www.twitter.com/jjgrainger) or the comments below!
