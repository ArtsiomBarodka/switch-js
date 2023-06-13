function displayInfo(firstName) {
  console.log(`Hello, my full name is ${firstName} ${this.lastName}.`);
}

const person1 = {
  lastName: "Dou",
};

const person2 = {
  lastName: "Green",
};

displayInfo.call(person1, "John");
displayInfo.call(person2, "John");
