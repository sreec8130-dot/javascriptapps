//apply method
const sinfo = {
    sdetails: function (qualification, phoneno) {
        return this.srollno + " " + this.sname + " " + qualification + " " + phoneno;
    }
};
const student = {
    srollno: 12,
    sname: "chandana"
};
console.log(sinfo.sdetails.apply(student, ["btech", 9110346653]));