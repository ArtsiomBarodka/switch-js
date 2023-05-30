function getSumOfEvenArrayNumbers(array) {
  let sum = 0;
  for (item of array) {
    if (typeof item === "number" && item % 2 === 0) {
      sum += item;
    }
  }
  return sum;
}

const array1 = [1, 2, "hello", 7];
const array2 = [1, 3, 4, 8, 12, 47];
const array3 = [1, 4, 0, 7];

console.log(`Sum of array ${array1} is ${getSumOfEvenArrayNumbers(array1)}`);
console.log(`Sum of array ${array2} is ${getSumOfEvenArrayNumbers(array2)}`);
console.log(`Sum of array ${array3} is ${getSumOfEvenArrayNumbers(array3)}`);
