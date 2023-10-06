console.log('a'.charCodeAt(0));
console.log('b'.charCodeAt(0));
console.log('z'.charCodeAt(0));

console.log('A'.charCodeAt(0));
console.log('Z'.charCodeAt(0));

console.log('a' < 'b'); // true
console.log('b' < 'a'); // false

function isStringInAlphabeticOrder(inputString) {
    inputString = inputString.replace(/ /g, '');
    inputString = inputString.toLowerCase();
    for(let i = 0; i < inputString.length - 1; i++) {
        if(inputString[i] > inputString[i + 1]) {
            return false;
        }
    }

    return true;
}

console.log("acgz", isStringInAlphabeticOrder("acgz"));
console.log("acagz", isStringInAlphabeticOrder("acagz"));

console.log("ac g z", isStringInAlphabeticOrder("ac g z"));

console.log("aAc g z", isStringInAlphabeticOrder("aAc g z"));