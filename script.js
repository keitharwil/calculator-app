const calculatorOperation = document.querySelectorAll('.operation-buttons');
const calculatorNumber = document.querySelectorAll(".calculator-number")

console.log(calculatorNumber)
console.log(calculatorOperation)

calculatorNumber.forEach(button => button.addEventListener('click', (handleButton) => {
    let button = button.target;
}));

const operate = (a, b, operator) => {
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
    
};

