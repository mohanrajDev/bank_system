const Bank = require('./bank');

const bank = new Bank();
const mohanraj = bank.createCustomer('mohanraj', 'savings')
const raman = bank.createCustomer('raman', 'checking')
const kumar = bank.createCustomer('kumar', 'checking')
const palani = bank.createCustomer('palani', 'savings')

mohanraj.deposit(10000)
mohanraj.deposit(10000)
mohanraj.withdraw(500)

bank.applyForLoan('mohanraj', 5000)
bank.applyForLoan('kumar', 200)
// bank.payLoan('mohanraj', 2500)



console.log(bank)
