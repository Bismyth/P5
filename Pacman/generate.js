function generate() {
  for (var i = 0; i < cols; i++) {
    cells[i][0].wall = true;
    cells[i][height / w - 1].wall = true;
  }
  for (var i = 0; i < 12; i++) {
    cells[0][rows - (i + 1)].wall = true;
    cells[cols - 1][rows - (i + 1)].wall = true;
  }
  for (var i = 0; i < 9; i++) {
    cells[0][i + 1].wall = true;
    cells[cols - 1][i + 1].wall = true;
  }
  for (var i = 0; i < 6; i++) {
    cells[i][9 + 4].wall = true;
    cells[i][9 + 6].wall = true;
    cells[cols - (i + 1)][9 + 4].wall = true;
    cells[cols - (i + 1)][9 + 6].wall = true;
  }
  for (var i = 0; i < 4; i++) {
    cells[2 + i][2].wall = true;
    cells[2 + i][3].wall = true;
    cells[2 + i][4].wall = true;
    cells[2 + i][6].wall = true;
    cells[2 + i][7].wall = true;
    cells[cols - (3 + i)][2].wall = true;
    cells[cols - (3 + i)][3].wall = true;
    cells[cols - (3 + i)][4].wall = true;
    cells[cols - (3 + i)][6].wall = true;
    cells[cols - (3 + i)][7].wall = true;

    cells[cols / 2][i + 1].wall = true;
    cells[cols / 2 - 1][i + 1].wall = true;
  }
  for (var i = 0; i < 5; i++) {
    cells[7][14 + i].wall = true;
    cells[8][14 + i].wall = true;
    cells[cols - 8][14 + i].wall = true;
    cells[cols - 9][14 + i].wall = true;
    cells[i + 1][9].wall = true;
    cells[i + 7][2].wall = true;
    cells[i + 7][3].wall = true;
    cells[i + 7][4].wall = true;
    cells[cols - (i + 8)][2].wall = true;
    cells[cols - (i + 8)][3].wall = true;
    cells[cols - (i + 8)][4].wall = true;
    //cells[i + 1][rows].wall = true;
  }
  for (var i = 0; i < 8; i++) {}
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      cells[i][j].check();
    }
  }
}
