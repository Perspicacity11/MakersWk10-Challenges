class BankAccount {
    constructor() {
        this.transactions = [];
        this.balance = 0.00;
    }

    formatDate(date) {
        const day = ('0' + date.getDate()).slice(-2);
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    deposit(total) {
        if (typeof total !== "number") {
            throw new Error('Invalid input: please input a number');
        }
        const date = new Date();
        const credit = total.toFixed(2); // Store credit with two decimal places
        const balance = (this.balance + total).toFixed(2); // Update balance with two decimal places
        this.transactions.push({
            date: this.formatDate(date),
            credit: credit,
            debit: "",
            balance: balance
        });
        this.balance += total;
    } 

    withdraw(total) {
        if (total > this.balance) {
            throw Error('Insufficient funds for this withdrawal');
        }
        const date = new Date();
        const debit = total.toFixed(2); // Store debit with two decimal places
        const balance = (this.balance - total).toFixed(2); // Update balance with two decimal places
        this.transactions.push({
            date: this.formatDate(date),
            credit: "",
            debit: debit,
            balance: balance
        });
        this.balance -= total;
    }

    getReceipt() {
        console.log("date || credit || debit || balance")
        this.transactions.forEach(transaction => {
            console.log(`${transaction.date} || ${transaction.credit} || ${transaction.debit} || ${transaction.balance}`)
        })
    }
}

module.exports = BankAccount;

let testAccount = new BankAccount

testAccount.deposit(1000.00)
testAccount.withdraw(500.00)
testAccount.deposit(250.00)
testAccount.getReceipt()