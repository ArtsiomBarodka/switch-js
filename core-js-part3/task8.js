function multiply(num1) {
  return function inner(num2) {
    return num1 * num2;
  };
}

const innerFunc1 = multiply(2);
const innerFunc2 = multiply(1);

console.log(innerFunc1(2));
console.log(innerFunc1(4));
console.log(innerFunc2(2));
console.log(innerFunc2(4));
