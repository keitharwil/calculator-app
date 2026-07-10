const calculatorOperation = document.querySelectorAll('.operation-buttons');
const calculatorNumber = document.querySelectorAll(".calculator-number");
const calValues = {
    firstNum    :   "0", 
    secondNum   :   "0",
    op          :   "",
    equalIsClicked:  false,
    opIsClicked :   false,
    ans         :   0
}
const expo = (x, f) => {
  return Number.parseFloat(x).toExponential(f);
};
const operatorBtn = (opButton) => {
    let button = opButton.target;
    const operateButton = (buttonID) => {
        if (!calValues.opIsClicked){    
            calValues.op = buttonID;
            calValues.opIsClicked = true;
            console.log(calValues.op);
            console.log(calValues.opIsClicked);
        } else if (buttonID === "=") {
            operate(calValues.firstNum, calValues.secondNum, calValues.op);
            calValues.firstNum = calValues.ans.toString();
            console.log(calValues.ans.toString().length > 10 ? expo(calValues.ans, 5): calValues.ans);
        } else {
            operate(calValues.firstNum, calValues.secondNum, calValues.op);
            calValues.firstNum = calValues.ans.toString();
            calValues.secondNum = "0";
            calValues.op = buttonID; 
            console.log(calValues.ans.toString().length > 10 ? expo(calValues.ans, 5): calValues.ans);
        };
    }
    switch (button.id) {
        case "+":
            operateButton(button.id);
            break;
        case "-":
            operateButton(button.id);
            break;
        case "*":
            operateButton(button.id);
            break;
        case "/":
            operateButton(button.id);
            break;
        case "=":
            operateButton(button.id);
            break;
    };
};
calculatorOperation.forEach(button => button.addEventListener('click', operatorBtn));
const numHandler = (numButton) => {
    let numToChange = "firstNum"
    let button = numButton.target;
    calValues.opIsClicked ? numToChange = "secondNum" : null
    const numberButton = (buttonID) => {
        calValues[numToChange] === "0" ? calValues[numToChange] = `${buttonID}` :
                calValues[numToChange] === "-0" ? calValues[numToChange] = `-${buttonID}`:
                    calValues[numToChange] = calValues[numToChange] + `${buttonID}`
                    console.log(calValues[numToChange])
    };
    switch (button.id) {
        case "0":
            calValues[numToChange] === "0" ? calValues[numToChange] = "0" :
                calValues[numToChange] = calValues[numToChange] + "0"
                console.log(calValues[numToChange])
                break;  
        case "1":
            numberButton(button.id);
            break;
        case "2":
            numberButton(button.id);
            break;
        case "3":
            numberButton(button.id);
            break;
        case "4":
            numberButton(button.id);
            break;
        case "5":
            numberButton(button.id);
            break;
        case "6":
            numberButton(button.id);
            break;
        case "7":
            numberButton(button.id);
            break;
        case "8":
            numberButton(button.id);
            break;
        case "9":
            numberButton(button.id);
            break;
        case "decimal-point":
            calValues[numToChange].includes(".") ? null :
                calValues[numToChange] = calValues[numToChange] + "."
                console.log(calValues[numToChange])
                break;
        case "sign":
            !calValues[numToChange].includes("-") ? calValues[numToChange] = `-${calValues[numToChange]}`: 
            calValues[numToChange].includes("-") ? calValues[numToChange] = calValues[numToChange].replace("-", ""): 
            console.log("ERROR")
            console.log(calValues[numToChange]);
    }; 
};
calculatorNumber.forEach(button => button.addEventListener('click', numHandler));  
const operate = (a, b, operator) => {
    const firstNum = !a.includes(".")  ?  parseInt(a)  :  parseFloat(a);
    const secondNum = !b.includes(".") ? parseInt(b) : parseFloat(b);
    const add = (a, b) => {
        calValues.ans = a + b
    };
    const subtract = (a, b) => {
        calValues.ans = a - b
    };
    const multiply = (a, b) => {
        calValues.ans = a * b
    };
    const divide = (a, b) => {
        calValues.ans = a / b
    };
    switch (operator) {
        case '+':
            add(firstNum,secondNum);
            break;
        case '-':
            subtract(firstNum,secondNum);
            break;
        case '*':
            multiply(firstNum,secondNum);
            break;
        case '/':
            divide(firstNum,secondNum);
            break;
        default:
            "Invalid operation"
    };
};