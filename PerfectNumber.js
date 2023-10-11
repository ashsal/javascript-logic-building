function isPerfectNumber(inputNumber) {
    // Validate if input number is a positive integer
    const properDivisors = [];
    for(let i = 1; i < inputNumber; i++) {
        if(inputNumber % i === 0) {
            properDivisors.push(i);
        }
    }

    let sum = 0;
    properDivisors.forEach(d => { sum = sum + d});

    // const sum1 = properDivisors.reduce((acc, d) => {
    //     acc += d;
    //     return acc;
    // }, 0);

    return sum === inputNumber;

    console.log("sum is", sum);
    console.log("sum 1 is", sum1);
}

console.log("6 is ", isPerfectNumber(6))

console.log("5 is ", isPerfectNumber(5))

console.log("28 is ", isPerfectNumber(28))