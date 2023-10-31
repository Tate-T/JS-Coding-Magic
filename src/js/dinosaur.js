const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    const dinoImage = new Image();
    dinoImage.src = "/src/img/dinosaur.png";

    const blockImage = new Image();
    blockImage.src = "/src/img/image-removebg-preview.png" ; // Змінено на нове зображення

    const dino = {
      x: 50,
      y: canvas.height - 40,
      width: 40,
      height: 40,
      speed: 5,
      jumpPower: 10,
      isJumping: false,
      image: dinoImage,
    };

    const block = {
      x: canvas.width,
      y: canvas.height - 30,
      width: 30,
      height: 30,
      speed: 5,
      image: blockImage,
    };

    let score = 0;
    let gameInProgress = true;
    let speedIncreaseInterval = 5;

    function jump() {
      if (!dino.isJumping) {
        dino.isJumping = true;
        const jumpInterval = setInterval(() => {
          if (dino.y > canvas.height - 120) {
            dino.y -= dino.jumpPower;
          } else {
            clearInterval(jumpInterval);
            const fallInterval = setInterval(() => {
              if (dino.y < canvas.height - 40) {
                dino.y += dino.jumpPower;
              } else {
                clearInterval(fallInterval);
                dino.isJumping = false;
              }
            }, 20);
          }
        }, 20);
      }
    }

    function checkCollision() {
      if (
        dino.x < block.x + block.width &&
        dino.x + dino.width > block.x &&
        dino.y < block.y + block.height
      ) {
        gameInProgress = false;
      }
    }

    function animate() {
      if (gameInProgress) {
        requestAnimationFrame(animate);
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      block.x -= block.speed;
      if (block.x < -block.width) {
        block.x = canvas.width;
        score++;
      }

      checkCollision();

      ctx.drawImage(block.image, block.x, block.y, block.width, block.height);
      ctx.drawImage(dino.image, dino.x, dino.y, dino.width, dino.height);

      ctx.fillStyle = "#000";
      ctx.font = "18px Arial";
      ctx.fillText("Рахунок: " + score, 10, 20);
    }

    document.addEventListener("keydown", (event) => {
      if (event.key === " " && !dino.isJumping) {
        jump();
      }
    });

    animate();
