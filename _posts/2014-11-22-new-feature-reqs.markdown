---
layout: post
title:  "Results of Self User Testing"
date:   2014-11-22
categories: UI
desc: Re-evaluating the UI by using my own application.
---

My initial results are positive. I'm definately finding some missing functionality - mostly storage, a wider toolset, and ability to draw lines across more than just grid borders. But this is exactly the kind of feedback I need, even from myself. I guess I should have thought of an application with a wider user base than just for me if feedback is what I wanted. Oh well, at least I don't ever plan on selling this - or making $$$ 8 )>.

Here's some of the UX issues I initially noticed:

### Project Drawer

The drawer was looking pretty clunky. I was using it open for a while while changing colors, but it got annoying. Especially trying to figure out how to paint squares under it while changing colors.

I spent some time on the drawer design to make the individual panels as small but useful as possible. I also added a toggle display bar to the add new color as that was rarely used.

The best update was to center the pattern and leave ehough room on the left side of the screen to open and close the panel.

###### Drawer Positioning Examples Here:

<div code-showhide headline="Drawer">

  <div class="image-plus-caption">
    <img src="/ms_assets/images/ux-2014-11-22/drawer-closed.png">
    <em>After Update - Drawer Closed</em>

    <img src="/ms_assets/images/ux-2014-11-22/drawer-open.png">
    <em>After Update - Drawer Open</em>
  </div>

</div>

This works for smaller patterns, but will quickly get annoying to position for larger patterns that do not all fit on the screen. My next layout update will be to align the pattern to the left of the screen and have the drawer come down from the top of the screen. Idealy positioned in the upper-right corner to expose the majority of the pattern grid.

### Tools Panel

The tools panel was made with a larger button. I'll have to spend more time on their on / off states. But this will work for now with only the eraser tool to select.

<div code-showhide headline="Tools Panel">

  <div class="image-plus-caption">
    <img src="/ms_assets/images/ux-2014-11-22/tools-panel.png">
    <em>Just one button for now</em>
  </div>

</div>

Ideally, this will expand soon to include the following tools:

- Brush tool for filling multiple squares
- Fill tool for filling blank areas

These are all just different states for the cursor. This is exactly how photoshop tools function. I'm just limiting them to the essentials.

### Draw Mode Panel

<div code-showhide headline="Draw Mode">

  <div class="image-plus-caption">
    <img src="/ms_assets/images/ux-2014-11-22/draw-mode-paint.png">
    <em>Paint Mode</em>
  </div>

  <div class="image-plus-caption">
    <img src="/ms_assets/images/ux-2014-11-22/draw-mode-borders.png">
    <em>Borders Mode</em>
  </div>

</div>

# Borders

The biggest feature I added to the initial requirements was the borders. You can see them in the above picture, where Carl's shirt meets the white background. This was accomplished by adding a set of classes to grid squares - once for each border side. If  class for a border side is on, like class="border-left", the left side of that square will be 2px instead of 1. THe flex grid keeps everything aligned to acheieve the smooth border effect.
