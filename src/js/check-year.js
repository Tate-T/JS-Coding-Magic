const textRemove = document.querySelector("[data-remove]");
const btnYear = document.querySelector("[data-btnYear]");
const inputYear = document.querySelector("[data-inputYear]");


btnYear.addEventListener("click", () => {
    
    if (inputYear.value % 2 === 0 && inputYear.value > 0 ) {
        textRemove.textContent = "Ви народилися у високосний рік!";
        textRemove.style.color = "green";
    } else if (inputYear.value % 2 !== 0 && inputYear.value > -1) {
        textRemove.textContent = "Ви народилися не у високосний рік!";
        textRemove.style.color = "red";
    } else {
        textRemove.textContent = "Число занадто мале!";
        textRemove.style.color = "black";
    };
});
