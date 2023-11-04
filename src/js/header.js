const btnOn = document.querySelector("[data-open]");
const btnOff = document.querySelector('[data-close]');
const beg = document.querySelector(".backdrop-header");


btnOff.addEventListener("click", closeModal);

function closeModal() {
    beg.style.display = "none";
};