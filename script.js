window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
// Helper function to create a promise that resolves after a random time between 1 and 5 seconds
function getRandomTimePromise() {
  const randomTime = Math.floor(Math.random() * 5) + 1;
  return new Promise((resolve) => {
    setTimeout(() => resolve(randomTime), randomTime * 1000);
  });
}

// Create an array of promises
const promises = [
  getRandomTimePromise(),
  getRandomTimePromise(),
  getRandomTimePromise(),
  getRandomTimePromise(),
  getRandomTimePromise()
];

// Use Promise.any to wait for the first promise to resolve
Promise.any(promises)
  .then((result) => {
    // Print the result to the div with id "output"
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = `Resolved value: ${result}`;
  })
  .catch((error) => {
    // If all promises reject, handle the error here
    console.error(error);
  });
