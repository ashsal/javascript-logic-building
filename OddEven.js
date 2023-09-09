function checkIfEvenOrOdd(a) {
    const remainder = a % 2;

    if(remainder === 0) {
        return "even"
    }
    else {
        return "odd";
    }
}

function checkIfEvenOrOdd2(a) {
    return a % 2 === 0 ? "even" : "odd";
}

console.log(checkIfEvenOrOdd(13));
console.log(checkIfEvenOrOdd(-2));
console.log("0 is ", checkIfEvenOrOdd(0));
console.log("2 is ", checkIfEvenOrOdd(2));

console.log("-1 is ", checkIfEvenOrOdd(-1));
console.log("1 is ", checkIfEvenOrOdd(1));
console.log("157 is ", checkIfEvenOrOdd(157));

console.log("checkIfEvenOrOdd2");

console.log(checkIfEvenOrOdd2(13));
console.log(checkIfEvenOrOdd2(-2));
console.log("0 is ", checkIfEvenOrOdd2(0));
console.log("2 is ", checkIfEvenOrOdd2(2));

console.log("-1 is ", checkIfEvenOrOdd2(-1));
console.log("1 is ", checkIfEvenOrOdd2(1));
console.log("157 is ", checkIfEvenOrOdd2(157));

