const calculatorOperation = document.querySelectorAll('.operation-buttons');
const calculatorNumber = document.querySelectorAll(".calculator-number");
const calValues = {
    firstNum    :   "0", 
    secondNum   :   "0",
    op          :   "",
    opIsClicked :   false,
    ans         :   0
}
const operatorBtn = (opButton) => {
    let button = opButton.target;
    switch (button.id) {
        case "+":
            calValues.op = "+";
            calValues.opIsClicked = true;
            console.log(calValues.op)
            console.log(calValues.opIsClicked)
            break;
        case "-":
            calValues.op = "-";
            calValues.opIsClicked = true;
            console.log(calValues.op)
            console.log(calValues.opIsClicked)
            break;
        case "*":
            calValues.op = "*"
            calValues.opIsClicked = true;
            console.log(calValues.op)
            console.log(calValues.opIsClicked)
            break;
        case "/":
            calValues.op = "/"
            calValues.opIsClicked = true;
            console.log(calValues.op)
            console.log(calValues.opIsClicked)
            break;
        case "=":
            calValues.op = "="
            calValues.opIsClicked = true;
            console.log(calValues.op)
            console.log(calValues.opIsClicked)
            break;
    };

};
calculatorOperation.forEach(button => button.addEventListener('click', operatorBtn));

const numHandler = (numButton) => {
    let numToChange = "firstNum"
    let button = numButton.target;
    calValues.opIsClicked ? numToChange = "secondNum" : null
    switch (button.id) {
        case "0":
            calValues[numToChange] === "0" ? calValues[numToChange] = "0" :
                calValues[numToChange] = calValues[numToChange] + "0"
                console.log(calValues[numToChange])
                break;  
        case "1":
            calValues[numToChange] === "0" ? calValues[numToChange] = "1" :
                calValues[numToChange] = calValues[numToChange] + "1"
                console.log(calValues[numToChange])
                break;
        case "2":
            calValues[numToChange] === "0" ? calValues[numToChange] = "2" :
                calValues[numToChange] = calValues[numToChange] + "2"
                console.log(calValues[numToChange])
                break;
        case "3":
            calValues[numToChange] === "0" ? calValues[numToChange] = "3" :
                calValues[numToChange] = calValues[numToChange] + "3"
                console.log(calValues[numToChange])           
                break;
        case "4":
            calValues[numToChange] === "0" ? calValues[numToChange] = "4" :
                calValues[numToChange] = calValues[numToChange] + "4"
                console.log(calValues[numToChange])
                break;
        case "5":
            calValues[numToChange] === "0" ? calValues[numToChange] = "5" :
                calValues[numToChange] = calValues[numToChange] + "5"
                console.log(calValues[numToChange])
                break;
        case "6":
            calValues[numToChange] === "0" ? calValues[numToChange] = "6" :
                calValues[numToChange] = calValues[numToChange] + "6"
                console.log(calValues[numToChange])
                break;
        case "7":
            calValues[numToChange] === "0" ? calValues[numToChange] = "7" :
                calValues[numToChange] = calValues[numToChange] + "7"
                console.log(calValues[numToChange])
                break;
        case "8":
            calValues[numToChange] === "0" ? calValues[numToChange] = "8" :
                calValues[numToChange] = calValues[numToChange] + "8"
                console.log(calValues[numToChange]);
                break;
        case "9":
            calValues[numToChange] === "0" ? calValues[numToChange] = "9" :
                calValues[numToChange] = calValues[numToChange] + "9"
                console.log(calValues[numToChange])
                break;
        case "decimal-point":
            calValues[numToChange].includes(".") ? null :
                calValues[numToChange] = calValues[numToChange] + "."
                console.log(calValues[numToChange])
                break;
    }; 
};

calculatorNumber.forEach(button => button.addEventListener('click', numHandler));  

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