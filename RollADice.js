function rollADice(sidesInADice) {
    return Math.floor(Math.random() * sidesInADice) + 1;
}

function rollMultipleDices(numberOfDice, sidesInADice) {
    const result = [];
    let counter = 0;
    while(counter < numberOfDice) {
        const rollADiceResult = rollADice(sidesInADice);
        result.push(rollADiceResult)
        counter++;
    }

    return result;
}


console.log(rollMultipleDices(3, 6));