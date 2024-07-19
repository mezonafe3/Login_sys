var userSessionName=document.querySelector("#user-session")
var logoutButton=document.querySelector("#logout")
userSessionName.innerHTML=`${JSON.parse(localStorage.getItem("currentuser"))}`

logoutButton.addEventListener("click",function(){
    window.location.href="index.html"
})