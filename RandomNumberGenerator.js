const maxNumber = 5;
console.log(Math.floor(Math.random() * maxNumber) + 1);
let i = 0;
while(i < 20) {
    console.log(Math.floor(Math.random() * maxNumber) + 1);
    i++;
}

const minimumNumber = 11; // Included
const maximumNumber = 21; // Dont include
console.log("Between", minimumNumber, maximumNumber);
let j = 0;
while(j < 20){
    console.log(Math.floor(Math.random() * (maximumNumber - minimumNumber) + minimumNumber));
    j++;
}

