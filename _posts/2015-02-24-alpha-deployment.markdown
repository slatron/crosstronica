---
layout: post
title:  "Alpha Deployment Retro"
date:   2015-02-24
categories: mongo, heroku, angular, requirements
desc: Here is how the first deployment went
---

Very Well.

I'm pleased to report that I have just deployed my first MEAN application to a public website. I've still got several core features to implement, but I'm at a good point to assess the project state and set the next requirements.

According to my last post, my immediate goals were:

- Move the local application data from couch to mongo.
- Migrate that local mongo data to mongolab
- Update the application to use the public mongolab DB
- Deploy the express application to heroku

All of this has been completed. Moving to mongo feels like a good choice. It took a bit longer for me to get mongo set up than couch, but it's been much easier to work with. I also started using mongoose, a library for working with mongo.

I set up an api in express to communicate with the DB. There wasn't really a migration. I had so little data set up, that I used the API to seed what little data I needed in mongo.

In addition to the database move, I added several other features to the app.

I didn't want to set anything public without authentication, so I worked through a few authentication lessons. I highly recommend the book I used, (MEAN Machine)[https://leanpub.com/mean-machine] by Chris Sevilleja and Holly Lloyd. The [authentication service](https://github.com/slatron/crosstronica/blob/master/dev/js/angular_app/services/authService.js) is lifed directly from their examples. It was easy to incorporate with my existing angular code.

I refactored the angular directives to all have isolate scope. This makes all the parts of the application much more independent. I still have one $scope dependency on the grid-square directive. I only need it for a watch function, so I should be able to refactor that out soon.

Speaking of scope, I also refactored out all my common $scope objects into factories. With no $scope or controllers in the application I should be in good shape for testing out a 2.0 migration. When that comes.

Since this blog seemed to work well as a check-in, I'll continue. Here are the items I want to have accomplished before considering the app in beta:

- Finish ripping out $scope
- Input handling in new Pallete UI
- Panel usability upgrade
- Unit tests
- Improve draw function performance
- Wiki documentation
- Pattern POST, PUT operations
- Guest read-only logins
- Image Overlay Mode

That's a lot of features. But I can at least see a clear path to getting each one done. If I get lost or need some prioritization, I'll clear out my AgileZen board and task the rest of these out.

When I get that far in another month or so, I'll be able to call on Holtsford. He'll be a great help as I try to figure out if I want to scale this for multiple users. I'll certainly be moving beyond heroku at that point.
