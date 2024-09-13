const buttons = document.querySelectorAll(".number-button");
buttons.forEach((button) => {
    button.addEventListener("click", updateDisplay);
});

function updateDisplay(event){
    const text = event.target.textContent;
    const display = document.querySelector(".display");
    display.textContent += text;
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