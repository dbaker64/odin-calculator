//var declaration
let operand1; //stores first operand the user enters
let operation; //stores operation the user enters
let operand2; //stores second operand the user enters

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
        alert("CANNOT DIVIDE BY 0. RELOAD AND TRY AGAIN");
        return;
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