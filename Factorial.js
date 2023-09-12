function calculateFactorial(inputNumber) {

    if(inputNumber < 0) {
        throw new Error("inputNumber should be greater than or equal to zero");
    }
    let result = 1;
    for(let i = 1; i <= inputNumber; i++) {

        //result = result * i;
        result *= i
        // 1 * 1 = 1
        // 1 * 2 = 2
        // 2 * 3 = 6
        // 6 * 4 = 24
        
    }

    return result;
}

function calculateFactorialUsingRecursion(inputNumber){
    //console.log('inputNumber is', inputNumber)
    if(inputNumber < 0) {
        throw new Error("inputNumber should be greater than or equal to zero");
    }

    if(inputNumber === 0 || inputNumber === 1) {
        return 1;
    }

    return inputNumber * calculateFactorialUsingRecursion(inputNumber - 1);
    //return 4 * calculateFactorialUsingRecursion(3); 4 * 6
    //return 3 * calculateFactorialUsingRecursion(2); 3 * 2
    //return 2 * calculateFactorialUsingRecursion(1); 2 * 1
}
console.log(calculateFactorial(4));
console.log("3!", calculateFactorial(3));
console.log("10!", calculateFactorial(10));
console.log("0!", calculateFactorial(0));
console.log("1!", calculateFactorial(1));

//console.log("-1!", calculateFactorial(-1));

console.log("calculateFactorialUsingRecursion");
console.log(calculateFactorialUsingRecursion(4));
console.log("3!", calculateFactorialUsingRecursion(3));
console.log("10!", calculateFactorialUsingRecursion(10));
console.log("0!", calculateFactorialUsingRecursion(0));
console.log("1!", calculateFactorialUsingRecursion(1));