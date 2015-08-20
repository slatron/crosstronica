---
layout: post
title:  "Defining the pattern grid object"
date:   2014-10-09
categories: define-requirements
desc: The last requirement I want to think about before laying some code to pavement is the actual pattern grid object. I've realized while writing these posts how much typing these...
---
The last requirement I want to think about before laying some code to pavement is the actual pattern grid object. I've realized while writing these posts how much typing these extremely short and focused posts on requirements are helping me think about building the app.

The downside is that this blog likely will never be read by anyone but myself. Either way, it gives me practice writing evey day and will hopefully lead to a more general personal / developer blog after Crostronica is finished.

Each Pattern grid will be represented by a multidimensional array. Each square of the grid will contain a color object or null. It will be contained in an object so I can include some metadata about the pattern itself. I was originally thinking I'd need a way to manage grid sizes, but we can read the lengths of the grid array itself to get dimensions.

I'll likely have a top-level array to hold all the grids in storage. Oh yeah storage. I'll probably start with some local json files. I can always move to a database approach later on. That's actually pretty exciting as I have very limited experience with DB managemenet. Just a few CMS-driven sites I built with PHP / MySQL years ago.

For the metadata, I'll need a pattern name, date created, date modified and type to start.

#### Data Needed

<div code-showhide headline="All Grids Structure">
  <pre>
  grids: [
    {
      name: 'All My Children'
      created: '2014-10-07',
      modified: 2014-10-09',
      type: 'Family',
      grid: [
              {
                name: 'Wacky Purple'
                rgb: 'aaccff',
                symbol: 'w'
              },
              {
                name: 'Wacky Purple'
                rgb: 'aaccff',
                symbol: 'w'
              }
            ][
              null,
              {
                name: 'Wacky Purple'
                rgb: 'aaccff',
                symbol: 'w'
              }
            ]
    }
  ]
  </pre>
</div>

Yeah, I already see some issues with that. First of all, I'm not entirely sure on that multidimensional array approach. Second, there should be a way to reference the pallete array objects instead of copying each color object to the grid. Looks like I know what I'll be looking nto next. Cheers for tonight!
