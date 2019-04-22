/*jshint esversion: 6 */
const ERROR_STRING = "Nigga don't do that's 5 to 10!"; // change before launch-
function error() {
  fill("red");
  square(squareX * SQUARE_SIZE, squareY * SQUARE_SIZE, GUI_SIZE);
  selectedX = 9999;
  selectedY = 9999;
  console.error("Nigga don't do that's 5 to 10!");
}
// canvas
const WIDTH = 500;
const HEIGHT = 500;
const GUI_SIZE = 50;
// square
const SQUARE_MARGIN = 10;
let SQUARE_SIZE = WIDTH / 10;
let SQUARE_NUM = 10;
let SQUARES_NUM = SQUARE_NUM * SQUARE_NUM;
// grid
const RES = 50;
const COLS = WIDTH / RES;
const ROWS = HEIGHT / RES;
grid = make2DArray(COLS, ROWS);
// chars
houses = [];
gui_choices = [];
playerA = [];
// mouse square vars
let squareX, squareY;
// used slots
let useds = [];
// available slots
showAv = false;
av = [];
// GUI
let startgui = 3;
let endgui = 7;
let gui = new Array(endgui);
for (let i = startgui; i < gui.length; i++) {
  gui[i] = new GUI(i);
}
console.log("Classes:");
gui_choices.push(new Char(3, 10, "A")); // <- TEMP
console.log("A => Archer");
gui_choices.push(new Char(4, 10, "S")); // <- TEMP
console.log("S => Shielder");
gui_choices.push(new Char(5, 10, "K")); // <- TEMP
console.log("K => Knight");
gui_choices.push(new Char(6, 10, "W")); // <- TEMP
console.log("W => Wizard");
// selected
let wis_selected;
let gui_selected;
let waiting = false;
let selectedX;
let selectedY;

function selectTile(tileX, tileY, block) {
  if (tileX == 9 || tileY == 9) {
  } else if (tileX == selectedX && tileY == selectedY) {
    selectedX = 9999;
    selectedY = 9999;
  } else {
    if (block == "gui") {
      console.log("GUI ID: ", squareX);
    } else if (block == "map") {
      console.log("T: ", squareX, squareY);
    }
    selectedX = tileX;
    selectedY = tileY;
  }
}

function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

// mouse square
function mouseSquare(block) {
  wis_selected = block;
  squareX = floor(mouseX / 50);
  squareY = floor(mouseY / 50);
  if (block == "map") {
    new_grid = make2DArray(COLS, ROWS);
    for (let x = 0; x < COLS; x++) {
      for (let y = 0; y < ROWS; y++) {
        new_grid[x][y] = grid[x][y];
        if (x == squareX && y == squareY) {
          selectTile(squareX, squareY, "map");
        }
      }
    }
    grid = new_grid;
  } else if (block == "gui") {
    gui_id = squareX;
    let new_gui = new Array(endgui);
    for (let i = startgui; i < new_gui.length; i++) {
      new_gui[i] = new GUI(i);
      if (i == gui_id) {
        selectTile(squareX, squareY, "gui");
        gui_selected = gui_id;
      }
    }
    gui = new_gui;
  }
  if (wis_selected == "gui" && squareX > startgui - 1 && squareX < endgui) {
    waiting = true;
    for (let i = 1; i <= 8; i++) {
      for (let j = 5; j <= 7; j++) {
        av.push(new Tile(i, j, ""));
      }
    }
    showAv = true;
  }

  if (wis_selected == "map" && waiting) {
    showAv = false;
    waiting = false;
    ok = true;

    useds.forEach(function(e) {
      if (e.x == squareX && e.y == squareY) {
        ok = false;
        error(0);
      }
    });

    if (typeof useds[0] === "undefined") ok = true;
    if (squareY > 4 && squareY < 8 && ok) {
      useds.push({ x: squareX, y: squareY });
      playerA.push(
        new Char(
          squareX,
          squareY,
          gui_choices[gui_selected - startgui].getChar()
        )
      );
    } else {
      error();
    }
  }
}

function mouseClicked() {
  if (mouseX < WIDTH && mouseY < HEIGHT && mouseX > 50 && mouseY > 50) {
    mouseSquare("map");
  } else if (
    mouseX > 0 &&
    mouseY >= HEIGHT &&
    mouseX < WIDTH &&
    mouseY < HEIGHT + GUI_SIZE
  ) {
    mouseSquare("gui");
  }
}

function setup() {
  createCanvas(WIDTH, HEIGHT + GUI_SIZE); // GUI IS 50PX
  frameRate(10);
  background(COLOR2);
  for (let i = 0; i < COLS; i++) {
    for (let j = 0; j < ROWS; j++) {
      let x = i * RES;
      let y = j * RES;
      grid[i][j] = new Tile(x, y, " ");
      if ((j == 8 || j == 1) && i > 0 && i < 9) {
        houses.push(new Char(i, j, "H"));
        grid[i][j].setColor(COLOR1);
      }
    }
  }
}

function showBoard() {
  // grid part
  for (let i = 1; i < COLS - 1; i++) {
    for (let j = 1; j < ROWS - 1; j++) {
      tile = grid[i][j];
      fill(tile.getColor());
      noStroke();
      square(tile.getX(), tile.getY(), GUI_SIZE);
    }
  }
}

function showGUI() {
  for (let i = startgui; i < gui.length; i++) {
    g = gui[i];
    fill(g.getColor());
    square(g.getId() * GUI_SIZE, HEIGHT, GUI_SIZE);
  }
}

function showAvailable() {
  fill(COLOR5);
  for (let a = 0; a < av.length; a++) {
    square(av[a].getX() * SQUARE_SIZE, av[a].getY() * SQUARE_SIZE, SQUARE_SIZE);
  }
}

function showChars() {
  // houses
  for (let i = 0; i < houses.length; i++) {
    houses[i].show();
  }
  // gui
  for (let i = 0; i < gui_choices.length; i++) {
    gui_choices[i].show();
  }
  // playerA
  for (let i = 0; i < playerA.length; i++) {
    playerA[i].show();
  }
}

function draw() {
  let DEBUG = true;
  if (DEBUG) {
    fill("grey");
    noStroke(255);
    square(51, 51, 401);
    showBoard();
    showGUI();
    fill(COLOR5);
    square(selectedX * SQUARE_SIZE, selectedY * SQUARE_SIZE, GUI_SIZE);
    if (showAv) showAvailable();
    showChars();
  }
}
