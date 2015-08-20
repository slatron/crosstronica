---
layout: post
title:  "The Tracer"
date:   2015-04-12
categories: tracer
desc: Settling on and adding the tracer feature
---

#### Tracer

After using the application to build smaller parts of a larger piece, I want to beign developing the ability to create a pattern from an image. This will be called the tracer. It will be vivible below the grid and allow the user to trace a pattern based on an existing image.

This will certainly be the most useful feature of Crosstronica. I set up a MVP with a hard-coded image this afternoon. It includes:

- Toggle tracer image visibility
- Move image up / down by slider input
- Move image left / right by slider input
- Adjust image scale

I'll want to add a few tasks before this feature is done:

- Adjust grid square size
- Remove empty borders from pattern API POST / PUT / GET
- Import image to trace

And a bug I noticed:

- Pallete POSTS are failing

After this is set, I'll enlist Carin to assist with the UI improvements.

- Cheers
