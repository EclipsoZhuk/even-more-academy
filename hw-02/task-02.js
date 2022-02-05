function calc(str) {
    const total1 = str
        .split('')
        .map(s => s.charCodeAt(0))
        .join('');
    const sumTotal1 = total1
        .split('')
        .reduce((acc, n) => Number(acc) + Number(n));
    const total2 = total1.replace(/7/g, '1');
    const sumTotal2 = total2
        .split('')
        .reduce((acc, n) => Number(acc) + Number(n));

    return sumTotal1 - sumTotal2;
}

console.log(calc('ABC'));
console.log(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'));
