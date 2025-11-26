// Simulating a Loading Screen with setInterval

let count = 0;  
const intervalId = setInterval(() => {  
  console.log("Loading...");
  count++;
  if (count === 5) {
    clearInterval(intervalId); // Stops after 5 counts
    console.log("Loaded successfully!");
   }  
}, 1000);
