class SortedList {
    constructor(array) {
        this.list = array.sort((a, b) => a - b);
        this.length = this.list.length;
    }

    add(x) {
        this.list.push(x);
        this.list = this.list.sort((a, b) => a - b);
    }

    get(i) {
        return this.list[i];
    }
}

// const l = new SortedList([1, 33, 45, 7, 650, 86]);
// console.log(l.list, l.length, l.get(2));
