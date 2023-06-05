function getSumOfEvenArrayNumbers(array) {
  let sum = 0;
  for (item of array) {
    let number = Number(item);
    if (!Number.isNaN(number) && number % 2 === 0) {
      sum += number;
    }
  }
  return sum;
}

const array1 = [1, 2, "hello", 7];
const array2 = [1, 3, 4, 8, 12, 47];
const array3 = [1, 4, 0, 7];
const array4 = ["1", "2", 3, 4, "test", "6test"];

console.log(`Sum of array ${array1} is ${getSumOfEvenArrayNumbers(array1)}`);
console.log(`Sum of array ${array2} is ${getSumOfEvenArrayNumbers(array2)}`);
console.log(`Sum of array ${array3} is ${getSumOfEvenArrayNumbers(array3)}`);
console.log(`Sum of array ${array4} is ${getSumOfEvenArrayNumbers(array4)}`);
