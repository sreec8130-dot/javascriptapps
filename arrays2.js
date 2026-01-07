//array in js
//ways to create array
let pnames = ["realme", "lg", "vivo", "samsuung"];// literal syntax
let prices = new Array(40000, 20000, 30000, 50000);//object syntax
//to get array values
console.log(pnames[3]);
for (let name of pnames) {
    console.log(name);
}
//using for each method
let names = pnames.forEach(
    (val) => { 
        console.log(val);
    })
//to add elements
//push,unshift,splice
pnames.push("oneplus");
console.log(pnames);
//unshift
pnames.unshift("iphone");
console.log(pnames);
//splice
pnames.splice(2, 0, "oppo", "moto");
console.log(pnames);
//remove
//pop,shift,splice,delete operator
pnames.pop();
console.log(pnames);
pnames.shift();
for (let names of pnames) {
    console.log(names);
}
pnames.splice(2, 1);
for (let names of pnames) {
  console.log(names);
}
//delete pnames[3];
//or (let names of pnames) {
 // console.log(names);
//}
//portion of an array
//slice method
console.log(pnames.slice(2, 4));
console.log(pnames.slice(-4, -2));
//to search
//index of,last index of,includes,find are the methods
console.log(pnames.indexOf("realme"));//from left to right
//sort
console.log(pnames.sort());
console.log(pnames.reverse());
//array advanced method(ES6)
//reduce
let sum = prices.reduce((total, val) => {
    return total + val;
});
console.log(sum);
//map
let offerprice = prices.map((val) => {
    return val - 5000;

});
console.log(offerprice);
//to concate
let pnames1 = ["iphone", "moto"];
console.log(pnames.concat(pnames1));
//spread operator
let brands = [...pnames, ...pnames1];
console.log(brands);