let number1 = null, number2 = null, operator = null;
let operatorClicked = false;
const maxCharacters = 22;

const numbers = document.querySelectorAll(".number-button");
numbers.forEach((button) => {
    button.addEventListener("click", updateDisplayEvent);
});

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
    operator.addEventListener("click", operatorClick)
});

const equals = document.querySelector(".equals");
equals.addEventListener("click", equalsClick);

const clear = document.querySelector(".clear");
clear.addEventListener("click", clearClick);

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", decimalClick);

const backspace = document.querySelector(".backspace");
backspace.addEventListener("click", backspaceClick);

function backspaceClick(event){
    const display = document.querySelector(".display");
    if(!operatorClicked){
        display.textContent = display.textContent.substring(0, display.textContent.length-1);
    }
}

document.onkeydown = function(event){
    switch(event.key){
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            updateDisplay(event.key);
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            operatorEvent(event.key);
            break;
        case ".":
            decimalClick();
            break;
        case "=":
        case "Enter":
            equalsClick();
            break;
        case "Backspace":
            backspaceClick();
        default:
            break;
    }
}

function clearClick(){
    const display = document.querySelector(".display");
    display.textContent = "";
    number1 = null;
    number2 = null;
    operatorClicked = false;
}

function decimalClick(){

    const display = document.querySelector(".display");
    if(display.textContent.length === maxCharacters || display.textContent === "" || operatorClicked || display.textContent.includes(".")){
        return;
    }
    display.textContent += ".";
}

function updateDisplayEvent(event){
    const text = event.target.textContent;
    updateDisplay(text);
}

function updateDisplay(text){
    const display = document.querySelector(".display");

    
    if(!operatorClicked){
        if(display.textContent.length === maxCharacters){
            return;
        }
        display.textContent += text;      
    } else {
        display.textContent = text;
        operatorClicked = false;
    }
}

function equalsClick(){
    const display = document.querySelector(".display");
    if(display.textContent.endsWith(".")){
        return;
    }
    if(number1 === null || operator === null){
        return;
    }

    number2 = display.textContent;
    display.textContent = operate(Number(number1), Number(number2), operator);
    number1 = null;
    number2 = null;
    operatorClicked = true;
}

function operatorEvent(text){
    const display = document.querySelector(".display");
    if(display.textContent.endsWith(".")){
        return;
    }
    operatorClicked = true;
    
    if(number1 === null){
        number1 = display.textContent;
        operator = text;
    } else {
        number2 = display.textContent;
        number1 = operate(Number(number1), Number(number2), operator);
        display.textContent = number1;
        operator = text;
    }
}

function operatorClick(event){
    operatorEvent(event.target.textContent);
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