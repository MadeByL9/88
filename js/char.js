/*jshint esversion: 6 */
class Char {
  constructor(x, y, char) {
    this.x = x;
    this.y = y;
    this.tileX = x * SQUARE_SIZE + SQUARE_SIZE / 2;
    this.tileY = y * SQUARE_SIZE + SQUARE_SIZE;
    this.char = char;
  }
  show() {
    textSize(40);
    textAlign(CENTER, BOTTOM);
    fill(51);
    text(this.char, this.tileX, this.tileY);
  }
  getChar() {
    return this.char;
  }
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
  move(x, y) {
    this.x = this.x + x;
    this.y = this.y + y;
  }
}
