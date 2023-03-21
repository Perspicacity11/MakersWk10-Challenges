const BankAccount = require('./BankAccount');

describe('Bank Account', () => {
    it('Instantiates a new bank account and reads balance at 0; tests constructor', () => {
        let testAccount = new BankAccount();
        expect(testAccount.balance).toBe(0)
    })

    it('Instantiates a new bank account and reads balance at 0; tests read balance', () => {
        let testAccount = new BankAccount();
        expect(testAccount.readBalance()).toBe(0)
    })
})