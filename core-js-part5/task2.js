function logMessage(message) {
  console.log(message);
  clearTimeout(timeoutId);
}

const timeoutId = setTimeout(logMessage, 3000, "Hello");
