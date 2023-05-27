
'use strict';
const person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

person.prototype.calcAge = function () {
    console.log(2032 - this.birthYear);

};

const student = function (firstName, birthYear, course) {
    person.call(this, firstName, birthYear);
    this.course = course;

};
student.prototype = Object.create(person.prototype);
student.prototype.introduce = function () {
    console.log(`my name is ${this.firstName}  and i study ${this.course}`);

};
const faraz = new student('faraz', 2020, 'computer science');
faraz.introduce();
faraz.calcAge();
