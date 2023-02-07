// The four basic operations
function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(op, a, b){ //takes operator and two numbers
    switch(op){             // calls one of the above functions depending on operator
        case("+"):
            return add(a,b);
        case("-"):
            return subtract(a,b);
        case("*"):
            return multiply(a,b);
        case("/"):
            return divide(a,b);
        default:
            return "ERROR: INVALID OPERATOR";   // error if operator is not one of the four
    }
}

