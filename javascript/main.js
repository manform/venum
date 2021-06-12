const menuButton = document.querySelector(".menu-button");
const men = document.querySelector(".nav-menu");
const menCloseBut = document.querySelector(".close");
menuButton.addEventListener("click", () => {
  men.classList.add("is-active");
  menCloseBut.classList.add("is-active");
});

menCloseBut.addEventListener("click", () => {
   men.classList.remove("is-active");
  menCloseBut.classList.remove("is-active");
});
