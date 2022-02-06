class Animal {
    constructor(name, age, legs, species, status) {
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.species = species;
        this.status = status;
    }
    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old`;
    }
}

class Shark extends Animal {
    constructor(name, age, status) {
        super(name, age, 0, 'sharks', status);
    }
}

class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age, 4, 'cats', status);
    }

    introduce() {
        return super.introduce() + '  Meow meow!';
    }
}

// const example1 = new Cat('Example', 10, 'Happy');
// console.log(example1.introduce());

class Dog extends Animal {
    constructor(name, age, status, master = '') {
        super(name, age, 4, 'dogs', status);
        this.master = master;
    }
    introduce() {
        return super.introduce();
    }

    greetMaster() {
        return `Hello ${this.master}`;
    }
}

// const example2 = new Dog('Example', 10, 'Happy');
// console.log(example2.introduce());
