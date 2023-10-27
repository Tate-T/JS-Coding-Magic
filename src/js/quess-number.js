const buttonUserNumber = document.querySelector("#update-btn-quest-number");
const inputUserNumber = document.querySelector("#counter-quest-number");
const textUserNumber = document.querySelector("#number-counter");

buttonUserNumber.addEventListener("click", () => {
    const computerRandomNumber = Math.floor(Math.random() * 10) + 1;
 let inputUserNumber2 = inputUserNumber.value 

    if (inputUserNumber2 === computerRandomNumber) {
        textUserNumber.textContent = `Вітаю, ви вгадали число! ${computerRandomNumber}`
    } else {
        textUserNumber.textContent = `Ви програли, комп’ютер загадав ${computerRandomNumber}`
    }
})





