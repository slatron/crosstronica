var grid = function(size) {

  grid = new Array(size);

  for(i=0; i < size; i++) {
    var thisRow = new Array(size);
    console.log(thisRow);
    grid[i] = thisRow;
  }

  for (i=0; i < size; i++) { grid[0][i] = i + (size * 0); }   // number the row 1 through 5
  for (i=0; i < size; i++) { grid[1][i] = i + (size * 1); }   // number the next row of row 6 through 10
  for (i=0; i < size; i++) { grid[2][i] = i + (size * 2); }   // and so on
  for (i=0; i < size; i++) { grid[3][i] = i + (size * 3); }
  for (i=0; i < size; i++) { grid[4][i] = i + (size * 4); }

  return grid;

};

console.log(grid(5));
