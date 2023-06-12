const logger = console.log;

const intervalId = setInterval(logger, 1000, "Hello from Interval");

setTimeout(() => {
  clearInterval(intervalId);
}, 4000);
