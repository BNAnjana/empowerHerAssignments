// Asynchronous Timer with Callback

function timer(duration,onComplete) {
    setTimeout(() => {
        const message = `Timer of ${duration} ms finished`;
        onComplete(message);
    }, duration);
}

timer(3000, (msg) => {
    console.log(msg); // After 3 seconds: "Timer of 3000 ms finished"
});