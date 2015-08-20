---
layout: post
title:  "Rethinking the grid HTML"
date:   2014-10-15
categories: angular
desc: Instead of using a repeated div on the html view that shows the symbol of the current color as text, I had to pass all the information in through attributes.
---

<div code-showhide headline="A premature start to this post that I am still not edting out">
  So, I'm already seeing that the nested ng-repeat loops to display the Pattern Grid are going to be an issue. Some of the patterns are going to get very large, and I've already seen some slight performance issues at aroung 50 x 50 grids. THere's a way to build the grid from a single ng-repeat. I should be able to call the objects individually. Or possibly use the multidimensional array as a lookup table for updating the color objects. Maybe I should think about this more before adding it to the blog.

  Nope, no editing. On I go. Before I tackle the layered ng-repeat, I want to work on the mouse drag detect. No native javascript event for this - and there is some conflicting advice on SO. I'll throw some code at this and see what hapepns.
</div>

If you got to the end of that tangent, I did go on to figure out two things:
- Moving each pattern square into a directive
- The key to action on mousedown + drag events

I'm tired, so this will be a quick code demo.  Instead of using a repeated div on the html view that shows the symbol of the current color as text, I had to pass all the information in through attributes.

<div code-showhide headline="Calling the grid-square directive from a view">

  <p>Following is called from within a nested ng-repeat loop for the multidimensional grid array.</p>

  <pre>
      color="{{col.rgb}}"
      symbol="{{col.symbol}}"
      paint="paintCel($parent.$index, $index, true)"
  </pre>

</div>

Once that was set up, I had to set up the directive scope and link function. One problem I had for a while was geting the paintCel() function to trigger from within each square. After reading up on isolate scopes, I figured out how to use '&' scoping.

'&' scopes refer to an event on the parent $scope. There are three places where this needs to be declared, in the "scope" key on he directive, in the template, and in the link function when triggering the event (unless you are using ng-click, and I am not in this case).

<div code-showhide headline="The entire gridSquare directive function">
<pre>
  function gridSquare() {

    return {
      restrict: 'E',
      replace: true,
      scope: {
        color: '@',
        symbol: '@',
        paint: '&'
      },
      templateUrl: '/js/angular_app/directives/grid_square/grid-square.html',
      link: function (scope, elem, attrs) {
        elem.on('mousedown', function() {
          scope.paint(attrs.row, attrs.col);
        });

        elem.on('mouseover', function(e) {
          if(e.which === 1) {
            elem.on('mouseup mousemove', function handler(e) {
              scope.paint(attrs.row, attrs.col);
              elem.off('mouseup mousemove', handler);
            });
          }
        });
      }
    };
  }
</pre>
</div>

The dragging magic happens from within the link function. Any mouse down over a square triggers a draw. Same with drags over squares with the mouse held down.

The last item to fix is the grid square highlighting. When you drag a click on a div, it highlights in the same way you highlght text. This is not what I want, so I lookied into a CSS solution.

Ths answer was to use the user-select: none property on all Pattern Grid squares. There are still a lot of differences on this property using browser prefixes. Fortunately, I'm using autoprefixer in my gulp build, which takes care of that for me.

<div code-showhide headline="This is all I need to disable highlighting on Grid Squares">

  <pre>
    %square,
    .square {
      user-select: none;
      ...more css
    }
  </pre>

</div>


That was easier than I thought. Hopefully, the nested ng-repeats will hold up for a while. Next, I'll have to add a color form to submit additional pallete colors.

Cheers!
