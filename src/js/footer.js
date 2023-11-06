const btnOn = document.querySelector("[data-open]");
const btnOff = document.querySelector('[data-close]');
const beg = document.querySelector(".backdrop");



function openModal() {
    beg.style.display = "block";
};

btnOn.addEventListener("click", openModal);


btnOff.addEventListener("click", closeModal);

function closeModal() {
    beg.style.display = "none";
};

