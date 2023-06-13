function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

User.prototype.displayInfo = function () {
  console.log(`Hello, my full name is ${this.firstName} ${this.lastName}.`);
};

const u = new User("John", "Dou");
u.displayInfo();
