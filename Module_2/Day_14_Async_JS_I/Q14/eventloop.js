//  Debugging Event Loop Order

console.log("Begin");

setTimeout(() => { 
    console.log("Timeout Task"); 
}, 0);

Promise.resolve().then(() => { 
    console.log("Promise Task"); 
});

console.log("End");

// Output:
// Begin
// End
// Promise Task
// Timeout Task

// The given code is correct and it gives in output the correct order as it is.

// Why this is the correct order:
// JavaScript executes code using two main queues:-

// 1. Call Stack (Synchronous code) - Runs immediately, top to bottom.

// 2. Microtask Queue (Promises) - Runs after the call stack is empty but before any macrotasks.

// 3. Macrotask Queue (setTimeout, setInterval, I/O, etc.) - Runs after all microtasks finish.

// Step-1: Synchronous code executes first. So, Begin and End gets displayed first.
// Stpe-2: Promise goes to the microtask queue and executes after synchronous code but before setTimeout.
// So the next output is Promise Task
// Step-3: setTimeout goes to the macrotask queue. Even with a delay of 0, it still waits for all synchronous code and all microtasks (Promises).
// So finally Timeout Task is displayed. This happens because microtasks always run before macrotasks, regardless of timeout delay.