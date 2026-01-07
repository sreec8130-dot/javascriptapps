//objects in js
const movieinfo = {
    title: "akhanda2",
    hero: "balayya",
    director: "boyapati"
};
//how to get director name 
console.log(movieinfo.director);
console.log(movieinfo["hero"]);
//for in
for (let info in movieinfo) {
    console.log(movieinfo[info]);
}
//advanced methods
//objects.keys
Object.keys(movieinfo).forEach((key) => {
    console.log(key);
});
//object.values
Object.values(movieinfo).forEach((values) => {
    console.log(values);
});
//object.enteries
Object.entries(movieinfo).forEach((entry) => {
    console.log(entry[0]+":"+entry[1]);
});
for (let [info, infovalue] of Object.entries(movieinfo)) {
    console.log(info + " " + infovalue);
}
//nested object
const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};
console.log(myObj.cars[0].models);
//cart object
const cartitems = {
    products: [
        { pid: 100, pname: "drone", price: 15000 },
        { pid: 101, pname: "ac", price: 30000 }  
    ],
    shippingaddress:
        { street: "sita", area: "tadepalli", pincode: 522501 },
    userinfo:
        {userid:101 ,uname:"chand"}
};
console.log(cartitems.userinfo.uname);
