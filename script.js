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

let x = 0, y = 0, fn;
let xInput = false;
let yInput = false;
let state = 0;
let nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8" ,"9"];
let ops = ["+", "-", "/", "*"];
screen = document.getElementById("screen");


function buffer(btn){
    let input = btn.innerText;
    if(nums.includes(input)){
        if(state === 2){
            state = 0;
            x = 0;
        }
        if(state === 0){
            x = x * 10 + +input;
            screen.innerText = x;
            xInput = true;
        } else {
            y = y * 10 + +input;
            screen.innerText = y;
            yInput = true;
        }
    } else if(ops.includes(input)){
        if(xInput && !yInput){
            fn = input;
            state = 1;
        } else if(yInput){
            x = operate(fn, x, y)
            x = rnd(x);
            screen.innerText = x;
            yInput = false;
            y = 0;
            state = 1;
            fn = input;
        }
    } else if(input === "="){
        if(!yInput){
            screen.innerText = "ERROR: INVALID INPUT";
        }else if(fn === "/" && y === 0){
            screen.innerText = "ERROR: DIVIDE BY ZERO";
            x = 0;
            y = 0;
            xInput = false;
            yInput = false;
            state = 0;
        } else {
            x = operate(fn, x, y);
            x = rnd(x);
            screen.innerText = x;
            y = 0;
            yInput = false;
            state = 2; //special state where either uses answer or writes new operation
        }
        
    }
    if(input === "Clear") {
        x = 0;
        y = 0;
        xInput = false;
        yInput = false;
        state = 0;
        screen.innerText = "";
    }
    
}

function rnd(dec){
    return Math.round(dec*1000000)/1000000;
}

buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", function(){
        buffer(button);
    });
});
