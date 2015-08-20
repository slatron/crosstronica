---
layout: post
title:  "Conquering the DB?"
date:   2014-10-24
categories: angular database couch
desc: I'm a little bit further along with the database progress. Mongo turned out to be much easier to install than couch, even though it's more of a full "enterprise" solution.
---

I'm a little bit further along with the database progress. Mongo turned out to be much easier to install than couch, even though it's more of a full "enterprise" solution. With mongo, I could simply download the binary files and be ready to go.

Couch was a completely different story. The main download is provided through an Apache mirror. Since I'm using a new laptop from work to explore this code, I don't have permissions to install those .dmg given files through the finder. I had to use brew or macports to install.

That got deep into new macine setup territory as I had to install macports first, then couch, then xcode, then xcode command line tools, then set up the base couch application locally.

As of last night, I got everything up and running on couch. I went through the getting started portion of the online documentation. First, setting up some "tables" with curl commands, then through their GUI interface "Futon" (get it?).

I like what I see so far from these no-SQL databases. As I said last post, I've never been comfortable with database setup and maintainance. Now I can use my native language javascript to perform CRUD operations on persistant JSON. I'll report back when I have some set up from within Crosstronica. I expect to get the color pallete form and storage set up next.
