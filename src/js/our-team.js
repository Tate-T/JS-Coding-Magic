const left = document.querySelector("[data-left]");
const right = document.querySelector("[data-right]");
const fullName = document.querySelector("[data-name]");
const des = document.querySelector("[data-description]");
const bars = document.querySelectorAll(".part");
let index = 0;

const members = [

  {
    name: "Андрій Федак",
    description: "Зробив header, footer, розмітку і стилі меню, модалки(header, footer)",
  },
  {
    name: "Ясінський Вячеслав",
    description:
      "Протягом роботи над проектом я виконав секції такі як: <br> 'Калькулятор Часу', 'Футбол', 'Динозавр', 'Наша Команда' та 'Обери Вченого'",
  },
  {
    name: "Степан Ричихін",
    description:
      "За час проекту я виконав такі завдання як: <br> 'Вгадай Число', 'Камінь-Ножиці-Папір', 'Калькулятор' та 'Найбільше Число'. <br> На моя думку я навідмінно виконав завдання. <br> Я вважаю наша команда чудова, якщо б я замовляв сайт у цієї компанії, <br> то я б поставив 5 зірок і залишив чайові у розмірі 456000$ й залишив відгук: Крута компанія ' ', я б її купив, але не вистачає грошей",
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


