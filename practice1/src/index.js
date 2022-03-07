function game() {
  const startBtn = document.querySelector(".start-btn");
  const shuffle = document.querySelector(".shuffle");
  const btnList = document.querySelector(".button-list");
  let slideImg = document.querySelector(".slideImg");

  let timer = null;
  let prevName = "scissors";
  let imgArr = [
    {
      shape: "✌🏼",
      name: "scissors",
    },
    {
      shape: "✊🏼",
      name: "rock",
    },
    {
      shape: "✋🏼",
      name: "paper",
    },
  ];

  const start = () => {
    timer = setInterval(() => {
      const img = imgArr[Math.floor(Math.random() * 3)];
      slideImg.innerHTML = img.shape;
      slideImg.classList.replace(prevName, img.name);
      prevName = img.name;
    }, 100);
  };

  const compare = (me) => {
    clearInterval(timer);
    timer = null;

    const op = slideImg.classList[0];
    console.log(op);

    if (me === op) {
      alert("비겼습니다");
      return;
    }

    if (me === "scissors") {
      if (op === "rock") {
        alert("졌습니다");
      } else {
        alert("이겼습니다");
      }
    }

    if (me === "rock") {
      if (op === "paper") {
        alert("졌습니다");
      } else {
        alert("이겼습니다");
      }
    }
    if (me === "paper") {
      if (op === "scissors") {
        alert("졌습니다");
      } else {
        alert("이겼습니다");
      }
    }
  };

  startBtn.addEventListener("click", (e) => {
    start();
  });

  btnList.addEventListener("click", (e) => {
    compare(e.target.classList[0]);
  });
}
game();
