//with clouser
const counterresult = (() => {
    let counter = 0;
    return function(){
        counter += 1;
        return counter;
    }
})();//self invoking function()
console.log(counterresult());
console.log(counterresult());
console.log(counterresult());