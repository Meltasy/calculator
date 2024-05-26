// Pseudocode

// #1 Initialize the state of the application: current number = 0; current result = 0
// #2 Create the current number with the operand buttons pressed by user
// #3 When operator button is pressed, update current result with current number
// #4 Store the value of the operator
// #5 Repeat #2
// #6 When equals button is pressed, calculate using stored information and update current result

// First Iteration

// let currentNumber = 0;
// let currentResult = 0;
// let currentOperator = "";

// const allOperands = document.querySelectorAll("#operand");
// const allOperators = document.querySelectorAll("#operator");

// let displayDiv = document.getElementById("display");

// function showInDisplay(number) {
//     displayDiv.textContent = number;
// }

// allOperands.forEach(operand => {
//     operand.addEventListener("click", (e) => {
//         currentNumber = 10 * currentNumber + parseInt(e.target.value);
//         console.log(currentNumber);
//         showInDisplay(currentNumber);
//     });
// });

// allOperators.forEach(operator => {
//     operator.addEventListener("click", (e) => {
//         console.log(e.target.value);
//         currentOperator = e.target.value;
//         currentResult = currentNumber;
//         currentNumber = 0;
//     });
// });

// function operate(num1, num2, operator) {
//     switch(operator) {
//         case "+":
//             result = num1 + num2;
//             break;
//         case "-":
//             result = num1 - num2;
//             break;
//         case "*":
//             result = num1 * num2;
//             break;
//         case "/":
//             result = num1 / num2;
//             break;
//     }
//     console.log(result);
//     return result;
// }

// let equalBtn = document.getElementById("equals");

// equalBtn.addEventListener("click", (e) => {
//     currentResult = operate(currentResult, currentNumber, currentOperator);
//     console.log(currentResult);
//     showInDisplay(currentResult);
//     currentNumber = currentResult;
// });

// let clearAllBtn = document.getElementById("clearAll");

// clearAllBtn.addEventListener("click", (e) => {
//     currentNumber = 0;
//     currentResult = 0;
//     currentOperator = "";
//     console.log(currentResult);
//     showInDisplay(currentResult);
// });

// let clearEntryBtn = document.getElementById("clearEntry");

// clearEntryBtn.addEventListener("click", (e) => {
//     currentNumber = 0;
//     showInDisplay();
// });

// Second Iteration

// const allOperands = document.querySelectorAll("#operand");
// const allOperators = document.querySelectorAll("#operator");

// let equalBtn = document.querySelector("#equals");
// let decimalBtn = document.querySelector("#decimal");
// let percentageBtn = document.querySelector("#percentage");
// let positiveNegative = document.querySelector("#positiveNegative");
// let clearAllBtn = document.querySelector("#clearAll");
// let clearEntryBtn = document.querySelector("#clearEntry");

// let displayDiv = document.querySelector("#display");

// let currentNumber = null;
// let currentResult = null;
// let currentOperator = null;
// let decimalPlace = 0;
// let sum = 0;
// displayDiv.textContent = 0;

// function updateDisplay(number) {
//     displayDiv.textContent = number;
// }

// function add(num1, num2) {
//     sum = num1 + num2;
//     reset();
//     return sum;
// }

// function subtract(num1, num2) {
//     sum = num1 - num2;
//     reset();
//     return sum;
// }

// function multiply(num1, num2) {
//     sum = num1 * num2;
//     reset();
//     return sum;
// }

// function divide(num1, num2) {
//     if (num2 === 0) {
//         alert("You can't divide by 0!");
//         reset();
//     } else {
//         sum = num1 / num2;
//         reset();
//         return sum;
//     }
// }

// function reset() {
//     num1 = null;
//     num2 = null;
//     currentOperator = null;    
// }

// function operate(num1, num2, operator) {
//     switch(operator) {
//         case "+":
//             return add(num1, num2);
//         case "-":
//             return subtract(num1, num2);
//         case "*":
//             return multiply(num1, num2);
//         case "/":
//             return divide(num1, num2);
//     }
// }

// function getOperand(e) {
//     if (currentNumber > 10 ** (8 - decimalPlace)) {
//         return;
//     }
//     if (decimalPlace === 0) {
//         currentNumber = 10 * currentNumber + parseInt(e.target.value);
//     } else {
//         currentNumber = parseInt(e.target.value) / 10 ** decimalPlace + currentNumber;
//         decimalPlace++;
//     }
//     console.log(currentNumber);
//     updateDisplay(currentNumber);
// }

