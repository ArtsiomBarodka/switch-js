function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;

  this.getInfo = function () {
    return `Car details: make = ${this.make}, model = ${this.model}, year = ${this.year}`;
  };
}

const car1 = new Car("BMW", "X6", 2020);
const car2 = new Car("AUDI", "A^", 2018);
const car3 = new Car("Toyota", "Camry", 2023);

console.log(car1.getInfo());
console.log(car2.getInfo());
console.log(car3.getInfo());
