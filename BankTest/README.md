# Virtual Bank Teller

A system for managing and displaying deposits to and withdrawals from a bank account.

## Description

This programme allows for a user to make deposits into and withdrawals from a bank account, and to print an itemised receipt of transactions to the console. These transactions are recorded as Javascript objects with a date, credit/debit amounts and a running balance.

The system throws an error if either a) a deposit or withdrawal is attempted with an non-Integer input (eg. a string) or b) an attempted withdrawal exceeds the balance of the account.

Tests reflect the essential read/update functionalities and related error-handling. I have used logSpy to assert on the presence of the formatted receipt, as the receipt formatting method prints the receipt to the console.

## Getting Started

### Dependencies

- Node.js
- Jest

### Installing and executing

Firstly, fork this repository and navigate to the local directory from where you would like to run the programme.

```
git clone

npm install
```

This will install dependencies in the package.json (the only one of note is Jest, for testing)

This programme runs in the command line REPL, and was built using Node.

## Author

Cassius Naylor ||
[@Perspicacity11](https://github.com/perspicacity11)

## Version History

* 0.1
    * Initial Release

## License

This project is licensed under the MIT License