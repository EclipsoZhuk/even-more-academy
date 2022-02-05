// Task 4

function automorphic(num) {
    if (Math.pow(num, 2).toString().endsWith(num)) {
        return 'Automorphic';
    } else {
        return 'Not!!';
    }
}

console.log(automorphic(1));
console.log(automorphic(3));
console.log(automorphic(625));
console.log(automorphic(890625));
