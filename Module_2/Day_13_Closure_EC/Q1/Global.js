// Understanding Global and Function Execution Context

let age = 19;
function displayAge() {
    console.log("Age inside displayAge() is :",age);
}
function changeAge() {
    let age = 22;
    console.log("Age inside changeAge() is :",age);
}

displayAge();
changeAge();