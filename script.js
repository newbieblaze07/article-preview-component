const smBtn = document.getElementById("sm-btn");
const articleBox = document.querySelector(".article-box");
const shareBox = document.querySelector(".sm-accs");

smBtn.addEventListener("click", function () {
  if (window.innerWidth <= 767) {
    articleBox.classList.toggle("active"); // mobile behavior
  } else {
    shareBox.classList.toggle("desktop-active"); // desktop popup
  }
});