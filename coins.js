let form = document.querySelector(".form");
let sel1 = document.querySelector(".sel1");
let btn = document.querySelector(".transformation");
let sel2 = document.querySelector(".sel2").value;
let inp1 = document.querySelector(".inp1");
form.onsubmit = function(){
    let Pound = document.querySelector(".Pound");
let result = parseFloat(sel1.value).toFixed(2)
let inpe = parseFloat(inp1.value).toFixed(2)
Pound.value=`${result*inpe}`
return false;
}
