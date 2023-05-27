'use strict';
const person = function (firstName, birthyear) {
    // instance properties
    this.firstName = firstName;
    this.birthyear = birthyear;
}
const ali = new person('ali', 1992);
console.log(ali);
// static method
person.hey = function () {
    console.log('hey there  ');
};
person.hey();
const emoji = '\uD83D\uDE0D';
console.log(emoji);
const ikram = new person('ikram', 1995);
console.log(ikram);
console.log(ikram instanceof person);
//prototype
console.log(person.prototype);
person.prototype.calcAage = function () {
    console.log(2023 - this.birthyear)
};

ali.calcAage();
ikram.calcAage();
console.log(ikram);
console.log(ikram.__proto__ == person.prototype);
