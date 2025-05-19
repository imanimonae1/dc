let input = document.querySelector(".input");
let clearButton = document.querySelector(".clear");
let equalsButton = document.querySelector(".equals");
let result = document.querySelector(".result");
let doggieAge = document.querySelector(".doggieAge");

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
});

clearButton.onclick = function () {
  input.value = "";
  result.innerHTML = "";
};