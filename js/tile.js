class Tile {
  constructor(x, y, char) {
    this.x = x;
    this.y = y;
    this.char = char;
    this.color = COLOR4;
    this.visibility = true;
  }
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
  getChar() {
    return this.char;
  }
  setChar(char) {
    this.char = char;
  }
  setColor(color) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }
  isColor(color) {
    if (color == this.color) {
      return true;
    } else {
      return false;
    }
  }
  setVis(vis) {
    this.visibility = vis;
  }
  getVis() {
    return this.visibility;
  }
}
