function fiveLine(str) {
    let pureSrt = str.trim();
    let result = '';

    for (let i = 1; i <= 5; i++) {
        result += pureSrt.repeat(i) + '\n';
    }
    return result.slice(0, -1);
}

console.log(fiveLine(' a'));
console.log(fiveLine('  xy '));
