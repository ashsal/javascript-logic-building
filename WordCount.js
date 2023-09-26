function countWords(sentence) {
    console.log('Before trim', sentence);
    sentence = sentence.trim();
    console.log('After trim', sentence);
    const splittedSentence = 
    sentence.split(' ');
    console.log(splittedSentence);
    const nonEmptyElements = splittedSentence.filter((element) => element != '');
    console.log("nonEmptyElements", nonEmptyElements)
    return nonEmptyElements.length;
}

console.log("This is a sentence", countWords("This is a sentence"));
console.log("What is the date today", countWords("What is the date today"));

console.log("What is    the date today", countWords("What is    the date today"));
console.log(" What is    the date today ", countWords(" What is    the date today "));