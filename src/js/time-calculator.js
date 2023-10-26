const counter = document.querySelector("#counter");
const output = document.querySelector("#time-counter");
const updateBtn = document.querySelector("#update-btn");

updateBtn.addEventListener("click", () => {
    const days = Math.floor((counter.value / 60) / 24);
    const hours = Math.floor(counter.value / 60 % 24);
    const min = counter.value % 60;
    if (counter.value > 525599) {
        output.style.color = "red";
        output.textContent = "Error! Too big number";
    }
    else if (counter.value < 0) {
        output.style.color = "red";
        output.textContent = "Error! Too small number";
    }
    else if (counter.value === "") {
        output.style.color = "red";
        output.textContent = "Error! Enter a number";
    }
    else if (counter.value == 0) {
        output.style.color = "black";
        output.textContent = `0дн. 00:00`;
    }
    else if(hours <= 9 && min <= 9){
        output.style.color = "black";
        output.textContent = `${days}дн. 0${hours}:0${min}`;
    }
    else if(hours <= 9){
        output.style.color = "black";
        output.textContent = `${days}дн. 0${hours}:${min}`;
    }
    else if(min <= 9){
        output.style.color = "black";
        output.textContent = `${days}дн. ${hours}:0${min}`;
    }
    else {
        output.style.color = "black";
        output.textContent = `${days}дн. ${hours}:${min}`;
    }
});
