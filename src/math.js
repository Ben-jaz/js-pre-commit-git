// math.js - Einfache Mathematikfunktionen

function sum(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      throw new Error('Division by zero is not allowed');
    }
    return a / b;
  }
  
  function factorial(n) {
    if (n < 0) {
      throw new Error('Factorial is not defined for negative numbers');
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  module.exports = { sum, subtract, multiply, divide, factorial };