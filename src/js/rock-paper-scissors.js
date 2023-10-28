const rockButton = document.querySelector("#update-btn-roock-paper-scissors1");
const papirButton = document.querySelector("#update-btn-roock-paper-scissors2");
const sosikaliusButton = document.querySelector("#update-btn-roock-paper-scissors3");
const text = document.querySelector("#text");
const buttonText = document.querySelector("#button");
const compWinText = document.querySelector("#comp-win-conteiner");
const userWinText = document.querySelector("#user-win-conteiner");
const buttonImg = document.querySelector("#button-img");


let compWin = 0;
let userWin = 0;
compWinText.textContent = `Комп’ютер - ${compWin}`
userWinText.textContent = `ви - ${userWin}`




sosikaliusButton.addEventListener("click", () => {
    const objRandom = [ "камінь", "папір", "ножниці"];
    const computerRandomNumber = Math.floor(Math.random() * 3);
const random = objRandom[computerRandomNumber];

if (random === "ножниці") {
    buttonImg.src = "../img/sosikalus.png"
} else if (random === "камінь") {
    buttonImg.src = "../img/rock.png"
} else {
    buttonImg.src = "../img/papirus.png"
}{
    
}

    if ("ножниці" === random) {
        text.textContent = "Нічия"
        text.classList.add("nokoko")
        text.classList.remove("win")
        text.classList.remove("loose")


    } else if (random === "папір") {
        text.textContent = "Виграв"
        text.classList.add("win")
        text.classList.remove("loose")
        text.classList.remove("nokoko")
        userWin = compWin + 1;
        userWinText.textContent = `Ви - ${userWin}`
    } else {
        text.textContent = "Програв"
        text.classList.add("loose")
        text.classList.remove("win")
        text.classList.remove("nokoko")
        compWin = compWin + 1;
        compWinText.textContent = `Комп’ютер - ${compWin}`
    }}

    
)





papirButton.addEventListener("click", () => {
    const objRandom = [ "камінь", "папір", "ножниці"];
    const computerRandomNumber = Math.floor(Math.random() * 3);
const random = objRandom[computerRandomNumber];

if (random === "папір") {
    buttonImg.src = "../img/papirus.png"
} else if (random === "камінь") {
    buttonImg.src = "../img/rock.png"
} else {
    buttonImg.src = "../img/sosikalus.png"
}{
    
}

    if ("папір" === random) {
        text.textContent = "Нічия"
        text.classList.add("nokoko")
        text.classList.remove("win")
        text.classList.remove("loose")


    } else if (random === "камінь") {
        text.textContent = "Виграв"
        text.classList.add("win")
        text.classList.remove("loose")
        text.classList.remove("nokoko")
        userWin = compWin + 1;
        userWinText.textContent = `Ви - ${userWin}`
    } else {
        text.textContent = "Програв"
        text.classList.add("loose")
        text.classList.remove("win")
        text.classList.remove("nokoko")
        compWin = compWin + 1;
        compWinText.textContent = `Комп’ютер - ${compWin}`
    }}

    
)






rockButton.addEventListener("click", () => {
    const objRandom = [ "камінь", "папір", "ножниці"];
    const computerRandomNumber = Math.floor(Math.random() * 3);
const random = objRandom[computerRandomNumber];

if (random === "камінь") {
    buttonImg.src = "../img/rock.png"
} else if (random === "папір") {
    buttonImg.src = "../img/papirus.png"
} else {
    buttonImg.src = "../img/sosikalus.png"
}{
    
}

    if ("камінь" === random) {
        text.textContent = "Нічия"
        text.classList.add("nokoko")
        text.classList.remove("win")
        text.classList.remove("loose")


    } else if (random === "ножниці") {
        text.textContent = "Виграв"
        text.classList.add("win")
        text.classList.remove("loose")
        text.classList.remove("nokoko")
        userWin = compWin + 1;
        userWinText.textContent = `Ви - ${userWin}`
    } else {
        text.textContent = "Програв"
        text.classList.add("loose")
        text.classList.remove("win")
        text.classList.remove("nokoko")
        compWin = compWin + 1;
        compWinText.textContent = `Комп’ютер - ${compWin}`
    }}

    
)












