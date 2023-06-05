let person = {
  name: "John",
  age: 30,
};

person.greet = function () {
  return `Hello ${this.name}`;
};

console.log(person.greet());

person.name = "Paul";
console.log(person.greet());
