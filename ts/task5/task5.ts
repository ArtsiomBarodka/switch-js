import { greet, Calculator } from "./export.js";

const greeting = greet("Alice");
console.log(greeting);

const calc = new Calculator();
const sum = calc.add(5, 7);
console.log(sum);
