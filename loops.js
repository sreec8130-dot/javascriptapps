//loops in js
//for loop
for (let i =1 ; i <= 10; i++) {
    console.log(i);
}
//while loop
let j = 1;
while (j <= 10) {
    console.log(j);
    j++;
}
//dowhile loop
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 10);
//new loops in ES6
//for in and for of
//these loops are used to reterive data from iterables(which can used to handle bulk of data eg:arrays,strings)
let pnames = ["samsung", "iphone", "vivo", "realme"];
for (let names of pnames) { 
    console.log(names);
}
let pnames1 = ["samsung", "iphone", "vivo", "realme"];
for (let names in pnames1) {
  console.log(pnames1[names]);
}
let empinfo = {
    eid: 1001,
    ename: "chand",
    esal:60000
}
for (let info in empinfo) {
    console.log(empinfo[info]);
}
//how to reterive from string
let cllgname = "vignan";
for (let name of cllgname) {
    console.log(name);
}