// 1. Closure-Based Counter Implementation

function createCounter() {
    let count = 0;

    return {
        increment: function () {
            count++;
            console.log("Current count:", count);
        },
        decrement: function () {
            count--;
            console.log("Current count:", count);
        },
        showCount: function () {
            console.log("Current count:", count);
        }
    };
}

//Tasks:
// Task-1: Implement the createCounter function.
const counter = createCounter();
counter.increment(); // Output: Current count: 1
counter.increment(); // Output: Current count: 2
counter.decrement(); // Output: Current count: 1

// Task-2: Explain how closures are being used to encapsulate the counter variable.
// A closure occurs when an inner function retains access to variables from its outer function even after the outer function has finished executing.
// count exists inside createCounter(). increment(), decrement(), showCount() are inner functions.
// When createCounter() returns the object, the inner functions still remember the value of count.
// Only the internal functions can modify or read count. This is how encapsulation is achieved using closures.

// Task-3: What happens if multiple counters are created using the same function? Provide examples to demonstrate this behavior.
// Each call to createCounter() creates a new independent closure with its own private count.
// Example :
// const counter1 = createCounter();
// const counter2 = createCounter();

// counter1.increment(); // Current count: 1
// counter1.increment(); // Current count: 2

// counter2.increment(); // Current count: 1 (separate counter)
// counter2.decrement(); // Current count: 0

// counter1 has its own count variable.
// counter2 has its own separate count.
// They do not affect each other.
// Everytime we call createCounter(), a new execution context is created, and with it a new count variable, stored inside that closure.

// 2. Simulating Private Variables with Closures

function createBankAccount() {
    let balance = 0;

    function deposit(amount) {
        balance += amount;
        console.log("Deposited:", balance);
    }

    function withdraw(amount) {
        if (amount > balance) {
            console.log("Insufficient balance");
        } else {
            balance -= amount;
            console.log("Withdrawn:", balance);
        }
    }

    return {
        deposit,
        withdraw,
    };
}

//Tasks:
//Task-1: Implement the createBankAccount function.
const account = createBankAccount();
account.deposit(500); // Deposited: 500
account.withdraw(200); // Withdrawn: 300
account.withdraw(400); // Insufficient balance
console.log(account.balance); // undefined

//Task-2: How does the closure ensure that the balance variable is private?
//balance is defined inside createBankAccount(). It is not returned or exposed directly.
// Only the inner functions (deposit, withdraw, etc.) have access to it.
// Outside code (like account.balance) cannot access it because it is not part of the returned object.
// This is functional encapsulation that means a closure allows inner functions to keep using balance, but prevents outside access.

//Task-3: Modify the function to include a transactionHistory feature that stores all transactions and explain how closures enable this feature.

// function createBankAccount() {
//     let balance = 0; // private
//     let transactionHistory = []; // also private

//     function deposit(amount) {
//         balance += amount;
//         transactionHistory.push({ type: "deposit", amount, balance });
//         console.log(`Deposited: ${amount}, New Balance: ${balance}`);
//     }

//     function withdraw(amount) {
//         if (amount > balance) {
//             console.log("Insufficient balance");
//             transactionHistory.push({ type: "failed withdrawal", amount, balance });
//         } else {
//             balance -= amount;
//             transactionHistory.push({ type: "withdrawal", amount, balance });
//             console.log(`Withdrawn: ${amount}, New Balance: ${balance}`);
//         }
//     }

//     function getBalance() {
//         return balance;
//     }

//     function getTransactionHistory() {
//         return transactionHistory.slice(); // return a copy for safety
//     }

//     return {
//         deposit,
//         withdraw,
//         getTransactionHistory
//     };
// }

// const account = createBankAccount();
// account.deposit(100); // Deposited: 100, New Balance: 100
// account.withdraw(40); // Withdrawn: 40, New Balance: 60
// account.withdraw(100); // Insufficient balance
// console.log(account.getTransactionHistory());

// output :
// [
//   { type: "deposit", amount: 100, balance: 100 },
//   { type: "withdrawal", amount: 40, balance: 60 },
//   { type: "failed withdrawal", amount: 100, balance: 60 }
// ]

//Closures allow both balance and transactionHistory to behave as private, persistent variables.
// Each call to createBankAccount() creates a new balance, a new transactionHistory array and a closure that stores them.
//Even after createBankAccount() finishes running, the returned functions still have access to balance and transactionHistory.
// The closure ensures these variables can't be accessed directly, can't be modified from outside, persist across function calls and are only changed through deposit/withdraw methods.

