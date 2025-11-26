// Building a Countdown Timer with Both setTimeout and setInterval

let time = prompt("Enter no. of seconds to count down: ");

const intervalId = setInterval(() => {  
  console.log("Remaining Time: ",time);
  time--;
  if (time === 0) {
    clearInterval(intervalId);
    console.log("Countdown Complete!");
   }  
}, 1000);

// Function to check for user input with delay
function checkForStop() {
  setTimeout(() => {
    document.addEventListener("keydown", (event) => {
      if (event.key.toLowerCase() === "s") {
        clearInterval(intervalId);
        console.log("Countdown Stopped by User!");
      }
    });
  }, 500);
}
checkForStop();