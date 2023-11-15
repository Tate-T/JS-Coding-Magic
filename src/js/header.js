const btnOn = document.querySelector("[data-open]");
const btnOff = document.querySelector('[data-close-header]');
const beg = document.querySelector(".backdrop-header");
const nameUsir = document.querySelector(".modal__header--comment");
const textUsir = document.querySelector(".header__hiUser-text");
const btnModalOff = document.querySelector("[data-close-modal]");
const btnMenuOn = document.querySelector("[data-open-menu]");
const btnMenuOff = document.querySelector("[data-close-menu]");
const menu = document.querySelector("[data-menu]");

const sun = document.querySelector("[data-sun]")
const sunMoon = document.querySelector("[data-sunMoon]");
const moon = document.querySelector("[data-moon]");

sun.addEventListener("click", () => {
    sun.style.display = "none";
    moon.style.display = "block";
});

btnMenuOn.addEventListener("click", openMenu);
btnMenuOff.addEventListener("click", closeMenu);

function closeMenu() {
    menu.style.display = "none";
};

function openMenu() {
    menu.style.display = "block";
};


nameUsir.addEventListener("input", (e) => {
    textUsir.textContent = "Вітаємо, " + e.currentTarget.value + "!";
});

btnModalOff.addEventListener("click", closeModal)

btnOff.addEventListener("click", closeModal);

function closeModal() {
    beg.style.display = "none";
};