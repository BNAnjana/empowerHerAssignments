import boxen from "boxen";

const message = "I am using my first external module!";
const title = "Hurray!!!";

// Classic (default style)
console.log(
  boxen(message, {
    title: title,
    borderStyle: "classic",
    titleAlignment: "center",
    margin: 1,
    backgroundColor: "#FF8C00"
  })
);

// SingleDouble (mixed single and double borders)
console.log(
  boxen(message, {
    title: title,
    borderStyle: "singleDouble",
    titleAlignment: "center",
    margin: 1,
    backgroundColor: "white",
    color: "blue"
  })
);

// Round (rounded corners)
console.log(
  boxen(message, {
    title: title,
    borderStyle: "round",
    titleAlignment: "center",
    margin: 1,
    backgroundColor: "green"
  })
);