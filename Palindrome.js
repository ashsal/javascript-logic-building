function isPalindrome(inputString) {

    for(let i = 0; i <= inputString.length / 2; i++) {
        if(inputString[i] !== inputString[inputString.length - 1 - i ]) {
            return false;
        }
    }
    return true;
}

function isPalindrome2(inputString) {

    inputString = inputString.toLowerCase();
    let start = 0;
    let end = inputString.length - 1;
    for(start, end; start < end; start++, end--) {
        if(inputString[start] !== inputString[end]) {
            return false;
        }
    }
    return true;
}

function isPalindrome3(inputString) {
    inputString = inputString.toLowerCase();
    const splittedInput = inputString.split('');
    console.log(splittedInput);
    const reversedInput = splittedInput.reverse();
    const reversedString = reversedInput.join('');
    console.log(inputString, reversedInput, reversedString);

    if(reversedString === inputString) {
        return true;
    }
    else{
        return false;
    }
}
console.log("ashish", isPalindrome("ashish"));
console.log("madam", isPalindrome("madam"));
console.log("level", isPalindrome("level"));
console.log("abba", isPalindrome("abba"));

console.log("isPalindrome2");
console.log("ashish", isPalindrome2("ashish"));
console.log("madam", isPalindrome2("madam"));
console.log("level", isPalindrome2("level"));
console.log("abba", isPalindrome2("Abba"));

console.log("isPalindrome3");
console.log("ashish", isPalindrome3("ashish"));
console.log("madam", isPalindrome3("madam"));
console.log("level", isPalindrome3("level"));
console.log("abba", isPalindrome3("Abba"));