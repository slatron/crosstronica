var Grid = function(size) {

  grid = new Array(size);

  // Insert row arrays in grid array
  for(i=0; i < size; i++) {
    var thisRow = new Array(size);
    grid[i] = thisRow;
  }

  // Fill grid with numbers 0 to grid size
  for(i=0; i < size; i++) {
    for(j=0; j < size; j++) {
      grid[i][j] = j + (size * i);
    }  
  }

  return grid;

};

// Make new grid of size x
grid = new Grid(2);

// Show grid in console
for(i=0; i < grid[0].length; i++) {
  for(j=0; j < grid[i].length; j++) {
    console.log(i + ', ' + j + ': ', grid[i][j]);
  }  
}
