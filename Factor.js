function calculateFactors(inputNumber) {
    if(inputNumber < 1) {
        throw new Error("inputNumber should be greater than zero");
    }
    // Add validation that inputNumber is a number and it is not a decimal number like 1.5

    let result = [];
    for(let i = 1; i <= inputNumber; i++) {
        if(inputNumber % i === 0) {
            result.push(i);
            //console.log(i, "is a factor");
        }
    }

    return result;
}

console.log('Factors of 4 are', calculateFactors(4));
console.log('Factors of 14 are', calculateFactors(14));
console.log('Factors of 35 are', calculateFactors(35));