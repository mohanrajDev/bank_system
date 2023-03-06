const Customer = require('./customer');
const Loan = require('./loan');


class Bank {
    constructor() {
        this.name = "My Bank";
        this.customers = new Map();
        this.loans = new Map();
    }

    createCustomer(name, accountType = 'savings') {
        const customer = new Customer(name, accountType);
        this.customers.set(name, customer);
        return customer;
    }

    getCustomer(name) {
        const customer = this.customers.get(name);
        if (!customer) {
            throw new Error('Customer not found');
        }
        return customer;
    }

    getNumCheckingAccounts() {
        return [...this.customers.values()].filter(item => item.accountType === 'checking').length;
    }

    getNumSavingsAccounts() {
        return [...this.customers.values()].filter(item => item.accountType === 'savings').length;
    }

    applyForLoan(name, amount) {
        const customer = this.getCustomer(name)
        const approved = Math.random() >= 0.5;
        if (approved) {
            const loan = new Loan(amount, 'approved');
            customer.loan = loan;
            this.loans.set(name, loan);
            customer.logs.push({
                'action': 'applyLoan',
                'amount': amount,
                'status': 'approved'
            })
            return loan;
        } else {
            const loan = new Loan(amount, 'rejected');
            this.loans.set(name, loan);
            customer.logs.push({
                'action': 'applyLoan',
                'amount': amount,
                'status': 'rejected'
            })
            return null;
        }
    }

    payLoan(name, amount) {
        const customer = this.getCustomer(name)

        if (!customer.loan) {
            throw new Error('No active loan');
        }
        customer.loan.pay(amount);

        customer.logs.push({
            'action': 'payLoan',
            'amount': amount,
        })
    }
}
module.exports = Bank;
