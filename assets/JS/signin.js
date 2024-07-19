var eMail=document.querySelector("#signin-email");
var passWord=document.querySelector("#signin-password");
var loginButton=document.querySelector("#login")
var valid=document.querySelector("#not-valid")
var users;
if(localStorage.getItem('users')==null){
    users=[]
}else{
    users=JSON.parse(localStorage.getItem('users'))

}
function userExistsOrNot(email,pass){
    let flag=0
    let user=''
    for(var i=0 ; i<users.length ;i++ ){
        if(users[i].email==email && users[i].password==pass){
            flag=1
            user=users[i].name
            break
        }
    }
    if(flag!=0){
        valid.classList.add('d-none')
        localStorage.setItem("currentuser",JSON.stringify(users[i].name))
        window.location.href="mainPage.html"
    }else{
        valid.classList.remove('d-none')
    }
}


loginButton.addEventListener("click",function(){
    userExistsOrNot(eMail.value,passWord.value)
})
