class Person {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public print(): void {
    console.log(`First Name: ${this.firstName}, Last Name: ${this.lastName}`);
  }
}

class Employee extends Person {
  private company: string;

  constructor(firstName: string, lastName: string, company: string) {
    super(firstName, lastName);
    this.company = company;
  }

  public print(): void {
    super.print();
    console.log(`Company Name: ${this.company}`);
  }
}

let jack: Employee = new Employee("Jack", "Big", "Google");
jack.print();
