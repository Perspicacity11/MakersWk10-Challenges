class BankAccount {
    constructor() {
        this.transactions = [];
        this.balance = 0;
    }
    
    readBalance() {
        return this.balance;
    }

}

module.exports = BankAccount;