var Account = require('../classes.js');

let a = new Account(1001,"Ram",0);

describe('Testing Account Class',() => {
    test('Deposit 1000 into Account',() => {
        a.deposit(1000);

        expect(a.Balance).toBe(1000);
    });

    test('Withdraw 500 from Account',() =>{
        a.withdraw(500);

        expect(a.Balance).toBe(500);
    });
});