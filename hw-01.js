'use strict';

// Task 1
//
function getNumberBits(number) {
    return Number(number.toString(2).split('').sort().join('')).toString()
        .length;
}

console.log(getNumberBits(1234));

//
//
// Task 2
//
function fizzBuzz(number) {
    const arrNumber = [...Array(number).keys()].slice(1);
    let resultArr = [];
    arrNumber.map(number => {
        if (number % 3 === 0 && number % 5 === 0) {
            return resultArr.push('FizzBuzz');
        }
        if (number % 3 === 0) {
            return resultArr.push('Fizz');
        }
        if (number % 5 === 0) {
            return resultArr.push('Buzz');
        }
        resultArr.push(number);
    });
    return resultArr;
}
console.log(fizzBuzz(31));

//
//
// Task 3
//
function per(number) {
    if (number < 10) return [];

    let arr = [];

    while (number >= 10) {
        number = number.toString();
        number = number.split('').reduce((acc, num) => acc * Number(num), 1);
        arr.push(number);
    }

    return arr;
}

console.log(per(1));
console.log(per(10));
console.log(per(69));
console.log(per(277777788888899));

//
//
// Task 4
//
//
function concat(array) {
    return Array.prototype.concat.apply([], array);
}

function lastIndexOf(searchElement) {
    var O = ToObject(this);
    var len = ToLength(Get(O, 'length'));
    if (len === 0) {
        return -1;
    }
    var n = arguments.length > 1 ? ToInteger(arguments[1]) : len - 1;
    if (n >= 0) {
        var k = 1 / n === -Infinity ? 0 : Math.min(n, len - 1);
    } else {
        k = len + n;
    }
    while (k >= 0) {
        var kPresent = HasProperty(O, ToString(k));
        if (kPresent) {
            var elementK = Get(O, ToString(k));
            var same = searchElement === elementK;
            if (same) {
                return k;
            }
        }
        k = k - 1;
    }
    return -1;
}

function includes(searchElement) {
    var O = ToObject(this);
    var len = ToLength(Get(O, 'length'));
    if (len === 0) {
        return false;
    }
    var n = ToInteger(arguments[1]);
    if (n >= 0) {
        var k = n;
    } else {
        k = len + n;
        if (k < 0) {
            k = 0;
        }
    }
    while (k < len) {
        var elementK = Get(O, ToString(k));
        if (SameValueZero(searchElement, elementK)) {
            return true;
        }
        k = k + 1;
    }
    return false;
}

function repeat(count) {
    var O = RequireObjectCoercible(this);
    var S = ToString(O);
    var n = ToInteger(count);
    if (n < 0) {
        throw new RangeError('Invalid count value');
    }
    if (n === Infinity) {
        throw new RangeError('Invalid count value');
    }
    var T = n === 0 ? '' : new Array(n + 1).join(S);
    return T;
}

function substr(string) {
    return function (start, length) {
        return string.call(
            this,
            start < 0 ? this.length + start : start,
            length,
        );
    };
}
