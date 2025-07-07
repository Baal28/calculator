// Step 1: Get References to Key HTML Elements.
const display = document.querySelector('.display');
const allClearKey = document.querySelector('#allClearKey');
const deleteKey = document.querySelector('#deleteKey');
const numericKeys = document.querySelectorAll('.numericKeys');
const operatorKeys = document.querySelectorAll('.operatorKeys');
const decimalPointKey = document.querySelector('#decimalPointKey');
const equalstoKey = document.querySelector('#equalstoKey');

// Step 2: Initialize Calculator State Variables.

let currentNumber = '';
let leftOperand = '';
let operator = null;
let rightOperand = '';
let result;

// Step 3: Handle Numeric Key Clicks.

numericKeys.forEach(button => {
    button.addEventListener('click', () => {
        const clickedDigit = button.textContent;
        
        if(clickedDigit === '0'){
            if(currentNumber === '0'){
                return;
            }
            currentNumber = currentNumber + clickedDigit;

        } else {
            if(currentNumber === '0'){
                currentNumber = clickedDigit;
            } else {
                currentNumber = currentNumber + clickedDigit;
            }
          
        }
        display.textContent = currentNumber;
    });
});

decimalPointKey.addEventListener('click', () => {
    if (currentNumber.includes('.')) {
        
    } else {
      currentNumber = currentNumber + decimalPointKey.textContent;
      display.textContent = currentNumber;  
    }
    
})

