//without clouser
let counter = 1;
const counter_result = () => {
    let counter = 0;//global variable
    counter += 1;
    return counter;
}
console.log(counter_result());
console.log(counter_result());
console.log(counter_result());