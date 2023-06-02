function getSortedStringsAscending(arr) {
  let copiedArray = [...arr];
  return copiedArray.sort();
}

const nonSortedArray = ["banana", "apple", "cherry", "date"];
const sortedArray = getSortedStringsAscending(nonSortedArray);

console.log(`Array [${nonSortedArray}] after asc sorting is [${sortedArray}]`);
