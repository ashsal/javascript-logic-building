function calculateAverage(inputArray) {
    // Only array is allow, strings, number, boolean etc are not allowed
    // All elements of an array should be positive integer
    console.log(inputArray);
    let sumOfElements = 0;
    for(let i = 0; i < inputArray.length; i++) {
        sumOfElements += inputArray[i];
    }

    let result = sumOfElements / inputArray.length;

    return result;
}

console.log("[1, 2, 4]", calculateAverage([1, 2, 4]));
console.log("[1, 5, 7, 14]", calculateAverage([1, 2, 7, 14]));

console.log("[1, 5, 7, 35]", calculateAverage([1, 5, 7, 35]));