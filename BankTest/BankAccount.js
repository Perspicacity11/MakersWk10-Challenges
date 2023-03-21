class BankAccount {
    constructor() {
        this.transactions = [];
        this.balance = 0;
    }

    formatDate(date) {
        const day = ('0' + date.getDate()).slice(-2);
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    deposit(total) {
        if (!Number.isInteger(total)) {
            throw new Error('Invalid input: please input an integer');
        }
        const date = new Date();
        this.transactions.push({
            date: this.formatDate(date),
            credit: `${total}`,
            debit: 0,
            balance: this.balance + total,
        });
        this.balance += total;
    } 

    withdraw(total) {
        if (total > this.balance) {
            throw Error('Insufficient funds for this withdrawal');
        }
        const date = new Date();
        this.transactions.push({
            date: this.formatDate(date),
            credit: 0,
            debit: `${total}`,
            balance: this.balance - total,
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