// allOperands.forEach(operand => {
//     operand.addEventListener("click", getOperand);
// });

// function getOperator(e) {
//     console.log(e.target.value);
//     currentOperator = e.target.value;
//     currentResult = currentNumber;
//     currentNumber = 0;
//     decimalPlace = 0;
// }

// allOperators.forEach(operator => {
//     operator.addEventListener("click", getOperator);
// });

// equalBtn.addEventListener("click", (e) => {
//     currentResult = operate(currentResult, currentNumber, currentOperator);
//     console.log(currentResult);
//     updateDisplay(currentResult);
//     currentnumber = currentResult;
//     decimalPlace = 0;
// });

// decimalBtn.addEventListener("click", (e) => {
//     if (decimalPlace === 0) {
//         decimalPlace++;
//     }
// });

// // percentageBtn.addEventListener("click", (e) => {

// // });

// // positiveNegativeBtn.addEventListener("click", (e) => {

// // });

// clearAllBtn.addEventListener("click", (e) => {
//     currentNumber = 0;
//     currentResult = 0;
//     currentOperator = "";
//     console.log(currentResult);
//     updateDisplay(currentResult);
// });

// clearEntryBtn.addEventListener("click", (e) => {
//     currentNumber = 0;
//     updateDisplay();
// });

// Third iteration

const allOperands = document.querySelectorAll("#operand");
const allOperators = document.querySelectorAll("#operator");

let equalBtn = document.querySelector("#equals");
let decimalBtn = document.querySelector("#decimal");
let positiveNegativeBtn = document.querySelector("#positiveNegative");
let clearAllBtn = document.querySelector("#clearAll");
let clearEntryBtn = document.querySelector("#clearEntry");

let displayDiv = document.querySelector("#display");

let currentNumber = 0;
let currentResult = 0;
let currentOperator = "+";
let decimalPlace = 0;
let sum = 0;
displayDiv.textContent = 0;
let errorMsg = "";

allOperands.forEach(operand => {
    operand.addEventListener("click", getOperand);
});

allOperators.forEach(operator => {
    operator.addEventListener("click", getOperator);
});

function updateDisplay(number) {
    displayDiv.textContent = number;
}

function operate(num1, num2, operator) {
    if (operator === "/" && num2 === 0) {
        errorMsg = "You can't divide by 0!";
        return num1;
    }
    if (operator === "+") {
        sum = num1 + num2;
    } else if (operator === "-") {
        sum = num1 - num2;
    } else if (operator === "*") {
        sum = num1 * num2;
    } else if (operator === "/") {
        sum = num1 / num2;
    } else if (operator === "percentage") {
        sum = (num1 / 100) * num2;
    }
    updateDisplay(sum);
    return +(sum.toPrecision(8));
}

function getTotal() {
    currentResult = operate(currentResult, currentNumber, currentOperator);
    if (errorMsg != "") {
        updateDisplay(errorMsg);
        errorMsg = "";
    } else {
        console.log(currentResult);
        updateDisplay(currentResult);
        currentNumber = 0;
        decimalPlace = 0;
    }
}

function getOperand(e) {
    if (currentNumber > 10 ** (8 - decimalPlace)) {
        return;
    }
    if (decimalPlace === 0) {
        currentNumber = 10 * currentNumber + parseInt(e.target.value);
    } else {
        currentNumber = parseInt(e.target.value) / 10 ** decimalPlace + currentNumber;
        decimalPlace++;
    }
    console.log(currentNumber);
    updateDisplay(currentNumber);
}

function getOperator(e) {
    getTotal();
    console.log(e.target.value);
    currentOperator = e.target.value;
    currentNumber = 0;
    decimalPlace = 0;
}

equalBtn.addEventListener("click", (e) => {
    getTotal();
    currentOperator = "+";
});

decimalBtn.addEventListener("click", (e) => {
    if (decimalPlace === 0) {
        decimalPlace++;
    }
});

positiveNegativeBtn.addEventListener("click", (e) => {
    currentNumber = currentNumber * -1;
    updateDisplay(currentNumber);
});

clearAllBtn.addEventListener("click", (e) => {
    currentNumber = 0;
    currentResult = 0;
    currentOperator = "+";
    console.log(currentResult);
    updateDisplay(currentResult);
});

clearEntryBtn.addEventListener("click", (e) => {
    currentNumber = 0;
    updateDisplay();
});