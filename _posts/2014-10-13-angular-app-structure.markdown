---
layout: post
title:  "The angular app structure"
date:   2014-10-13
categories: angular
desc: As I promised myself, I got around to writing some code this weekend. Angular has proven to be a quick way of developing apps. That is, if enough of the structural decisions have been made beforehand.
---

As I promised myself, I got around to writing some code this weekend. Angular has proven to be a quick way of developing apps. That is, if enough of the structural decisions have been made beforehand.

For the first iteration of the app, I want a visual UI for all three major components idendified so far: The color-pallete, a selected color indicator, and a grid to draw on.

Besides the basic angular module and CSS, I'll need three files to setup the initial app state:
- an index.htm, file to represent the view
- a factory to generate the initial grid and fetch the pallete json data
- a controller to manage the scope data state

The factory will return an object with two methods, getPallete() and makeGrid(rows, cols). getPallete() will simply return a promise that fetches pallete.json from the server. makeGrid() is more involved, but I wrote the bulk of the function already in the previous "Exploring Javascrtipt Multidimensional Arrays" post. All I did was move that code into the factory and extend it so that a grid can be any domensions, not just squares. It also generates an empty object at each location to be filled in with color objects later:

<div code-showhide headline="Pattern Grid Factory">

  <pre>
  function gridFactory($http, $q) {

    var gridFactoryMethods = {};

    gridFactoryMethods.getPallete = function() {
      var deferred = $q.defer();

      $http.get('/json/pallete.json').success(function(data){
        deferred.resolve(data);
      }).error(function() {
        deferred.reject('There was an error getting pallete.json');
      });

      return deferred.promise;
    };

    gridFactoryMethods.makeGrid = function(rows, cols) {

      var grid = [];

      // Insert row arrays in grid array
      for(i=0; i &lt; rows; i++) {
        var thisRow = new Array(cols);
        grid[i] = thisRow;
      }

      var aRow = [];

      for(i=0;i&lt;cols;i++) {
        aRow[i] = {};
      }

      // Fill grid with numbers 0 to grid size
      for(i=0; i &lt; rows; i++) {
        var start = cols * i,
            end   = (cols * i) + cols;
        grid[i] = _.clone(aRow, true);
      }
      return grid;
    };

    return gridFactoryMethods;
  }

  angular.module('Crosstronica').
  factory('gridFactory', gridFactory);
  </pre>
</div>

The controller is less interesting at this point, although I did write two methods on $scope to select a color from the pallete and paint individual squares:

<div code-showhide headline="Color Pallete Controller Functions">

  <pre>
    $scope.selectColor = function(colorId) {
      $scope.selected = $scope.pallete[colorId];
    };

    $scope.paintCel = function(row, col) {
      $scope.grid[row][col] = $scope.selected;
    };
  </pre>
</div>

Multidemensional arrays seem to work exactly as I thought they would.

Last is the index.html page. The grid is displayed in the &lt;main&gt; node by looping through each row then each col in that row:

<div code-showhide headline="HTML to display Pattern Grid">

  <pre>
    &lt;div ng-repeat=&quot;row in grid track by $index&quot; class=&quot;grid pattern-row&quot;&gt;
      &lt;div ng-repeat=&quot;col in row track by $index&quot; class=&quot;grid&quot;&gt;
        &lt;div
          class=&quot;pattern-cel square&quot;
          ng-click=&quot;paintCel($parent.$index, $index)&quot;
          style=&quot;background-color: #col.rgb;&quot;
        &gt;
          col.symbol
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  </pre>
</div>

The pallete displays above the grid for now:

<div code-showhide headline="Color Pallete HTML">

  <pre>
    &lt;div ng-repeat=&quot;color in pallete&quot; class=&quot;color-pallete&quot;&gt;
      &lt;div
        ng-click=&quot;selectColor(color.c_id)&quot;
        class=&quot;square&quot;
        style=&quot;background-color: #{{color.rgb}};&quot;
      &gt;
        {{color.symbol}}
      &lt;/div&gt;
    &lt;/div&gt;
  </pre>
</div>

So far so good. I now have a simple drawing program. Time to identify some next steps:

- Dragging across the grid should draw like a pencil tool
- Eraser tool
- Form for adding new colors to the pallete
- Menu for choosing between and saving grids
- Layout (both the app and this blog)

I can't wait until this is actually useful.

Cheers!
