var eid = 1001;
console.log(typeof (eid));
var ephone = 9110346653;
console.log(typeof (ephone));
var ename = "chand";
console.log(typeof (ename));
var contract_emp = true;
console.log(typeof (contract_emp));
var pf;
console.log(typeof (pf));
var esi = null;
console.log(typeof (esi));
var desg = ["developer", "hr", "manager"];
console.log(typeof (desg));
var cust_info = {
    c_id: 123,
    c_name: "chand",
    c_add: "vijayawada"
};
console.log(typeof (cust_info));
//advanced datatypes(es6)//
var tcs_turnover = BigInt(1234567890123412345);
console.log(typeof (tcs_turnover));
var p_name = Symbol("samsung");
var p_name1 = Symbol("samsung");
console.log(typeof (p_name));
console.log(p_name == p_name1);