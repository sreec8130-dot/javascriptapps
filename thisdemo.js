//this keyword
const emp_info = {
    firstname: "chandana",
    lastname: "Yanamadala",
    fullname: function () {
        return this.firstname + " " + this.lastname;
    }
};
console.log(emp_info.fullname());