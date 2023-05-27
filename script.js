'use strict';
/*const person = function (firstName, birthyear) {
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
console.log(ikram.__proto__);
console.log(ikram.__proto__ !== person.prototype);


//protypeoflinkedobjects
person.prototype.species = 'homo sapiens';
console.log(ikram.species, ali.species);
console.log(ikram.hasOwnProperty('firstName'));
console.log(ikram.hasOwnProperty('species'));
// object.prototype( type of prototype chain)
console.log(ikram.__proto__.__proto__);
console.dir(person.prototype.constructor);
const arr = [1, 2, 2, 2, 2, 2, 3, 4, 5, 566, 7];
console.log(arr.__proto__ == Array.prototype);
console.log(arr.__proto__.__proto__);
Array.prototype.unique = function () {
    return [...new Set(this)];

};
console.log(arr.unique());
const h1 = document.querySelector('h1');
const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};
Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};


const bmw = new Car('bmw', 120);
const merceds = new Car('merceds', 90);
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
merceds.brake();
*/


/*
// class expression
//const personcl = class {}
class personcl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;


    }
    calcAge() {
        console.log(2023 - this.birthYear);
    }
    greet() {
        console.log(`hey ${this.birthYear}`);

    }
    get age() {
        return 2022 - this.birthYear;
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
const ali = new personcl('ali', 1992);

const walter = new personcl('walter', 1994);

console.log(ali);
console.log(walter);
ali.calcAge();
console.log(ali.age)
console.log(walter.age);
ali.greet();



const account = {
    owner: 'ali',
    movements: [1, 3, 4, 5, 6, 7, 8, 9],
    get latest() {
        return this.movements.slice(-1).pop();
    },
    set latest(mov) {
        this.movements.push(mov);
    },


};
console.log(account.latest);
account.latest = 50;
console.log(account.movements);




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
*/


/*


/// assignment
const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
};
Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
    Car.call(this, make, speed)
    this.charge = charge;
};
// link the perotype
EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
}
EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge--;
    console.log(
        `${this.make} is going to at ${this.speed} km/h with charg of ${this.charge}`);

};
const tesla = new EV('tesla', 120, 23);
tesla.chargeBattery(90);
console.log(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();

*/

/*
// INHERITANCE BTW CLasses
class personcl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;


    }
    calcAge() {
        console.log(2220 - this.birthYear);
    }
    greet() {
        console.log(`hey ${this.fullName}`);

    }
    get age() {
        return 2022 - this.birthYear;
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
const ali = new personcl('ali', 1994);

const walter = new personcl('walter', 1994);
console.log(ali);
console.log(walter);
ali.calcAge();
console.log(ali.age)
console.log(ali.__proto__ === personcl.prototype);


ali.greet();
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
ikram.introduce();
ikram.calcAge();
*/
/*
// class example

class account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this.movements = [];
        this.local = navigator.language;
        console.log(`Thanks for opening a account,${owner}`);

    }
    //public interface of th object
    deposite(val) {
        this.movements.push(val)
    }
    withdraw(val) {
        this.deposite(-val);

    }
    approveloan(val) {
        return true;

    }
    requestloan(val) {
        if (this.approveloan(val)) {
            this.deposite(val)
            console.log(`loan approved`);
        }
    }
}
const acc1 = new account('ikram', 'Eur', 11111, []);

//acc1.movements, push(250);
//acc1.movements.push(-123);

acc1.deposite(250);
acc1.withdraw(140);
acc1.requestloan(1000);
acc1.approveloan(100);


console.log(acc1);
console.log(acc1.pin);



*/

/// encapsulation
//code challenge



class CarCl {

    constructor(make, speed) {
        this.make = make;
        this.speed = speed;


    }
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);

    }
    brake() {

        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
        return this;
    }
    get speedUS() {
        return this.speed / 1.6;

    }
    set speedUS(speed) {
        this.speed = speed * 1.6;

    }
}

class EVCL extends CarCl {
    #charge;
    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;

    }
    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;

    }
    accelerate() {
        this.speed += 20;
        this.#charge--;
        // this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h, with a charge of${this.#charge}`);
        return this;
    }
}


const rivian = new EVCL('Rivian', 120, 23);
console.log(rivian);

rivian.accelerate()
    .accelerate()
    .accelerate()
    .brake()
    .chargeBattery(50)
    .accelerate();

console.log(rivian.speedUS);
/*

//polymorphism 


class Animal {
    constructor(name) {
        this.name = name;


    }
    eat() {
        console.log(`${this.name}   eat food `);

    }
}
class Alligator extends Animal {
    eat() {
        super.eat();
        console.log(`${this.name}   eat fishes `);

    }

}
const murphy = new Alligator('murphy')
murphy.eat();




//abstraction
//hide details and just show essential



function Employee(name, age, baseSalary) {
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
    let monthlyBonus = 1000;
    let calculateFinalSalary = function () {
        let finalSalaery = baseSalary + monthlyBonus;
        console.log('final salaryis :' + finalSalaery);
    }


    this.EmpDetails = function () {
        console.log(`Name : ${this.name} | age : ${this.age} `);
        calculateFinalSalary();

    }

}

let emp = new Employee('john', 30, 20000);
emp.EmpDetails();













*/
