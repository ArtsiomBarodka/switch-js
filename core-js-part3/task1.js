function getMultipliedByTwoArray(arr) {
  return arr.map((val) => val * 2);
}

const array = [1, 2, 4, 6];
const multipliedArray = getMultipliedByTwoArray(array);

console.log(
  `The array [${array}] after multiplied by two is [${multipliedArray}]`
);
