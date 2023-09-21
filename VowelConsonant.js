function calculateVowelAndConsonants(inputString){
    console.log(inputString);
    inputString = inputString.toLowerCase();
    inputString = inputString.replace(/ /g, '');
    console.log("inputString after clean up is", inputString);
    const vowels = "aeiou";
    const consonants = "bcdfghjklmnpqrstvwxyz";

    let vowelCount = 0;
    let consonantCount = 0;
    for(let i = 0; i < inputString.length; i++) {
        if(vowels.includes(inputString[i])) {
            vowelCount++;
        }
        //else if(consonants.includes(inputString[i])) {
        else if(/^[a-z]$/.test(inputString[i])) {
            consonantCount++;
        }
        else {
            console.log(inputString[i], "Is neither vowel nor consonant");
        }
    }

    return { vowelCount, consonantCount };
}

console.log("Hello World", calculateVowelAndConsonants("Hello World"));
console.log("Ashish Saluja", calculateVowelAndConsonants("Ashish Saluja"));
console.log("Ashish Saluja Saluja", calculateVowelAndConsonants("Ashish Saluja Saluja"));
console.log("Ashish Saluja 123", calculateVowelAndConsonants("Ashish Saluja 123"));