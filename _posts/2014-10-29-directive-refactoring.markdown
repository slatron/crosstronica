---
layout: post
title:  "No more ng-controller attributes"
date:   2014-10-29
categories: angular directives refactoring
desc: Time to get beyond database struggles. Couch is pretty tough to get a proper mental model for. After finishing the pallete GET and POST functionality, I'm going to take a DB break to...
---

Time to get beyond database struggles. Couch is pretty tough to get a proper mental model for. After finishing the pallete GET and POST functionality, I'm going to take a DB break to concentrate on the UI again. I'll need to go in pretty deep to get the grid pattern tables and map-reducings.

[I read an article][banning-ng-controller] yesterday on improving angular structure by getting rid of the ng-controller attribute. The solution is to put put everything in directives. So I did. It was easier than I expected. At a base level, I didn't have to think about the business logic at all. It was all about restructuing my code.

Now that everythig is in a directive, my directory structure is also much easier to read. All the main components are still under a /directive/ folder, but they are all grouped into subfolders. Each subfolder is named for the component and contains the related HTML and directive.js file. That's it. I could go further and split out the controllers into files - but those would be out of the HTML and coupled with their directives.

If I get some dev time tonight, I'll revisit requirements. Now that I have a small pattern grid to play with, I see some base features that I'll need next. Plus, now that I have everything compartmentalized, the layout animations should be easy to add in.


[banning-ng-controller]: http://teropa.info/blog/2014/10/24/how-ive-improved-my-angular-apps-by-banning-ng-controller.html
