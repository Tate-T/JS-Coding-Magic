const btnOn = document.querySelector("[data-action]");
const btnOff = document.querySelector(`button[data-action="close-modal"]`);

function openModal() {
    document.body.classList.add("show-modal");
};

btnOn.addEventListener("click", openModal);


btnOff.addEventListener("click", closeModal);
function closeModal() {
    document.body.classList.remove("show-modal");
};