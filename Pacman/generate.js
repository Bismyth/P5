function generate() {
  for (var i = 0; i < cols; i++) {
    cells[i][0].wall = true;
  }
  for (var i = 0; i < cols; i++) {
    cells[i][3].wall = true;
  }
  cells[3][3].wall = false;
}
