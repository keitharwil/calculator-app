const calculatorOperation = document.querySelectorAll('.operation-buttons');
const calculatorNumber = document.querySelectorAll(".calculator-number")

let firstNum = "";
let secondNum = "";
let ans = 0;
let op = "";

const operatorBtn = (opButton) => {
    let button = opButton.target;
    switch (button.id) {
        case "+":
            op = "+";
            console.log(op)
            break;
        case "-":
            op = "-";
            console.log(op)
            break;
        case "*":
            op = "*"
            console.log(op)
            break;
        case "/":
            op = "/"
            console.log(op)
            break;
        case "=":
            op = "="
            console.log(op)
            break;
    };
};

calculatorOperation.forEach(button => button.addEventListener('click', operatorBtn));

const firstNumHandler = (numButton) => {
    firstNum.length > 0 && firstNum[0] === "0" ? firstNum = "" : null;
    let button = numButton.target;
    switch (button.id) {
        case "0":
            firstNum = firstNum + "0"
            console.log(firstNum)
            break;
        case "1":
            firstNum = firstNum + "1"
            console.log(firstNum)
            break;
        case "2":
            firstNum = firstNum + "2"
            console.log(firstNum)
            break;
        case "3":
            firstNum = firstNum + "3"
            console.log(firstNum)           
            break;
        case "4":
            firstNum = firstNum + "4"
            console.log(firstNum)
            break;
        case "5":
            firstNum = firstNum + "5"
            console.log(firstNum)
            break;
        case "6":
            firstNum = firstNum + "6"
            console.log(firstNum)
            break;
        case "7":
            firstNum = firstNum + "7"
            console.log(firstNum)
            break;
        case "8":
            firstNum = firstNum + "8"
            console.log(firstNum);
            break;
        case "9":
            firstNum = firstNum + "9"
            console.log(firstNum)
            break;
    };
};

calculatorNumber.forEach(button => button.addEventListener('click', firstNumHandler));


const operate = (a, b, operator) => {
    const add = (a, b) => {
        return a + b
    };

    const subtract = (a, b) => {
        return a - b
    };

    const multiply = (a, b) => {
        return a * b
    };

    const divide = (a, b) => {
        return a / b
    };
    switch (operator) {
        case '+':
            console.log(add(a,b));
            break;
        case '-':
            console.log(subtract(a,b));
            break;
        case '*':
            console.log(multiply(a,b));
            break;
        case '/':
            console.log(divide(a,b));
            break;
        default:
            "Invalid operation"
    };
    
};

