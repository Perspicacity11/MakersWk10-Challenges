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

    it('Adds a credit deposit of £1000; tests deposit', () => {
        let testAccount = new BankAccount();
        testAccount.deposit(1000)
        expect(testAccount.readBalance()).toBe(1000)
    })

    it('Adds a credit deposit of £1000 and then withdraws £500; tests withdraw', () => {
        let testAccount = new BankAccount();
        testAccount.deposit(1000)
        testAccount.withdraw(500)
        expect(testAccount.readBalance()).toBe(500)
    })
    
    it('Transacts three values in and out of the account and logs the formatted receipt; tests formatReceipt', () => {
        let logSpy = jest.spyOn(console, 'log')
        let testAccount = new BankAccount();
        testAccount.deposit(1000)
        testAccount.withdraw(500)
        testAccount.deposit(1000)
        expect(testAccount.readBalance()).toBe(1500)
        testAccount.getReceipt()
        expect(logSpy).toHaveBeenCalledWith(
            "date || credit || debit || balance"
        )
    })

    it('Adds a credit deposit of £1000 and then tries to withdraw £1500; tests fail', () => {
        let testAccount = new BankAccount();
        testAccount.deposit(1000)
        expect(() => {testAccount.withdraw(1500)}).toThrow('Insufficient funds for this withdrawal')
    })

    it('Attempts to add a credit deposit in a non-integer form, and fails; tests fail', () => {
        let testAccount = new BankAccount();
        expect(() => {testAccount.deposit('WRONG INPUT')}).toThrow('Invalid input: please input an integer')
    })
})