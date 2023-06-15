function logMessage(message) {
  console.log(message);
}

const timeoutId = setTimeout(logMessage, 3000, "Hello");
console.log(`Added timeout with id = ${timeoutId}`);

clearTimeout(timeoutId);
console.log(`Removed timeout with id = ${timeoutId}`);
