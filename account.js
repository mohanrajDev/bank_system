class Account {
    constructor() {
        this.accountId = Math.floor(Math.random() * 1000000);
        this.balance = 0;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (this.balance < amount) {
            throw new Error('Insufficient funds');
        }
        this.balance -= amount;
    }
}


class CheckingAccount extends Account { }

class SavingsAccount extends Account { }

module.exports = { CheckingAccount, SavingsAccount };
