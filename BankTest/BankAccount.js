class BankAccount {
    constructor() {
        this.transactions = [];
        this.balance = 0;
    }
    
    readBalance() {
        return this.balance;
    }

    formatDate(date) {
        const day = ('0' + date.getDate()).slice(-2);
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }

    deposit(total) {
        const date = new Date();
        const transaction = {
            date: this.formatDate(date),
            credit: `${total}`,
            debit: 0,
            balance: this.balance + total,
        };
        this.transactions.push(transaction);
        this.balance += total;
    } 

    withdraw(total) {
        const date = new Date();
        const transaction = {
        date: this.formatDate(date),
        credit: 0,
        debit: `${total}`,
        balance: this.balance - total,
        };
        this.transactions.push(transaction);
        this.balance -= total;
    }
  
}

module.exports = BankAccount;