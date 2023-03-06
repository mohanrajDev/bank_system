class Loan {
    constructor(amount, status) {
        this.amount = amount;
        this.status = status;
        this.LoanId = Math.floor(Math.random() * 1000000);
    }

    pay(amount) {
        if (this.amount < amount) {
            throw new Error('Invalid payment amount');
        }
        this.amount -= amount;
    }
}

module.exports = Loan;
