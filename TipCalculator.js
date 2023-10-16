function calculateTipAmount(baseAmount, tipPercentages, locale, currency) {
    console.log(baseAmount, tipPercentages);
    let result = [];

    for(let i = 0; i < tipPercentages.length; i++) {
        console.log(tipPercentages[i]);
        let tipAmount = baseAmount * (tipPercentages[i] * .01);
        //tipAmount = tipAmount.toFixed(2);
        //result.push(tipAmount);

        const formatter = Intl.NumberFormat(locale, {
            style: "currency",
            currency:currency
         });
         result.push(formatter.format(tipAmount));
    }

    return result;
}

console.log("1000, [5, 10, 15]", calculateTipAmount(1000, [5, 10, 15], "en-IN", "INR"));

console.log("997, [5, 10, 15]", calculateTipAmount(997, [5, 10, 15], "en-US", "USD"));