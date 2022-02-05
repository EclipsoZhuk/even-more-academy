// Task 3

function alienLanguage(str) {
    const result = str.split(' ').map(word => {
        return word.slice(0, -1).toUpperCase() + word[word.length - 1];
    });
    return result;
}

console.log(alienLanguage('My name is John'));
console.log(alienLanguage('this is an example'));
console.log(alienLanguage('Hello World'));
