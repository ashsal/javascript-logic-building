function calculateSimpleInterest(principalAmount, 
    interstRateYearly, durationInYears) {
    // Add validation that principalAmount, interstRateYearly, durationInYears should be numbers
    let multiplicationResult = principalAmount * interstRateYearly * durationInYears;
    let simpleInterest = multiplicationResult / 100;
    simpleInterest = simpleInterest.toFixed(2);
    return simpleInterest;
}

console.log("1000, 5, 1", calculateSimpleInterest(1000, 5, 1));
console.log("20000, 10, 5", calculateSimpleInterest(20000, 10, 5));

console.log("20000, 8.755, 5", calculateSimpleInterest(20000, 8.755, 5));
console.log("20000.88, 8.755, 5", calculateSimpleInterest(20000.88, 8.755, 5))