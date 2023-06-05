function concatenate(val1, val2) {
  let str1 =
    typeof val1 === "object" && val1 !== null
      ? JSON.stringify(val1)
      : String(val1);
  let str2 =
    typeof val2 === "object" && val2 !== null
      ? JSON.stringify(val2)
      : String(val2);

  return str1 + str2;
}
console.log(
  `The result of the concatenation ('${"Hello"}' and '${"World"}') is ${concatenate(
    "Hello",
    "World"
  )}`
);

console.log(
  `The result of the concatenation (${"1"} and ${"2"}) is ${concatenate(1, 2)}`
);

console.log(
  `The result of the concatenation (${"null"} and ${"2"}) is ${concatenate(
    null,
    2
  )}`
);

console.log(
  `The result of the concatenation (${"null"} and ${"undefined"}) is ${concatenate(
    null,
    undefined
  )}`
);

console.log(
  `The result of the concatenation (${"{}"} and ${"[]"}) is ${concatenate(
    {},
    []
  )}`
);
