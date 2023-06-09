# Virtual Bank Teller

A system for managing and displaying deposits to and withdrawals from a bank account.

## Functionality

This programme allows for a user to make deposits into and withdrawals from a bank account, and to print an itemised receipt of transactions to the console. These transactions are recorded as Javascript objects with a date, credit/debit amounts and a running balance.

The system throws an error if either:
a) a deposit or withdrawal is attempted with an non-Integer input (eg. a string), or 
b) an attempted withdrawal exceeds the balance of the account.

Tests reflect the essential read/update functionalities and related error-handling. I have used logSpy to assert on the presence of the formatted receipt, as the receipt formatting method prints the receipt to the console (see example below)

## Approach

I built out the method structure in the attached planning document, starting with a core read/write function for integer deposits and withdrawals. 

With this achieved, I decided to first address attaching a pre-formatted datestamp to the transaction object (absracting the formatting into its own method for reusability), before interpolating that information into the desired pipe-separated string in the final formatting method. 

With all tests passing I then refactored the production code, removing the vestigial balance reader function and condensing the deposit/withdrawal object-construction.

Finally, I reworked my error handling mechanism to accept decimalised inputs and reflect this in the receipt.

Example input:
```
let testAccount = new BankAccount;
testAccount.deposit(1000)
testAccount.withdraw(500)
testAccount.deposit(250)
testAccount.getReceipt()
```
Example REPL output:
![image](./Screenshot%202023-03-21%20at%2014.21.00.png)

## Getting Started

### Dependencies

- Node.js
- Jest
- ESLint

### Installing and executing

Installation
To run the application, you will need to have Node.js and npm (Node Package Manager) installed on your machine. You can check if you have them installed by running the following commands in your terminal:

```
node -v
npm -v
```

If you don't have them installed, you can download them from the official Node.js website.

Once you have Node.js and npm installed, you can clone this repository to your local machine using the following command:

```
git clone https://github.com/[YOUR GITHUB USERNAME HERE]/MakersWk10-Challenges.git
```
Then, navigate to the BankTest directory like so:

```
cd MakersWk10-Challenges/BankTest
```

Usage
To run the application, execute the following command in your terminal:

```
node BankTest.js
```

This will start the application and display calls added to the bottom of the production code (examples provided).

To run tests, navigate to the top directory and run:

```
jest
```

## Author

Cassius Naylor ||
[@Perspicacity11](https://github.com/perspicacity11)

## License

This project is licensed under the MIT License
