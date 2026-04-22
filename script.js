const smBtn=document.getElementById("sm-btn")
const articleBox=document.querySelector(".article-box")
const revertBtn=document.getElementById("revert-btn")

smBtn.addEventListener("click",function(){
  articleBox.classList.add("active")
})
revertBtn.addEventListener("click", function(){
  articleBox.classList.remove("active")
})