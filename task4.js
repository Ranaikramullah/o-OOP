
'use strict';
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

