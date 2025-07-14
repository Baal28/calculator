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
let shouldResetDisplay = false;

// Step 3: Handle Numeric Key Clicks.

numericKeys.forEach(button => {
    button.addEventListener('click', () => {
        if(shouldResetDisplay === true ){
            currentNumber = '';
            shouldResetDisplay = false;
        }

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
    
});

// Step 4: Handle Operator Key Clicks.

operatorKeys.forEach(button => {
    button.addEventListener('click', () => {
        if(shouldResetDisplay){
            shouldResetDisplay = false;
        }

        const clickedOperator = button.textContent;
            operator = clickedOperator;
            leftOperand = currentNumber;
            currentNumber= '';
            display.textContent = `${leftOperand}${operator}`;
    });
});

// Step 5: Handle the Equals Key Click.

equalstoKey.addEventListener('click', () => {
    rightOperand = currentNumber;
    let lOperand = Number(leftOperand);
    let rOperand = Number(rightOperand);

    switch (operator) {
        case '+':
            let sum = lOperand + rOperand;
            result = sum;
            break;

        case '-':
            let sub = lOperand - rOperand;
            result = sub;
            break;

        case '*':
            let mult = lOperand * rOperand;
            result = mult;
            break;

        case '/':
            if(rOperand != 0){
                let div = lOperand / rOperand;
                result = div; 
            } else {
                result = NaN;
                display.textContent = 'You cannot divide by zero!'; 
            }    
            break;

        default:
            break;
    }

    if(!isNaN(result)){
        display.textContent = result;
    }

    currentNumber = result;
    leftOperand = result;
    operator = null;
    rightOperand = '';
    shouldResetDisplay = true;
});

// Step 6: Handle All Clear (AC) and Delete (DEL) Keys.

allClearKey.addEventListener('click', () => {
    currentNumber = '';
    leftOperand = '';
    operator = null;
    rightOperand = '';
    result = undefined;
    display.textContent = '0';
});

deleteKey.addEventListener('click', () =>{
    currentNumber = currentNumber.slice(0, -1);
    if(currentNumber === ''){
        display.textContent = '0'
    } else {
        display.textContent = currentNumber;
    }
    
});