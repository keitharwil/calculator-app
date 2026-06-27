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