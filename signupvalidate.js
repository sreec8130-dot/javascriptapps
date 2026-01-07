//validation logic
function validate() {
  //request data gathering logic
  let user_name = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let confirm_password = document.getElementById("confpassword").value;
  let mobile_no = document.getElementById("mobile no").value;
  let email = document.getElementById("email").value;
  let regex = /[a-z][A-Z]/;
  let mbregex = /[0-9]{10}/;
  //validation logic
  if (user_name === "") {
    alert("please enter username");
    return false;
  }
  if (password == "") {
    alert("please enter password");
    return false;
  }
  if (password.length < 8 || password.length > 12) {
    alert("password should be 8 characters and 12 characters");
    return false;
  }
  if (regex.test(password)) {
    alert(
      "password should be cominating of small letters,captial letters,numbers"
    );
    return false;
  }
  if ((confirm_password = "")) {
    alert("enter correct password");
    return false;
  }
  if ((mobile_no = "")) {
    alert("please enter mobile number");
    return false;
  }
  if (mobile_no.length < 10) {
    alert("10digits only");
    return false;
  }
  if (!mbregex.test(mobile_no)) {
    alert("enter 10 numbers only");
    return false;
  }
  if ((email = "")) {
    alert("please enter mail");
    return false;
  }

  return true;
}
