const prompt = require("prompt-sync")();

let exit = false;
while(!exit) {
    let userChoice = prompt(`Please select one of the below options
1. Press 1 for Addition
2. Press 2 for Subtraction 
3. Press 3 for Multiplication
4. Press 4 for Division:
5. Press 5 for exit
`);

    userChoice = parseInt(userChoice);
    switch (userChoice) {
        case 1:
            console.log("Addition");
            
            const userInputAddition = acceptTwoNumbers();
            const resultAddition = userInputAddition.firstNumber + userInputAddition.secondNumber;
            console.log(`${userInputAddition.firstNumber} + ${userInputAddition.secondNumber} = ${resultAddition}`);
            break;
        case 2:
            console.log("Subtraction");
            const userInputSubtraction = acceptTwoNumbers();
            const resultSubtraction = userInputSubtraction.firstNumber - userInputSubtraction.secondNumber;
            console.log(`${userInputSubtraction.firstNumber} - ${userInputSubtraction.secondNumber} = ${resultSubtraction}`);

            break;
        case 3:
            console.log("Multiplication");
            const userInputMultiplication = acceptTwoNumbers();
            const resultMultiplication = userInputMultiplication.firstNumber * userInputMultiplication.secondNumber;
            console.log(`${userInputMultiplication.firstNumber} * ${userInputMultiplication.secondNumber} = ${resultMultiplication}`);

            break;    
        case 4:
            console.log("Division");
            const userInputDivision = acceptTwoNumbers();
            const resultDivision = userInputDivision.firstNumber / userInputDivision.secondNumber;
            console.log(`${userInputDivision.firstNumber} / ${userInputDivision.secondNumber} = ${resultDivision}`);

            break;
        case 5:
            exit = true;
            break;
        default:
            console.log("Wrong choice");
            break;
    }
}

console.log("Thanks for using the calculator!");


function acceptTwoNumbers() {
    let firstNumber = prompt("Please enter the first number: ");
    let secondNumber = prompt("Please enter the second number: ");
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);

    return {firstNumber, secondNumber};
}