let numberofdays = 365;
let years = 365;
let month = 30;
let resultyears = numberofdays / years;
console.log(Math.floor(resultyears));
numberofdays= numberofdays % years;
let resultmonth = numberofdays / month;
console.log(Math.floor(resultmonth));
console.log(numberofdays % month);