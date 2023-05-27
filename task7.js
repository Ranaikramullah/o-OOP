'use strict';
// INHERITANCE BTW CLasses
class personcl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;


    }
    calcAge() {
        console.log(2023 - this.birthYear);
    }
    greet() {
        console.log(`hey  this is your birth year ${this.birthYear}`);

    }
    get age() {
        return 2023 - this.birthYear;
    }
    set fullName(name) {
        console.log(name);
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not full name! `)

    }
    get fullName() {
        return this._fullName;
    }


}


class studentcl extends personcl {
    constructor(fullName, birthYear, course) {
        super(fullName, birthYear);
        this.course = course;

    }

    introduce() {
        console.log(`my name is ${this.fullName}  and i study ${this.course}`);
    }
}
const ikram = new studentcl('rana ikram', 2012, "computer science");
const ali = new personcl('ali', 1994);
const walter = new personcl('walter', 1994);
ikram.introduce();
ikram.calcAge();
console.log(ali);
console.log(walter);
ali.calcAge();
console.log(ali.age)
console.log(ali.__proto__ === personcl.prototype);
ali.greet();