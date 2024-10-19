const input = document.getElementById('ip');
const output = document.getElementById('output');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const initialArray = [1, 2, 3, 4]; // Fixed array as per the task
  
  const promise1 = new Promise((resolve) => {
    // First promise resolves after 3 seconds with the initial array
    setTimeout(() => {
      resolve(initialArray);
    }, 3000);
  });

  promise1
    .then((arr) => {
      // After 1 second, filter out odd numbers
      return new Promise((resolve) => {
        setTimeout(() => {
          const evenNumbers = arr.filter(num => num % 2 === 0);
          output.textContent = `Even numbers: ${evenNumbers.join(', ')}`;
          resolve(evenNumbers);
        }, 1000);
      });
    })
    .then((evenNumbers) => {
      // After 2 seconds, multiply even numbers by 2
      return new Promise((resolve) => {
        setTimeout(() => {
          const doubledEvenNumbers = evenNumbers.map(num => num * 2);
          output.textContent = `Doubled even numbers: ${doubledEvenNumbers.join(', ')}`;
          resolve(doubledEvenNumbers);
        }, 2000);
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});
