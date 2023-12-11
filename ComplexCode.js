/*
Filename: ComplexCode.js
Description: Sophisticated and elaborate JavaScript code showcasing various functionalities and techniques.
*/

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Function to reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Generate Fibonacci sequence
function generateFibonacci(limit) {
  const fibonacci = [0, 1];
  let i = 2;
  
  while (fibonacci[i - 1] + fibonacci[i - 2] <= limit) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    i++;
  }
  
  return fibonacci;
}

// Example usage of functions and classes
const number = 37;
console.log(`${number} is${isPrime(number) ? '' : ' not'} a prime number.`);

const john = new Person('John', 30);
john.greet();

const string = 'Hello, World!';
console.log(`Reversed string: ${reverseString(string)}`);

const fibonacciSequence = generateFibonacci(1000);
console.log('Fibonacci Sequence:', fibonacciSequence);  // Fibonacci sequence up to the limit of 1000

// More code...
// ...
// ... (200 more lines)