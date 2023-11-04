const inputCalculator1 = document.querySelector("#counter-calkulator1");
const inputCalculator2 = document.querySelector("#counter-calkulator2");

const buttonPlusCalculator = document.querySelector("#plus-button");
const buttonuMltiplateCalculator = document.querySelector("#plus-umltiplate");
const buttonuMinusCalculator = document.querySelector("#plus-minus");
const buttonDavidetCalculator = document.querySelector("#plus-divadet");

const buttonDorivneneCalculator = document.querySelector("#button-equal");

const textResultCalculator = document.querySelector("#text-redult");

let sign;



buttonDorivneneCalculator.addEventListener("click", () => {
if (sign === "+") {
    textResultCalculator.textContent = Number(inputCalculator1.value) + Number(inputCalculator2.value);
} 
else if (sign === "-") {
    textResultCalculator.textContent = Number(inputCalculator1.value) - Number(inputCalculator2.value);
} else if (sign === "*") {
    textResultCalculator.textContent = Number(inputCalculator1.value) * Number(inputCalculator2.value);
} else if (sign === "/") {
    textResultCalculator.textContent = Number(inputCalculator1.value) / Number(inputCalculator2.value);
} else {
    textResultCalculator.textContent = "error";
}
});

buttonPlusCalculator.addEventListener("click", (e) => {
sign = "+";
// e.currentTarget.style.color = "green"
});

buttonuMltiplateCalculator.addEventListener("click", (e) => {
    sign = "*";
    // e.currentTarget.style.color = "green"
});


buttonuMinusCalculator.addEventListener("click", (e) => {
    sign = "-";
    // e.currentTarget.style.color = "green"
  });


  buttonDavidetCalculator.addEventListener("click", (e) => {
    sign = "/";
    // e.currentTarget.style.color = "green"
  });

