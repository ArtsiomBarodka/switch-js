function isPrimitive(value) {
  return (
    value === null ||
    typeof value === "undefined" ||
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "bigint" ||
    typeof value === "boolean" ||
    typeof value === "symbol"
  );
}

console.log(`If '1' value is primitive: ${isPrimitive(1)}`);
console.log(`If '24n' value is primitive: ${isPrimitive(24n)}`);
console.log(`If 'true' value is primitive: ${isPrimitive(true)}`);
console.log(`If 'undefined' value is primitive: ${isPrimitive(undefined)}`);
console.log(`If 'null' value is primitive: ${isPrimitive(null)}`);
console.log(`If 'Symbol()' value is primitive: ${isPrimitive(Symbol())}`);
console.log(`If '{}' value is primitive: ${isPrimitive({})}`);
console.log(`If 'Hello' value is primitive: ${isPrimitive("Hello")}`);
