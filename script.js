let input = document.querySelector(".input");
let clearButton = document.querySelector(".clear");
let equalsButton = document.querySelector(".equals");
let result = document.querySelector(".result");
let doggieAge = document.querySelector(".doggieAge");
let golden2=document.querySelector(".golden2");
golden2.style.display="none";
let golden1= document.querySelector(".golden1");
const calculateDoggieAge = (humanAge) => {
    let doggieAge = humanAge * 7;
  result.innerHTML =
    "Your doggie is " + "" + doggieAge + " years old in human years!";
 
  console.log(doggieAge);
};

equalsButton.addEventListener("click", () => {
let x= Number(input.value);
  console.log(x)
  calculateDoggieAge(x);
  golden2.style.display="block";
  golden1.style.display="none";
});

clearButton.onclick = function () {
  input.value = "";
  result.innerHTML = "";
  golden1.style.display="block";
  golden2.style.display="none";
};