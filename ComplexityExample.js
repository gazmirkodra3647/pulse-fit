/*
Filename: ComplexityExample.js
Content: Complex and elaborate code example demonstrating various programming concepts and techniques.
*/

// Constants
const PI = 3.14159;
const MAX_ATTEMPTS = 10;

// Utility functions
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isPrime(num) {
  // Check if num is prime
  if (num <= 1) return false;
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

// Complex class definition
class Complex {
  constructor(real, imag) {
    // Initialize complex number
    this.real = real;
    this.imag = imag;
  }

  // Getters and setters
  get magnitude() {
    return Math.hypot(this.real, this.imag);
  }

  get conjugate() {
    return new Complex(this.real, -this.imag);
  }

  // Instance method
  toString() {
    return `${this.real} + ${this.imag}i`;
  }

  // Static method
  static multiply(a, b) {
    const real = a.real * b.real - a.imag * b.imag;
    const imag = a.real * b.imag + a.imag * b.real;
    return new Complex(real, imag);
  }
}

// Main function
function main() {
  console.log("ComplexityExample.js");

  // Generate 10 random numbers and check if they're prime
  for (let i = 1; i <= MAX_ATTEMPTS; i++) {
    const num = getRandomNumber(1, 100);
    console.log(`Number ${i}: ${num} is ${isPrime(num) ? 'prime' : 'not prime'}`);
  }

  // Use complex numbers
  const complex1 = new Complex(2, 3);
  const complex2 = new Complex(-1, 4);
  const product = Complex.multiply(complex1, complex2);

  console.log(`Complex number 1: ${complex1}`);
  console.log(`Complex number 2: ${complex2}`);
  console.log(`Product: ${product}`);
}

// Invoke main function
main();