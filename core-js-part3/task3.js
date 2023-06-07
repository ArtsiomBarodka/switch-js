function getSortedStringsAscending(arr) {
  let copiedArray = [...arr];
  return copiedArray.sort((str1, str2) =>
    str1.localeCompare(str2, undefined, { sensitivity: "accent" })
  );
}

const nonSortedArray = ["Banana", "apple", "cherry", "date"];
const sortedArray = getSortedStringsAscending(nonSortedArray);

console.log(`Array [${nonSortedArray}] after asc sorting is [${sortedArray}]`);
