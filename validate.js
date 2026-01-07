//validation logic
function validate() {
    //request data gathering logic
    let user_name = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let regex = /[a-z][A-Z]/;
    //validation logic
    if (user_name == "") {
        alert("please enter username");
        return false;
    }
    if (password == "") {
        alert("please enter password");
        return false;
    }
    if (password.length < 8 || password.length>12) {
        alert("password should be 8 characters and 12 characters");
        return false;
    }
    if (regex.test(password)) {
        alert("password should be cominating of small letters,captial letters,numbers");
        return false;
    }
    return true;
}