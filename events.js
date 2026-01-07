//event logic
//alert message
function sample() {
    alert("hi");
}
let btnvalue = document.getElementById("demo");
btnvalue.addEventListener("click", sample);

function sample1() {
  alert("hello");
}
let btnvalue1 = document.getElementById("demo1");
btnvalue1.addEventListener("click", sample1);

let headervalue = document.getElementById("header");
const mouseover = () => {
    headervalue.style.color ="blue";
}
let mouseout = () => {
    headervalue.style.color = "";
}
headervalue.addEventListener("mouseover", mouseover);
headervalue.addEventListener("mouseout", mouseout);

let inputvalue = document.getElementById("ip");
let pvalue = document.getElementById("pi");
const inputvalue1 = () => {
    let uservalue = inputvalue.value;
    pvalue.textContent = uservalue;
}
inputvalue.addEventListener("inputvalue", inputvalue1);