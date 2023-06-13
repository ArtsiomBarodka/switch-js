function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.displayInfo = function () {
    console.log(`Hello, my full name is ${this.firstName} ${this.lastName}.`);
  };
}

const user = new User("John", "Dou");
user.displayInfo();
