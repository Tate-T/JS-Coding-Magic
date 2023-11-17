const maxNumber1 = document.querySelector("#counter-max-number1");
const maxNumber2 = document.querySelector("#counter-max-number2");
const maxNumber3 = document.querySelector("#counter-max-number3");

  const text = document.querySelector("#text-redult-max");


  document.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        const maxNumber = Math.max(maxNumber1.value, maxNumber2.value, maxNumber3.value);
    text.textContent = maxNumber;
    } else {
        console.log("error");
    }
    
  })
 




