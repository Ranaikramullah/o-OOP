
'use strict';
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
