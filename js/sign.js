var signUp =document.getElementById("signup")
var NameAlert =document.getElementById("NameAlert")
var emailAlert =document.getElementById("emailAlert")
var passwordAlert =document.getElementById("passwordAlert")
var InputName = document.getElementById("InputName")
var InputEmail = document.getElementById("InputEmail")
var InputPassword = document.getElementById("InputPassword")
var check = document.getElementById("check")

var clientData = [];

//  get data from local storage if found 
if (localStorage.getItem('clientData') != null) {
    clientData = JSON.parse(localStorage.getItem('clientData'))
}

// sign up process
signUp.addEventListener("click",function(){
    if(regexCheckName()&&regexCheckEmail()&&regexCheckPassword()){
        if(checkEmpty()==false){
        check.innerHTML="All Inputs Are Required";
        return false;
        } ;
        var obj = {
            cName : InputName.value,
            cEmail : InputEmail.value,
            cPassword : InputPassword.value
        }
        if(checkData()==true){
            check.innerHTML="Email Already Exist";
        }else {
            clientData.push(obj)
            localStorage.setItem("clientData",JSON.stringify(clientData))
            check.innerHTML=`<span class="text-success">Sign Up Success<span/>`;
            NameAlert.style.cssText= "display:none !important"
            passwordAlert.style.cssText= "display:none !important"
            emailAlert.style.cssText= "display:none !important"
        }
    }
})


// function to check an input not empty
function checkEmpty(){
    if(InputName.value ==="" || InputEmail.value=== ""||  InputPassword.value===""){
        return false
    }else {
        return true
    }
}

// function to check email that client register found on localsorage or not 
function checkData() {
        for(i=0;i<clientData.length;i++){
            if(clientData[i].cEmail.toLowerCase()===InputEmail.value.toLowerCase()){
                return true
        }
    }
    }

// function to check name input value 
function regexCheckName(){
    var reg = /[a-z]{3,}/ig
    if(reg.test(InputName.value)===true){
        return true;
    }else {
        NameAlert.style.cssText= "display:block !important"
        return false;
    }
}


// function to check email input value 
function regexCheckEmail(){
    var reg = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/ig
    if(reg.test(InputEmail.value)===true){
        return true;
    }else {
        emailAlert.style.cssText= "display:block !important"
        return false;
    }
}

// function to check password input value 
function regexCheckPassword(){
    var reg = /\w{6,}/g
    if(reg.test(InputPassword.value)===true){
        return true;
    }else {
        passwordAlert.style.cssText= "display:block !important"
        return false;
    }
}

