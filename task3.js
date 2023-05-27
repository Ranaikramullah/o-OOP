
'use strict';
// class expression
//const personcl = class {}
class personcl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
        this._fullName = fullName;


    }
    calcAge() {
        console.log(2023 - this.birthYear);
    }
    greet() {
        console.log(`hey ${this._fullName}`);

    }
    get age() {
        return 2022 - this.birthYear;
    }
    set fullName(name) {
        console.log(name);
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not full name! `)

    }
    // get fullName() {
    //     return this._fullName;
    // }


}
const ali = new personcl('Ali', 1992);

const walter = new personcl('Walter', 1994);

console.log(ali);
console.log(walter);

console.log(ali.age)
console.log(walter.age);
ali.greet();

