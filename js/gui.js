class GUI {
  constructor(id) {
    this.id = id;
    this.name = "Default Name";
    this.alias = "D";
    this.color = COLOR3;
  }
  getId() {
    return this.id;
  }
  setName(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  setAlias(alias) {
    this.alias = alias;
  }
  getAlias() {
    return this.alias;
  }
  isColor(color) {
    if (color == this.color) {
      return true;
    } else {
      return false;
    }
  }
  setColor(color) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }
}
