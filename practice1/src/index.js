function game() {
  const startBtn = document.querySelector(".start-btn");
  const shuffle = document.querySelector(".shuffle");

  let slideImg = document.querySelector(".slideImg");
  let imgArr = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyNIQL-P7OBBMLsZW_V1F2iDgSBFQc6WcNTYa37m5EaE-y2ZK_1PFVV1d66GmceEWb8OA&usqp=CAU",
    "https://sg-res.9appsdownloading.com/sg/res/jpg/e0/ec/411e206783d152e6806594eee37b-8yc1.jpg?x-oss-process=style/mq200",
    "https://blog.kakaocdn.net/dn/HcCJo/btqXD4Lybq6/kcrH6skAoOD9oAq2QYfBx1/paper.png?attach=1&knm=img.png",
  ];
  setInterval(() => {
    const img = imgArr[Math.floor(Math.random() * 3)];
    slideImg.src = img;
  }, 200);
}
game();
