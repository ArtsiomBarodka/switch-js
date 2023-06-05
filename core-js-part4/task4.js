function displayInfo(firstName) {
  console.log(`Hello, my full name is ${firstName} ${this.lastName}.`);
}

const p1 = {
  lastName: "Dou",
};

const p2 = {
  lastName: "Green",
};

displayInfo.apply(p1, ["John"]);
displayInfo.apply(p2, ["John"]);
