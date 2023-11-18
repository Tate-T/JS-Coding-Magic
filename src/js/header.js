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

const foooter = document.querySelector("footer");
const header = document.querySelector("header");
const main = document.querySelector(".container");
const bio = document.querySelector("body");
const headerLogo = document.querySelector(".header__logo--icon");
const footerLogo = document.querySelector(".footer__logo--icon");
const headerIconDown = document.querySelector(".icon-header__list");
const headerPage = document.querySelectorAll(".header__item-page");




moon.addEventListener("click", () => {
    moon.style.display = "none";
    sun.style.display = "block";



    headerPage.style.color = "black";
    footerLogo.style.fill = "black";
    headerIconDown.style.fill = "black";
    foooter.style.backgroundColor = "white";
    header.style.backgroundColor = "white";
    main.style.backgroundColor = "white";
    headerLogo.style.fill = "black";
    textUsir.style.color = "black";
    menu.style.backgroundColor = " rgb(247, 247, 247)";
    bio.style.color = "black";
    headerPage.forEach((el) => {
        el.style.color = "black";
    });
});


sun.addEventListener("click", () => {
    sun.style.display = "none";
    moon.style.display = "block";


    footerLogo.style.fill = "white";
    headerLogo.style.fill = "white";
    bio.style.color = "white";
    textUsir.style.color = "white";
    headerIconDown.style.fill = "white";
    menu.style.backgroundColor = "#adacac";
    foooter.style.backgroundColor = "#adacac";
    header.style.backgroundColor = "#adacac";
    main.style.backgroundColor = "#adacac";
    headerPage.forEach((el) => {
        el.style.color = "white";
    });
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