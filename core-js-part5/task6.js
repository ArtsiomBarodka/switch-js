class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateInput(input) {
  if (!input) {
    throw new ValidationError("Input cannot be empty.");
  }
}

function logMessageSafety(message) {
  try {
    validateInput(message);
    console.log(message);
  } catch (e) {
    console.log(e.message);
  }
}

logMessageSafety();
logMessageSafety(null);
logMessageSafety("Hello world");
