function displayInfo(firstName) {
  console.log(`Hello, my full name is ${firstName} ${this.lastName}.`);
}

const dou = {
  lastName: "Dou",
};

const green = {
  lastName: "Green",
};

const douDispayInfo = displayInfo.bind(dou);
const greenDispayInfo = displayInfo.bind(green);

douDispayInfo("John");
greenDispayInfo("Kate");
