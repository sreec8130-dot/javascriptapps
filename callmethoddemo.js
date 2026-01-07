//call method
const pinfo = {
    pdetails: function (rating, price) {
        return this.pid + " " + this.pname + " " + rating + " " + price;
        
    }
}
const product = {
    pid: 123,
    pname: "samsung"
};
console.log(pinfo.pdetails.call(product, 5, 120000));