//var declaration
let operand1; //stores first operand the user enters
let operation; //stores operation the user enters
let operand2; //stores second operand the user enters
let display = document.querySelector("#display");
let num0 = document.querySelector("#num0");
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let num3 = document.querySelector("#num3");
let num4 = document.querySelector("#num4");
let num5 = document.querySelector("#num5");
let num6 = document.querySelector("#num6");
let num7 = document.querySelector("#num7");
let num8 = document.querySelector("#num8");
let num9 = document.querySelector("#num9");
let clearButton = document.querySelector("#AC");
let equalsButton = document.querySelector("#equal-sign");
let plusButton = document.querySelector("#plus");
let minusButton = document.querySelector("#minus");
let timesButton = document.querySelector("#times");
let divideButton = document.querySelector("#divide");

//EVENT LISTENERS
//num buttons
num0.addEventListener("click", function() {
    displayUpdateNumber(0);
});
num1.addEventListener("click", function() {
    displayUpdateNumber(1);
});
num2.addEventListener("click", function() {
    displayUpdateNumber(2);
});
num3.addEventListener("click", function() {
    displayUpdateNumber(3);
});
num4.addEventListener("click", function() {
    displayUpdateNumber(4);
});
num5.addEventListener("click", function() {
    displayUpdateNumber(5);
});
num6.addEventListener("click", function() {
    displayUpdateNumber(6);
});
num7.addEventListener("click", function() {
    displayUpdateNumber(7);
});
num8.addEventListener("click", function() {
    displayUpdateNumber(8);
});
num9.addEventListener("click", function() {
    displayUpdateNumber(9);
});

//other buttons
clearButton.addEventListener("click", function() {
    clearDisplay();
});
equalsButton.addEventListener("click", function() {
    equal();
})
plusButton.addEventListener("click", function() {
    displayUpdateOperator("+");
})
minusButton.addEventListener("click", function() {
    displayUpdateOperator("-");
})
timesButton.addEventListener("click", function() {
    displayUpdateOperator("X");
})
divideButton.addEventListener("click", function() {
    displayUpdateOperator("/");
})

//GETTING INPUT FROM DISPLAY
function equal() {
    console.log("equals function ran");
    let result;
    let args = display.textContent.trim().split(" ");
    console.table(args)
    while(args.length !== 0){
        console.log("while loop ran");
        operand1 = args[0];
        operator = args[1];
        operand2 = args[2];
        operand1 = Number(operand1);
        operand2 = Number(operand2);
        console.log(`${operand1} ${operator} ${operand2}`);
        result = operate(operand1, operator, operand2);
        args.shift();
        args.shift();
        args.shift();
    }
    console.log(result);
    updateDisplay(result);
}

//functions for main operations
function add(operand1, operand2){
    console.log("add");
    return operand1 + operand2;
}

function subtract(operand1, operand2){
    console.log("subtract");
    return operand1 - operand2;
}

function multiply(operand1, operand2){
    console.log("multiply");
    return operand1 * operand2;
}

function divide(operand1, operand2){
    if(operand2 === 0){
        display.textContent = "l bozo";
        return "whaaat, you thought the console was gonna work???";
    }
    console.log("divide");
    return operand1 / operand2;
}

//function operate, calls one of the operation functions based on what operation the user has passed
function operate(op1, operation, op2){
    if(operation === "+"){
        return add(op1, op2);
    }else if(operation === "-"){
        return subtract(op1, op2);
    }else if(operation === "X"){
        return multiply(op1, op2);
    }else if(operation === "/"){
        return divide(op1, op2);
    }else{
        alert(`ERROR in operate function with ${operand1},${operation},${operand2}`);
    }
}

//functions to update the display
function displayUpdateNumber(number){
    if(display.textContent === "Use me!"){
        display.textContent = number;
    }else{
        display.textContent += number;
    }
}

function displayUpdateOperator(operator){
    display.textContent += " "+operator+" ";
}

function clearDisplay() {
    display.textContent = "";
    operand1 = null;
    operand2 = null;
    operation = null;
}

function updateDisplay(value) {
    display.textContent = value;
}