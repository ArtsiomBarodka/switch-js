function isString(value) {
  return typeof value === "string";
}

console.log(`If '1' value is string: ${isString(1)}`);
console.log(`If '24n' value is string: ${isString(24n)}`);
console.log(`If 'true' value is string: ${isString(true)}`);
console.log(`If 'undefined' value is string: ${isString(undefined)}`);
console.log(`If 'null' value is string: ${isString(null)}`);
console.log(`If 'Symbol()' value is string: ${isString(Symbol())}`);
console.log(`If '{}' value is string: ${isString({})}`);
console.log(`If 'Hello' value is string: ${isString("Hello")}`);
