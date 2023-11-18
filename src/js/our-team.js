const left = document.querySelector("[data-left]");
const right = document.querySelector("[data-right]");
const fullName = document.querySelector("[data-name]");
const des = document.querySelector("[data-description]");
const bars = document.querySelectorAll(".part");
let index = 0;

const members = [
    {
        name: "Андрій Федак",
        description: "Зробив header, footer, розмітку і стилі меню, модалки(header, footer)"
    },
    {
        name: "Ясінський Вячеслав",
        description: "text"
    },
    {
        name: "Степан Ричихін",
        description: "text"
    },
];

fullName.textContent = members[0].name;
des.innerHTML = members[0].description;
bars[0].style.width = "40px";
bars[0].style.backgroundColor = "#868686";
left.addEventListener("click", () => {
    if (index - 1 >= 0) {
        index-=1;
        fullName.textContent = members[index].name;
        des.innerHTML = members[index].description;
        bars[index+1].style.width = "25px";
        bars[index+1].style.backgroundColor = "#e3e3e3";
        bars[index].style.width = "40px";
        bars[index].style.backgroundColor = "#868686";
    }
    else {
        return false;
    }
});
right.addEventListener("click", () => {
    if (index + 1 < members.length) {
        index+=1;
        fullName.textContent = members[index].name;
        des.innerHTML = members[index].description;
        bars[index-1].style.width = "25px";
        bars[index-1].style.backgroundColor = "#e3e3e3";
        bars[index].style.width = "40px";
        bars[index].style.backgroundColor = "#868686";
    }
    else {
        return false;
    }
});


