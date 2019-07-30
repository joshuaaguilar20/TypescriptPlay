class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    dance(test: string) {
        console.log(`this ${test} is dancing`)
    }
}

let test = new Person('Joshua');
test.dance('Dancing Bro');


class AwesomeJoshua extends Person {
    dance() {
        console.log('So Aweomse Joshua Is Dancing');
        super.dance('Ebby is Dancing');
    }
}

var josh = new AwesomeJoshua('Joshuiwaaa');
josh.dance();