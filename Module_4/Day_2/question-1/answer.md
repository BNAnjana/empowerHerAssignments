1. Node.js Architecture :

Node.js is a runtime environment that allows JavaScript to run outside the browser.

Its architecture is designed for high performance.

Key Components:

1.JavaScript Engine (V8)

2.Node.js Core APIs

3.Native Bindings

4.Event Loop

5.libuv

6.Thread Pool

All these components work together to provide asynchronous execution.

a. JavaScript Engine (V8) : 

V8 is a high-performance JavaScript engine which is written in C++.

It is used to parse JavaScript code and compiles it to machine code. 

It executes JS synchronously on a single main thread.

It handles call stack, heap memory and garbage collection.

b. Node.js Core APIs :

These are JavaScript APIs provided by Node.js like fs, http, net, crypto, path, os, timers.

They provide server-side capabilitites.

These APIs acts as a bridge between JS and system resources.

Example: 

const fs = require('fs');

fs.readFile('file.txt', callback);

c. Native Bindings :

Native bindings are C/C++ code that connect JavaScript (V8) and Low-level system operations via libuv or OS APIs.

JS can't directly access file systems, create sockets and perform system calls. So it needs native bindings to perform these actions.

d. Event Loop :

The event loop is the heart of Node.js asynchronous execution.

Event loop allows Node.js to perform non-blocking I/O.

It executes callbacks when async operations complete.

JavaScript runs on a single thread, but Node.js can handle many concurrent operations using the event loop.

2. libuv

a. What is libuv?

libuv is a C library that provides:

Event loop implementation

Asynchronous I/O

Thread pool

Cross-platform abstractions

Platforms supported:
Linux

macOS

Windows

b. Why Node.js Needs libuv?

JavaScript and V8:

Do not understand operating system APIs.

Cannot perform async I/O directly.

libuv:

Talks to the OS.

Handles I/O efficiently.

Provides a consistent API across platforms.

c. Responsibilities of libuv

Event loop implementation

Non-blocking file system operations

Networking (TCP/UDP)

Timers

Signal handling

Thread pool management

3. Thread Pool

a. What is a Thread Pool?

A thread pool is a set of background threads used to execute blocking or CPU-heavy tasks.

The default size is 4 threads.

b. Why Node.js Uses a Thread Pool?

Some OS operations do not support non-blocking APIs.

They would block the event loop if run on the main thread.

To prevent this, Node.js offloads them to the thread pool.

c. Which operations are handled by the thread pool?

Operations handledby thread pool are:

File system operations (fs.readFile, fs.writeFile)

DNS lookups (dns.lookup)

Cryptographic operations (crypto.pbkdf2, crypto.scrypt)

Compression (zlib)

4. Worker Threads

a. What are worker threads?

Worker threads allow true parallel execution of JavaScript using multiple threads.

Introduced in Node.js to handle CPU-intensive tasks.

Example:

const { Worker } = require('worker_threads');

b. Why are worker threads needed?

Node.js main thread must remain responsive

It should not be blocked by heavy computation

Worker threads:

Run JavaScript in separate V8 instances

Prevent blocking of the event loop

c. Difference between thread pool and worker threads

Thread Pool:

It executes native C/C++ tasks.

It is managed by libuv.

It is used for I/O and blocking system tasks.

It's parallelism is limited.

It communicates internally.

Worker Threads:

It executes JavaScript code.

It is managed by Node.js

It is  used for CPU-heavy JS logic.

It's has True JS parallelism.

It communicates by message passing.

5. Event Loop Queues

a. Macro Task Queue:

It contais tasks scheduled by external or asynchronous APIs.

Examples:

setTimeout

setInterval

setImmediate

I/O callbacks

HTTP requests

Example:

setTimeout(() => console.log('timeout'), 0);

b. Micro Task Queue:

Contains tasks that must be executed immediately after the current operation.

Examples:

Promise.then()

Promise.catch()

queueMicrotask()

process.nextTick()

Example:

Promise.resolve().then(() => console.log('promise'));

c. Execution prioritybetween them:

Execution order:

Current synchronous code

Microtask queue

Macrotask queue

Repeat

An important Rule is microtasks always run before the next macrotask.

process.nextTick() runs before all other microtasks.

d. Examples of tasks ineach queue:

console.log('start');

setTimeout(() => console.log('timeout'), 0);

Promise.resolve().then(() => console.log('promise'));

process.nextTick(() => console.log('nextTick'));

console.log('end');

output:

start

end

nextTick

promise

timeout
