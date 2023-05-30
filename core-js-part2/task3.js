function checkNumber(number) {
  if (number > 0) {
    return "Positive";
  } else if (number < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

console.log(`The number 2 is ${checkNumber(2)}`);
console.log(`The number -2 is ${checkNumber(-2)}`);
console.log(`The number 0 is ${checkNumber(0)}`);
