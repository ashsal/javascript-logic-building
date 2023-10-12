function isStrongPassword(passwordString) {
    passwordString = passwordString.trim();
    if(passwordString.length < 8) {
        return false;
    }

    const lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "!@";


    let lowerCaseCharacterExists = false;
    let upperCaseCharacterExists = false;
    let numberExists = false;
    let specialCharExists = false;
    for(let char of passwordString) {
        if(lowerCaseCharacters.includes(char)) {
            lowerCaseCharacterExists = true;
        }
        else if(upperCaseCharacters.includes(char)){
            upperCaseCharacterExists = true;
        }
        else if(numbers.includes(char)) {
            numberExists = true;
        }
        else if(specialChars.includes(char)) {
            specialCharExists = true;
        }
    }

    if(lowerCaseCharacterExists && upperCaseCharacterExists && numberExists && specialCharExists) {
        return true;
    }

    return false;
}

//console.log("Ash1! is ", isStrongPassword("Ash1!"));
console.log("Ashish1! is ", isStrongPassword("Ashish1!"));

console.log("Ash1! is ", isStrongPassword("Ash1!"));
console.log("Ashis1! is ", isStrongPassword("Ashis1!"));
console.log("ashish1! is ", isStrongPassword("ashish1!"));
console.log("ashisha! is ", isStrongPassword("ashisha!"));
console.log("ashish1a is ", isStrongPassword("ashish1a"));