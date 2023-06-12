const randomNumber = () => Math.floor(Math.random() * 10) + 1;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const number = randomNumber();

    if (number <= 5) {
      resolve(number);
    } else {
      reject(new Error(`Random number is greater than 5; Number = ${number}`));
    }
  }, 2000);
});

promise
  .then((result) => {
    console.log("Promise fulfilled:", result);
  })
  .catch((error) => {
    console.log("Promise rejected:", error.message);
  });
