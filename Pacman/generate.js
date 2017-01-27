function generate() {
  for (var i = 0; i < cols; i++) {
    cells[i][0].wall = true;
  }
  //cells[4][1].wall = true;
  for (var i = 0; i < cols; i++) {
    cells[i][2].wall = true;
  }
  cells[3][2].wall = false;
  for (var i = 0; i < cols; i++) {
    cells[i][4].wall = true;
  }
  cells[5][4].wall = false;
}
