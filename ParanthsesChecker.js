const parantheses = {
    '{': '}',
    '(': ')',
    '[': ']'
}

console.log(parantheses['{']);
console.log(parantheses['(']);
console.log(parantheses['[']);

function isBalanced(inputString) {
    //console.log(inputString);
    const parantheseArray = [];
    for(let char of inputString) {
        if(parantheses[char]) {
            parantheseArray.push(char);
        }
        else if(char === ')' || char === '}' || char === ']') {
            const lastOpeningParanthesis = parantheseArray.pop();
            if(parantheses[lastOpeningParanthesis] !== char) {
                return false;
            }
        }
    }
    //console.log('parantheseArray', parantheseArray);
    return parantheseArray.length === 0;

}

console.log('{[()]}', isBalanced('{[()]}'));

console.log('{[(])}', isBalanced('{[(])}'));

console.log('{[]', isBalanced('{[]'));