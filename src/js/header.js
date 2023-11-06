const btnOn = document.querySelector("[data-open]");
const btnOff = document.querySelector('[data-close-header]');
const beg = document.querySelector(".backdrop-header");
const nameUsir = document.querySelector(".modal__header--comment");
const textUsir = document.querySelector(".header__hiUser-text");

textUsir.addEventListener("input", (e) => {
    nameUsir.textContent = "Вітаємо, " + e.currentTarget.value + "!";
    });


btnOff.addEventListener("click", closeModal);

function closeModal() {
    beg.style.display = "none";
};