function reverseAString(inputString) {

    if(typeof inputString !== 'string') {
        throw new Error("Only strings are allowed");
    }
    let result = "";
    for(let i = inputString.length - 1; i >= 0; i--) {
        //result = result + inputString[i];
        result += inputString[i];
    }

    return result;
}

function reverseAString2(inputString) { 
    const splittedInput = inputString.split('');
    const reversedArray = splittedInput.reverse();
    const result = reversedArray.join('');
    return result;
}


console.log(reverseAString("Ashish"));
console.log(reverseAString("Software development"));

console.log("reverseAString2")
console.log(reverseAString2("Ashish"));
console.log(reverseAString("Software development"));