//functions in js
function showMessage() {
    console.log("hi");
}
showMessage();
//function with parameters
function sumofnumbers(a, b) {
    console.log(a + b);
}
sumofnumbers(10, 30);
//return a value from a function
function mulofnumbers(a, b) {
    return a * b;
}
let x = mulofnumbers(10, 20);
console.log(x);
//ES6 new function
//arrow function
const arrowdemo = () => {
    console.log("arrow demo");
}
arrowdemo();
//arrow function with parameters
const addnumbers = (a, b) => {
    console.log(a + b);
}
addnumbers(10, 40);
// in a simpleway
const addnums1 = (a, b) => a + b;
console.log(addnums1(10, 20));
//with return
const mulnum2 = (num1, num2) => num1 * num2;
console.log(mulnum2(10, 20));
//without return
const mulnum3 = (num1, num2) => num1 * num2;
//rest parameter
const printnumbers = (a, b,...c) => {
    console.log(a);
    console.log(b);
    console.log(...c);
}
printnumbers(10, 20, 30, 40, 50);
//default parameter
const sumofnum = (a=10, b) => {
    console.log(a + b);
}
sumofnum(40);

    
