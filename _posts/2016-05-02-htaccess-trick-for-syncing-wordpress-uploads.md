---
title: Htaccess trick for syncing WordPress uploads
date: 2016/05/02
layout: post
---

When working with WordPress it can be a pain keeping your local version up to date with the production site, especially all the images and files contained in the uploads folder.

Having to download the uploads via FTP can take some time, fortunately with a simple .htaccess trick you can use the live version of images when they’re not available locally.

Simply create a `.htaccess` file inside the `/uploads` folder with the following code, replacing the URL with the production sites address.

```apache
# Attempt to load files from production if they're not in our local version

RewriteEngine on
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule (.*) http://domain.com/wp-content/uploads/$1
```

Make sure you put this file inside the `/uploads` directory and change the URL to the production sites address.

What this will do is first look for the local version of the file, if that doesn’t exists it will then attempt to grab the production version and use that.

This isn't a full proof solution, its a simple trick to avoid having to go through the tedious task of syncing your local site with production.

For a more professional solution I would check out [WP Migrate DB Pro](https://deliciousbrains.com/wp-migrate-db-pro) and its [Media files addon](https://deliciousbrains.com/wp-migrate-db-pro/#addons).
