---
layout: post
title:  "Defining the color pallete"
date:   2014-10-07
categories: define-requirements
desc: My first image for the color UI is a color picker. Like the color palete panel in Photoshop. I  need a series amount of squares, one for each color in the full pallete.
---
My first image for the color UI is a color picker. Like the color palete panel in Photoshop. I  need a series amount of squares, one for each color in the full pallete. Something like the gradient pickers like the ones used for the [jquery-ui colopicker][jquery-colopicker-wiki] would be nice eventually. For now I can use the [DMC floss numbers to RGB][dmc-rgb] chart to enter the values through a text input.

#### Minimum Requirements

I don't need much out of the color picker. The main pallete data will be an array of color objects. Each color object has a 'color' rgb string value and a 'symbol' character value.

The application will display the entire pallete in the toolbox area. The symbol will be displayed in a square with a background of the rgb color. When the user clicks on a color, a side larger square will hold the selected color.

 There will be two interactions using the picker:

- Select a color from the pallete to use
- Delete the selected color from the pallete

There will also need to be an interface for adding colors. This may or may not be part of the standard App toolbox. It will need two text inputs for new rgb values and symbols.

#### Data Needed

<pre>
  pallete: [
    {
      name: 'Wacky Purple'
      rgb: 'aaccff',
      symbol: 'w'
    },
    ...
  ]

  $scope.selected = {}
</pre>

[dmc-rgb]: http://www.csh.rit.edu/~vance/pages/color.html
[jquery-colopicker-wiki]: http://wiki.jqueryui.com/w/page/12137750/ColorPicker
