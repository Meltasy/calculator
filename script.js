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

document.addEventListener("keydown", (event) => {
    console.log(event);
    const operands = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const operators = ["+", "-", "*", "/", "%"]
    if (operands.includes(event.key)) {
        getOperand(event.key);
    } else if (operators.includes(event.key)) {
        getOperator(event.key);
    } else if (event.key === "=" || event.key === "Enter") {
        equals();
    } else if (event.key === ".") {
        decimal();
    } else if (event.key === "Delete") {
        clearAll();
    } else if (event.key === "Backspace") {
        clearEntry();
    }
});

allOperands.forEach(operand => {
    operand.addEventListener("click", (e) => getOperand(e.target.value));
});

allOperators.forEach(operator => {
    operator.addEventListener("click", (e) => getOperator(e.target.value));
});

equalBtn.addEventListener("click", (e) => {
    equals();
});

decimalBtn.addEventListener("click", (e) => {
    decimal();
});

clearAllBtn.addEventListener("click", (e) => {
    clearAll();
});

clearEntryBtn.addEventListener("click", (e) => {
    clearEntry();
});

positiveNegativeBtn.addEventListener("click", (e) => {
    currentNumber = currentNumber * -1;
    updateDisplay(currentNumber);
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
    return Number(sum.toPrecision(8));
}

function getTotal() {
    currentResult = operate(currentResult, currentNumber, currentOperator);
    if (errorMsg != "") {
        updateDisplay(errorMsg);
        errorMsg = "";
    } else {
        updateDisplay(currentResult);
        currentNumber = 0;
        decimalPlace = 0;
    }
}

function getOperand(value) {
    if (currentNumber > 10 ** (8 - decimalPlace)) {
        return;
    }
    if (decimalPlace === 0) {
        currentNumber = 10 * currentNumber + parseInt(value);
    } else {
        currentNumber = parseInt(value) / 10 ** decimalPlace + currentNumber;
        decimalPlace++;
    }
    updateDisplay(currentNumber);
}

function getOperator(value) {
    getTotal();
    currentOperator = value;
    currentNumber = 0;
    decimalPlace = 0;
}

function equals() {
    getTotal();
    currentOperator = "+";
}

function decimal() {
    if (decimalPlace === 0) {
        decimalPlace++;
    }
}

function clearAll() {
    currentNumber = 0;
    currentResult = 0;
    currentOperator = "+";
    updateDisplay(currentResult);
}

function clearEntry() {
    currentNumber = 0;
    updateDisplay();
}