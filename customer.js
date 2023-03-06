const { SavingsAccount, CheckingAccount } = require('./account');

class Customer {
    constructor(name, accountType) {
        this.name = name;
        this.accountType = accountType;
        this.account = this.getAccount(accountType)
        this.logs = []
    }

    deposit(amount) {
        const account = this.account;
        account.deposit(amount);
        this.logs.push({
            'action': 'deposit',
            'amount': amount
        })
    }

    withdraw(amount) {
        const account = this.account;
        account.withdraw(amount);
        this.logs.push({
            'action': 'withdraw',
            'amount': amount
        })
    }

    getAccount(accountType) {
        if (accountType === 'checking') {
            return new CheckingAccount();
        } else if (accountType === 'savings') {
            return new SavingsAccount();
        } else {
            throw new Error('Invalid account type');
        }
    }
}

module.exports = Customer;

