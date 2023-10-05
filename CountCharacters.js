const myObject = {};

myObject.a = 1;

myObject['b'] = 2;

console.log(myObject);
console.log(myObject['b']);



function countCharacters(inputString) {
    const result = {};
    inputString = inputString.toLowerCase();
    console.log('result before', result);
    for(let i = 0; i < inputString.length; i++) {
        if(!result[inputString[i]]) {
            result[inputString[i]] = 0;
        }

        result[inputString[i]] = result[inputString[i]] + 1;
    }

    return result;
}

function countCharacters2(inputString) {
    inputString = inputString.toLowerCase();
    const splittedString = inputString.split("");
    const result = splittedString.reduce((acc, char) => {
        if(!acc[char]) {
            acc[char] = 0;
        }
        acc[char] = acc[char] + 1; 
        return acc;
    }, {});

    return result;
}
console.log("Ashish Saluja 1", countCharacters("Ashish Saluja 1"));

console.log("countCharacters2");

console.log("Ashish Saluja 1", countCharacters2("Ashish Saluja 1"));
