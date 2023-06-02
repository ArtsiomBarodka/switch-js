let getSumOfNumbers = (...nums) => {
  if (nums.length === 0) {
    return 0;
  }
  return nums.reduce((sum, current) => sum + current, 0);
};

console.log(`Sum of 1,2,3,4 is ${getSumOfNumbers(1, 2, 3, 4)}`);
console.log(`Sum of nothing is ${getSumOfNumbers()}`);
