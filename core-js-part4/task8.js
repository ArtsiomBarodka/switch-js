class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  static calculateArea(rectangle) {
    return rectangle.width * rectangle.height;
  }
}

const rectangle = new Rectangle(10, 4);
console.log(
  `Rectangle with width = ${rectangle.width} and height = ${
    rectangle.height
  } has an area ${Rectangle.calculateArea(rectangle)}`
);
