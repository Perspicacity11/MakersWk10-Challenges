Specification

Requirements

 - You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
 - Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

Acceptance criteria

1) Given a client makes a deposit of 1000 on 10-01-2023
2) And a deposit of 2000 on 13-01-2023
3) And a withdrawal of 500 on 14-01-2023
4) When she prints her bank statement
5) Then she would see

date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00

--------

Bank Account class

Initialises with a starting balance of zero (this will need to be an array of objects that store both the transaction amount and date; the objects need to have credit and debit keys that are empty or populated depending on if depositing or withdrawing, so the object can be brought out and formatted as above)

Methods:

- Read balance (returns balance, as sum of 'balance' values in the object)
- Deposit (takes one argument, sets the input value to the 'credit' key and the Date.now to the 'date' key)
- Withdraw (does the same, but sets the value to the 'debit' key )
- Print Statement (takes and formats all the information in the balance object and returns the receipt as above; might need to add the balance at the end in logic, unless I can save a running balance to each object at the point of transaction)


Tests:

- Initialise the account with a balance of 0 and return the balance
- Add one amount and return the balance
- Add one amount, remove another amount and return the balance
- Add one amount, add another amount, remove a third amount of print out the statement formatted as in the requirements
- Failing test for when input it not a number
- Failing test for if a withdrawal is made that is larger than the balance