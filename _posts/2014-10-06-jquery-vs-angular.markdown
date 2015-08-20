---
layout: post
title:  "jQuery to angular + requirements"
date:   2014-10-06 21:23:47
categories: jquery define-requirements
desc: When I was only writing javascript in jQuery, I had a much different approach to front end web developent. Back then, I would write all the HTML and CSS for the site and add on javascript for UI later on.
---

When I was only writing javascript in jQuery, I had a much different approach to front end web developent. Back then<sup>1</sup>, I would write all the HTML and CSS for the site and add on javascript for UI later on. This worked well for a single website. With jQuery, you read the DOM itself as the state of the page. Building interactions last was easy because the representation of state was already visible. All the developer has to do is move the things on the screen around.

However, this speed in development came with a maintainability cost. While you could write jQuery plugins, it never played very well across all sites. Even the best plug-ins usually came with external stylesheets and needed very specific HTML structure to function.

Bigger problems usually arise late into the developemnt cycle. I've seen this happen on several teams: months after a first developer finishes a jquery UI component of a page, the client requests additional features. A second developer takes the project on, but misses one class. This throws off the entire interface amimation logic in a way that doesn't look broken or throw an error.

Those were both acceptable costs in most dev situations. The deeper issue was the cost of DOM manipultaion. The DOM is expensive to augment in terms of javascript time. Most of jQuery's feaures involved animating, editing, removing and adding HTML elements.

Writing an Angular application feels exactly the opposite. Instead of creating an HTML/CSS page first, I have to define the data scructure for the page before anything else. This data will then be used to update the DOM. I'm updating data structures that can be used throughout the App - instead of the DOM itself. I'll then create directives to generate pieces of HTML based on the data. Angular updates the DOM for me and all I have to concentrate on is how to manipulate the data to build and animate the page.

This feels like a more scalable and maintainable way to write web apps. I can move  angular directives and controllers between projects. As long as each piece is provided with the right data, I can move them between projects like legos.

So... after that here's what I'll need for the actual Crosstronica App:

- Color Picker Pallete
- Way to save symbols for each color in pallete
- Interface tool layout
- Grid for showing pattern
- Storage for patterns and color / symbol pairs
- Print pattern view

Since I'm in no rush to completion - and I want to milk as many blog topics as I can from this - I'll spend the next week writing a blog post on each of these items.

<sup>1</sup> | And by back then I mean 2008 - 2014

[book-nook]: http://www.carinslater.com/booknook/
