const randomNum = () => Math.floor(Math.random() * 10) + 1;

function p() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const number = randomNumber();

      if (number <= 5) {
        resolve(number);
      } else {
        reject(
          new Error(`Random number is greater than 5; Number = ${number}`)
        );
      }
    }, 2000);
  });
}

async function process() {
  console.log("Async Processing number request");
  try {
    const number = await p();
    console.log("Correct number is received:", number);
  } catch (error) {
    console.log("Async Processing number request is failed: ", error.message);
  }
}

process();
