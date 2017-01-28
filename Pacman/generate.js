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
    cells[7][15 + i].wall = true;
    cells[8][15 + i].wall = true;
    cells[cols - 8][15 + i].wall = true;
    cells[cols - 9][15 + i].wall = true;
    cells[i + 1][9].wall = true;
    cells[cols - (i + 2)][9].wall = true;
    cells[i + 7][2].wall = true;
    cells[i + 7][3].wall = true;
    cells[i + 7][4].wall = true;
    cells[cols - (i + 8)][2].wall = true;
    cells[cols - (i + 8)][3].wall = true;
    cells[cols - (i + 8)][4].wall = true;
    cells[i + 1][rows - 12].wall = true;
    cells[cols - (i + 2)][rows - 12].wall = true;
    cells[7 + i][rows - 10].wall = true;
    cells[7 + i][rows - 9].wall = true;
    cells[cols - (8 + i)][rows - 10].wall = true;
    cells[cols - (8 + i)][rows - 9].wall = true;
    cells[4][rows - (10 - i)].wall = true;
    cells[5][rows - (10 - i)].wall = true;
    cells[cols - 5][rows - (10 - i)].wall = true;
    cells[cols - 6][rows - (10 - i)].wall = true;
    //cells[i + 1][rows].wall = true;
  }
  for (var i = 0; i < 8; i++) {
    cells[i + 10][6].wall = true;
    cells[i + 10][7].wall = true;
    cells[7][6 + i].wall = true;
    cells[8][6 + i].wall = true;
    cells[cols - 8][6 + i].wall = true;
    cells[cols - 9][6 + i].wall = true;
    cells[10 + i][rows - 7].wall = true;
    cells[10 + i][rows - 6].wall = true;
    cells[10 + i][rows - 12].wall = true;
    cells[10 + i][rows - 13].wall = true;
  }
  for (var i = 0; i < 3; i++) {
    cells[5][10 + i].wall = true;
    cells[cols - 6][10 + i].wall = true;
    cells[5][rows - (13 + i)].wall = true;
    cells[cols - 6][rows - (13 + i)].wall = true;
    cells[13][8 + i].wall = true;
    cells[14][8 + i].wall = true;
    cells[9 + i][9].wall = true;
    cells[9 + i][10].wall = true;
    cells[cols - (10 + i)][9].wall = true;
    cells[cols - (10 + i)][10].wall = true;
    cells[14][rows - (i + 3)].wall = true;
    cells[13][rows - (i + 3)].wall = true;
    cells[14][rows - (i + 9)].wall = true;
    cells[13][rows - (i + 9)].wall = true;
    cells[7][rows - (i + 5)].wall = true;
    cells[8][rows - (i + 5)].wall = true;
    cells[cols - 8][rows - (i + 5)].wall = true;
    cells[cols - 9][rows - (i + 5)].wall = true;
  }
  for (var i = 0; i < 2; i++) {
    cells[i + 1][rows - 6].wall = true;
    cells[i + 1][rows - 7].wall = true;
    cells[cols - (i + 2)][rows - 6].wall = true;
    cells[cols - (i + 2)][rows - 7].wall = true;
    cells[i + 2][rows - 9].wall = true;
    cells[i + 2][rows - 10].wall = true;
    cells[cols - (i + 3)][rows - 10].wall = true;
    cells[cols - (i + 3)][rows - 9].wall = true;
  }
  for (var i = 0; i < 10; i++) {
    cells[2 + i][rows - 3].wall = true;
    cells[cols - (3 + i)][rows - 3].wall = true;
    cells[2 + i][rows - 4].wall = true;
    cells[cols - (3 + i)][rows - 4].wall = true;
  }
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      cells[i][j].check();
    }
  }
  cells[0][13].c1 = false;
  cells[0][15].c1 = false;
  cells[0][13].c4 = false;
  cells[0][15].c4 = false;
  cells[cols - 1][13].c2 = false;
  cells[cols - 1][15].c2 = false;
  cells[cols - 1][13].c3 = false;
  cells[cols - 1][15].c4 = false;
}
