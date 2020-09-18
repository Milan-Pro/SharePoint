class Account {
    constructor(no, name, balance) {
        this.AccountNo = no;
        this.Name = name;
        this.Balance = balance;
    }

    deposit(amount) {
        this.Balance += amount;

        return true;
    }

    withdraw(amount) {
        if(this.Balance < amount) {
            return false;
        }

        this.Balance -= amount;

        return true;
    }
};

module.exports = Account;