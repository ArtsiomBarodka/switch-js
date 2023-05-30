function isObject(value) {
  return value !== null && !Array.isArray(value) && typeof value === "object";
}

console.log(`If '1' value is object: ${isObject(1)}`);
console.log(`If '24n' value is object: ${isObject(24n)}`);
console.log(`If 'true' value is object: ${isObject(true)}`);
console.log(`If 'undefined' value is object: ${isObject(undefined)}`);
console.log(`If 'null' value is object: ${isObject(null)}`);
console.log(`If 'Symbol()' value is object: ${isObject(Symbol())}`);
console.log(`If '{}' value is object: ${isObject({})}`);
console.log(`If '[]' value is object: ${isObject([])}`);
console.log(`If 'function () {}' value is object: ${isObject(function () {})}`);
console.log(`If 'Hello' value is object: ${isObject("Hello")}`);
