function countFactorial(n) {
  if (n < 2) {
    return 1;
  }

  return n * countFactorial(n - 1);
}

console.log(`Factorial of 1 is ${countFactorial(1)}`);
console.log(`Factorial of 2 is ${countFactorial(2)}`);
console.log(`Factorial of 3 is ${countFactorial(3)}`);
console.log(`Factorial of 8 is ${countFactorial(8)}`);
console.log(`Factorial of 12 is ${countFactorial(12)}`);
console.log(`Factorial of 22 is ${countFactorial(22)}`);
