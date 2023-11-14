const canvas = document.querySelector("#canvas");
const main = canvas.getContext("2d");
const dino = document.querySelector("#dino");
const cactus = document.querySelector("#cactus");
const startBtn = document.querySelector("[data-start]");
let start;
let sec = 0;
let x = 600;
let y = 140;
let gameOn = false;
let jumpOn = false;
let mod = -2;
let pass = true;
let jumping;

main.drawImage(dino, 30, y, 60, 60);

startBtn.addEventListener("click", () => {
  if (!gameOn) {
    start = setInterval(game, 10);
    gameOn = true;
  }
  startBtn.style.display = "none";
});

function game() {
  sec += 10;
  if (sec % 2500 === 0) {
    createCactus();
    x = 600;
  }
  moveCactus();
  if (jumpOn) {
    pass = false;
    jumping = setInterval(jump, 10);
    jumpOn = false;
  }
  gameOver();
}

function createCactus() {
  main.drawImage(cactus, x, 150, 25, 50);
}
function moveCactus() {
  main.clearRect(x, 150, 25, 50);
  x-=3;
  main.drawImage(cactus, x, 150, 25, 50);
}

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    if (pass) {
      jumpOn = true;
    }
    e.preventDefault();
  }
});

let ms = 0;
function jump() {
  ms += 10;
  if (ms === 1000) {
    clearInterval(jumping);
    pass = true;
    mod = -2;
    ms = 0;
  }
  if (ms === 500) {
    mod = 2;
  }
  main.clearRect(30, y, 60, 60);
  y += mod;
  main.drawImage(dino, 30, y, 60, 60);
}

function gameOver() {
  if (x <= 85 && x >= 5 && y + 60 >= 150) {
    main.clearRect(0, 0, 600, 200);
    gameOn = false;
    clearInterval(start);
    clearInterval(jumping);
    x = 600;
    y = 140;
    main.drawImage(dino, 30, y, 60, 60);
    sec = 0;
    pass = true;
    jumpOn = false;
  }
}