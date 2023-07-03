class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    print() {
        console.log(`First Name: ${this.firstName}, Last Name: ${this.lastName}`);
    }
}
class Employee extends Person {
    constructor(firstName, lastName, company) {
        super(firstName, lastName);
        this.company = company;
    }
    print() {
        super.print();
        console.log(`Company Name: ${this.company}`);
    }
}
let jack = new Employee("Jack", "Big", "Google");
jack.print();
