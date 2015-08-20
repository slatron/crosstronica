---
layout: post
title:  "Second MEAN App deploy"
date:   2015-03-10
categories: MEAN, heroku, angular, trello
desc: I built a quick CMS for Mad Bread shows
---

#### Project Management

In the previous two weeks, I got ambitious with my project management. At least as much as I need for small side projects. I started a personal Trello account and comitted to updating my projet boards each Sunday.

Trello is very basic as far as features. Not much more than customizable todo lists. This makes it perfect for small-scale projects with a single team member. I create a sprint line in each column and put any tasks that I intend to finish that week above the line. Any additional tasks are entered below the line and considered the following Sunday.

<hr>

#### Mad Brad Show CMS

To extend my MEAN skills, I built a CMS for the Mad Bread website. It uses the same authentication service as Crosstronica. I started mongolab and heroku accounts for Mad Bread. The application exposes a single read-only endpoint for the public site. Everything else is behind the admin wall in the heroku deployed app for CRUD'ding the shows.

Now all we need are some more confirmed public shows so the other guys can test this out. It's nice to have my skillset at a point where I'm confortable releasing small practical web apps like this.

<hr>

#### Crosstronica

For the main app, I've made a lot of progress. This has become a great sandbox for testing Angular features in a safer environment. Any code patterns or techniques I discover online can be implemented and evaluated here. Once I understand the concept, I can decide whether to implement it on the project at my regular job.

I finished all the following tasks mentioned in the last post:

##### Finish ripping out $scope

All directives use isolate scope and the controllerAs syntax.

##### Input handling in new Pallete UI

I used range inputs to control how big a new pattern grid can get.

##### Panel usability upgrade

All the pattern functionality is combined into one panel in the drawer. I also removed several unneeded headings and improved the subsection styles.

##### Improve draw function performance

The border draw function is much more direct from scope and does not use external DOM manipulation to add the classes via jQuery lite.

##### Pattern POST, PUT operations

You can now CRUD patterns from the UI.

##### Guest read-only logins

By logging in as guest / guest, the user does not have the ability to delete or save pattern changes through the UI.

<hr>

I haven't gotten to these yet, but plan to within the next couple weeks:

- Unit tests
- Wiki documentation

These are next on the horizon:

- User Feedback
- Image Overlay Mode

I'm really enjoying the Angular framework by now. Taking a much more service oriented approach to the architecture really makes development smoother. My next project will be to update mikeslater.com by creating a skill tree app for my development skills. I plan on using react / flux so I can compare that framework with angular.

Cheers!
