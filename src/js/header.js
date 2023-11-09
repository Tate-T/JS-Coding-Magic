const btnOn = document.querySelector("[data-open]");
const btnOff = document.querySelector('[data-close-header]');
const beg = document.querySelector(".backdrop-header");
const nameUsir = document.querySelector(".modal__header--comment");
const textUsir = document.querySelector(".header__hiUser-text");
const btnModalOff = document.querySelector("[data-close-modal]");

nameUsir.addEventListener("input", (e) => {
    textUsir.textContent = "Вітаємо, " + e.currentTarget.value + "!";
});



btnModalOff.addEventListener("click", closeModal)

btnOff.addEventListener("click", closeModal);

function closeModal() {
    beg.style.display = "none";
};