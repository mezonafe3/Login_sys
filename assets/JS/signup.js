var uName=document.querySelector("#name");
var eMail=document.querySelector("#email");
var passWord=document.querySelector("#password");
var signupButton=document.querySelector("#signup")
var usNameValidte=document.querySelector('#username-validate')
var emailValidte=document.querySelector('#email-validate')
var passValidate=document.querySelector('#password-validate')
var succesMsg=document.querySelector('#success-msg')
var emailExists=document.querySelector('#user-exists')

if(localStorage.getItem('users') == null){
    neWusers = []
}else{

    var neWusers=JSON.parse(localStorage.getItem('users'));
}

function signUp(){
    validteFields()
    if(isValid()){
        var user={
            name:uName.value,
            email:eMail.value,
            password:passWord.value
        }
        if(userExistsOrNot(user.email,user.name)){
            emailExists.classList.remove("d-none")
        }else{
            neWusers.push(user)
            localStorage.setItem("users",JSON.stringify(neWusers))
            succesMsg.classList.remove("d-none")
            emailExists.classList.add("d-none")
            setTimeout(()=>{window.location.href="index.html"},2000)
         }
    }else{
        succesMsg.classList.add("d-none")
    }
}
function isValid(){
    return (/^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/.test(uName.value)&&/[\w.]+@[\w]+\.[a-zA-Z]/.test(eMail.value)&&/^[A-Z]+[a-z]+[\d]+$/.test(passWord.value))
}
function validteFields(){
    if(/^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/.test(uName.value)){
        usNameValidte.classList.add("d-none")
    }else{
        usNameValidte.classList.remove("d-none")
    }
    if(/[\w.]+@[\w]+\.[a-zA-Z]/.test(eMail.value)){
        emailValidte.classList.add("d-none")
    }else{
        emailValidte.classList.remove("d-none")
    }
    if(/^[A-Z]+[a-z]+[\d]+$/.test(passWord.value)){
        passValidate.classList.add("d-none")
    }else{
        passValidate.classList.remove("d-none")
    }
}
function userExistsOrNot(email,name){
    flag=0
    for(var i=0 ; i<neWusers.length ;i++ ){
        if(neWusers[i].email==email && neWusers[i].name==name){
            flag=1
        }
    }
    if(flag!=0){
        return true
    }else{
        return false
    }
}
signupButton.addEventListener("click",signUp)


