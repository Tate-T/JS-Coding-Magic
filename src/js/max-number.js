
let maxNumber1 = document.querySelector("#counter-max-number1");
let maxNumber2 = document.querySelector("#counter-max-number2");
let maxNumber3 = document.querySelector("#counter-max-number3");

  const text = document.querySelector("#text-redult-max");


if (maxNumber1.value == NaN || maxNumber2.value == NaN || maxNumber2.value == NaN) {
    text.textContent ="gg"
} else {
  text.textContent = findMaxNumber()
}


    function findMaxNumber(maxNumber1, maxNumber2, maxNumber3) {
        return Math.max(maxNumber1.value, maxNumber2.value, maxNumber3.value);
      
    }









