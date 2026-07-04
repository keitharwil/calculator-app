const calculatorOperation = document.querySelectorAll('.operation-buttons');
const calculatorNumber = document.querySelectorAll(".calculator-number")
const calValues = {
    firstNum    :   "0", 
    secondNum   :   "0",
    op          :   "",
    opIsClicked :   false,
    ans         :   0
}

const opHandler = (isOpClicked) => {
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
};

const numberHandler = (isOpClicked) => {
        const firstNumHandler = (numButton) => {
        let button = numButton.target;
        // calValues.firstNum.length > 0 && calValues.firstNum[0] === "0" && calValues.firstNum.includes(".") ? calValues.firstNum = "" : null;
        switch (button.id) {
            case "0":
                calValues.firstNum = calValues.firstNum + "0"
                console.log(calValues.firstNum)
                break;
            case "1":
                calValues.firstNum = calValues.firstNum + "1"
                console.log(calValues.firstNum)
                break;
            case "2":
                calValues.firstNum = calValues.firstNum + "2"
                console.log(calValues.firstNum)
                break;
            case "3":
                calValues.firstNum = calValues.firstNum + "3"
                console.log(calValues.firstNum)           
                break;
            case "4":
                calValues.firstNum = calValues.firstNum + "4"
                console.log(calValues.firstNum)
                break;
            case "5":
                calValues.firstNum = calValues.firstNum + "5"
                console.log(calValues.firstNum)
                break;
            case "6":
                calValues.firstNum = calValues.firstNum + "6"
                console.log(calValues.firstNum)
                break;
            case "7":
                calValues.firstNum = calValues.firstNum + "7"
                console.log(calValues.firstNum)
                break;
            case "8":
                calValues.firstNum = calValues.firstNum + "8"
                console.log(calValues.firstNum);
                break;
            case "9":
                calValues.firstNum = calValues.firstNum + "9"
                console.log(calValues.firstNum)
                break;
            case "decimal-point":
                if (!calValues.firstNum.includes(".")) {
                calValues.firstNum = calValues.firstNum + "."
                console.log(calValues.firstNum)
                break;
                }
        }; 
    };

    calculatorNumber.forEach(button => button.addEventListener('click', firstNumHandler));
};

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

numberHandler(calValues.opIsClicked);
opHandler(calValues.opIsClicked);