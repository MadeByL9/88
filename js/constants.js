/*jshint esversion: 6 */

// colors
const COLOR1 = "#e1f7d5";
const COLOR2 = "#ffbdbd";
const COLOR3 = "#c9c9ff";
const COLOR4 = "#ffffff";
const COLOR5 = "#f1cbff";

// error handler
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
