const btnOn = document.querySelector("[data-open]");
const btnOff = document.querySelector('[data-close-header]');
const beg = document.querySelector(".backdrop-header");
const nameUsir = document.querySelector(".modal__header--comment");
const textUsir = document.querySelector(".header__hiUser-text");
const btnModalOff = document.querySelector("[data-close-modal]");
const btnMenu = document.querySelector("#header-filter");
const menu = document.querySelector("[data-menu]");
const filters = document.querySelectorAll(".item-pages");
const games = document.querySelectorAll("section");
let act = 0;
const color = document.querySelector("[data-color]");

color.addEventListener("click", () => {
    const red = Math.random() * 255;
        const green = Math.random() * 255;
        const blue = Math.random() * 255;
        beg.style.backgroundColor = `rgb(${red}, ${green}, ${blue}, 0.9)`;
        btnModalOff.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});

const sun = document.querySelector("[data-sun]")
const sunMoon = document.querySelector("[data-sunMoon]");
const moon = document.querySelector("[data-moon]");

moon.addEventListener("click", () => {
    moon.style.display = "none";
    sun.style.display = "block";
});


sun.addEventListener("click", () => {
    sun.style.display = "none";
    moon.style.display = "block";
});

btnMenu.addEventListener("click", () => {
    menu.classList.toggle("visible");
});

nameUsir.addEventListener("input", (e) => {
    textUsir.textContent = "Вітаємо," + " " + e.currentTarget.value + "!";
});

btnModalOff.addEventListener("click", closeModal)

btnOff.addEventListener("click", closeModal);

function closeModal() {
    beg.style.display = "none";
};

const first = [0, 3, 4, 7];
const second = [1, 2, 5, 6];
const third = [8, 9];

filters[0].addEventListener("click", () => {
    if (act === 0) {
        for (let i = 0; i < games.length; i++) {
            games[i].style.display = "flex";
        }
        filters[act].classList.remove("act");
        act = -1;
    }
    else {
        for (let i = 0; i < games.length; i++){
            games[i].style.display = first.includes(i) ? "flex" : "none";
        }
        if (act !== -1) {
            filters[act].classList.remove("act");
        }
        act = 0;
        filters[act].classList.add("act");
    }
});
filters[1].addEventListener("click", () => {
    if (act === 1) {
        for (let i = 0; i < games.length; i++) {
            games[i].style.display = "flex";
        }
        filters[act].classList.remove("act");
        act = -1;
    }
    else {
        for (let i = 0; i < games.length; i++){
            games[i].style.display = second.includes(i) ? "flex" : "none";
        }
        if (act !== -1) {
            filters[act].classList.remove("act");
        }
        act = 1;
        filters[act].classList.add("act");
    }
});
filters[2].addEventListener("click", () => {
    if (act === 2) {
        for (let i = 0; i < games.length; i++) {
            games[i].style.display = "flex";
        }
        filters[act].classList.remove("act");
        act = -1;
    }
    else {
        for (let i = 0; i < games.length; i++){
            games[i].style.display = third.includes(i) ? "flex" : "none";
        }
        if (act !== -1) {
            filters[act].classList.remove("act");
        }
        act = 2;
        filters[act].classList.add("act");
    }
});