const buttonUserNumber = document.querySelector("#update-btn-quest-number");
const inputUserNumber = document.querySelector("#counter-quest-number");
const textUserNumber = document.querySelector("#number-counter");
const textContentUser = inputUserNumber.textContent;

buttonUserNumber.addEventListener("click", () => {
    const computerRandomNumber = Math.floor(Math.random() * 10) + 1;
    
    if (textContentUser === computerRandomNumber) {
        textUserNumber.textContent = `Вітаю, ви вгадали число! ${computerRandomNumber}`
    } else {
        textUserNumber.textContent = `Ви програли, комп’ютер загадав ${computerRandomNumber}`
    }
})
// const користувач_варіант = parseInt(document.getElementById("користувач_варіант").value);














