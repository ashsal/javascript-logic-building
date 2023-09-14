function isLeapYear(year) {
    if(year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}

function isLeapYear2(year) {
    if(year % 4 === 0) {
        return true;
    }
    return false; 
}

function isLeapYear3(year) {
    return year % 4 === 0;
}

console.log("isLeapYear(2023)", isLeapYear(2023));
console.log("isLeapYear(2024)", isLeapYear(2024));
console.log("isLeapYear(2000)", isLeapYear(2000));

//console.log("isLeapYear(asdasasd)", isLeapYear("asdasasd"));

console.log("isLeapYear2");

console.log("isLeapYear2(2023)", isLeapYear2(2023));
console.log("isLeapYear2(2024)", isLeapYear2(2024));
console.log("isLeapYear2(2000)", isLeapYear2(2000));

console.log("isLeapYear3");

console.log("isLeapYear3(2023)", isLeapYear3(2023));
console.log("isLeapYear3(2024)", isLeapYear3(2024));
console.log("isLeapYear3(2000)", isLeapYear3(2000));