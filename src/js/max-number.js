
let maxNumber1 = document.querySelector("#counter-max-number1").value;
let maxNumber2 = document.querySelector("#counter-max-number2").value;
let maxNumber3 = document.querySelector("#counter-max-number3").value;

  const text = document.querySelector("#text-redult-max");


if (maxNumber1.value == NaN || maxNumber2.value == NaN || maxNumber2.value == NaN) {
    text.textContent ="gg"
} else {
    findLargestNumber()
}

function findLargestNumber() {
    console.log(maxNumber1.value);

    maxNumber1 = parseFloat(maxNumber1);
    maxNumber2 = parseFloat(maxNumber2);
    maxNumber3 = parseFloat(maxNumber3);

    const largestNumber = Math.max(maxNumber1, maxNumber2, maxNumber3);
    
    text.textContent = largestNumber;
}






