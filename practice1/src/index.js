function game() {
  const startBtn = document.querySelector(".start-btn");
  const shuffle = document.querySelector(".shuffle");
  const btnList = document.querySelector(".button-list");

  let timer = null;
  let slideImg = document.querySelector(".slideImg");
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
    }, 200);
  };

  const compare = (me) => {};

  startBtn.addEventListener("click", (e) => {
    start();
  });

  btnList.addEventListener("click", (e) => {
    compare(e.target.classList[0]);
    clearInterval(timer);
  });
}
game();
