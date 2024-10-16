let number1 = null, number2 = null, operator = null;
let operatorClicked = false;

const numbers = document.querySelectorAll(".number-button");
numbers.forEach((button) => {
    button.addEventListener("click", updateDisplay);
});

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
    operator.addEventListener("click", operatorClick)
});

const equals = document.querySelector(".equals");
equals.addEventListener("click", equalsClick);

const clear = document.querySelector(".clear");
clear.addEventListener("click", clearClick);

function clearClick(event){
    const display = document.querySelector(".display");
    display.textContent = "";
    number1 = null;
    number2 = null;
    operatorClicked = false;
}

function updateDisplay(event){
    const text = event.target.textContent;
    const display = document.querySelector(".display");
    
    if(!operatorClicked){
        display.textContent += text;      
    } else {
        display.textContent = text;
        operatorClicked = false;
    }
}

function equalsClick(event){
    if(number1 === null || operator === null){
        return;
    }

    const display = document.querySelector(".display");
    number2 = display.textContent;
    display.textContent = operate(Number(number1), Number(number2), operator);
    number1 = null;
    number2 = null;
}

function operatorClick(event){
    operatorClicked = true;
    const display = document.querySelector(".display");
    if(number1 === null){
        number1 = display.textContent;
        operator = event.target.textContent;
    } else {
        number2 = display.textContent;
        number1 = operate(Number(number1), Number(number2), operator);
        display.textContent = number1;
        operator = event.target.textContent;
    }
}

function operate(a, b, op){
    switch(op){
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return "error";
    }
}

function add(a,b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(b === 0){
        return "You think you're pretty smart eh?";
    }
    return a / b;
}