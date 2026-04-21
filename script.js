const smBtn=document.getElementById("sm-btn")
const articleBox=document.querySelector(".article-box")

smBtn.addEventListener("click",function(){
  articleBox.classList.toggle("active")
})