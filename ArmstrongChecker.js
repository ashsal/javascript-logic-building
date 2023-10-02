function isArmstrong(inputNumber) {
    // Validate if the number is a positive integer or not
    console.log(inputNumber);

    let number = inputNumber;
    const digits = [];

    while(number > 0) {
        let lastDigit = number % 10;
        number = Math.floor(number / 10);
        digits.push(lastDigit);
    }

    const length = digits.length;
    //console.log("Length is", length);
    let sum = 0;
    digits.forEach(d => {
        //console.log(d,length, Math.pow(d, length));
        sum += Math.pow(d, length);
    })

    return sum === inputNumber;
    // if(sum === inputNumber) {
    //     return true;
    // }

    // return false;
}

console.log("isArmstrong(153)", isArmstrong(153));
console.log("isArmstrong(370)", isArmstrong(370));
console.log("isArmstrong(371)", isArmstrong(371));

console.log("isArmstrong(132)", isArmstrong(132));
console.log("isArmstrong(18273)", isArmstrong(18273));

console.log("isArmstrong(92727)", isArmstrong(92727));