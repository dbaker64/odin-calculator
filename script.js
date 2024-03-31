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

//functions for main operations
function add(operand1, operand2){
    return operand1 + operand2;
}

function subtract(operand1, operand2){
    return operand1 - operand2;
}

function multiply(operand1, operand2){
    return operand1 * operand2;
}

function divide(operand1, operand2){
    if(operand2 === 0){
        display.textContent = "l bozo";
        return "whaaat, you thought the console was gonna work???";
    }
    return operand1 / operand2;
}

//function operate, calls one of the operation functions based on what operation the user has passed
function operate(operand1, operation, operand2){
    if(operation === "+"){
        add(operand1, operand2);
    }else if(operation === "-"){
        subtract(operand1, operand2);
    }else if(operation === "X"){
        multiply(operand1, operand2);
    }else if(operation === "/"){
        divide(operand1, operand2);
    }else{
        alert("ERROR in operate function");
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

function clearDisplay() {
    display.textContent = "";
}