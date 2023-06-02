function getCombinedArray(array1, array2) {
  return array1.concat(array2);
}

const array1 = [1, 2, 3, 10];
const array2 = [4, 5, 6, 8];
const combinedArray = getCombinedArray(array1, array2);

console.log(
  `Array 1 [${array1}] and Array 2 [${array2}] after combining [${combinedArray}]`
);
