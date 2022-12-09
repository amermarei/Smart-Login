var logIn =document.getElementById("login")
var signInputPassword =document.getElementById("signInputPassword")
var signInputEmail =document.getElementById("signInputEmail")
var checkLogin = document.getElementById("checkLogin")
var clientData = [];

//  get data from local storage if found 
if (localStorage.getItem('clientData') != null) {
    clientData = JSON.parse(localStorage.getItem('clientData'))
}
// login process
logIn.addEventListener("click",function(){
        if(checkSignEmpty()==false){
            checkLogin.innerHTML="All Inputs Are Required";
            return false
        } ;
        // loop in local storage to check if email exist or not
        for(i=0;i<clientData.length;i++){
           if(clientData[i].cEmail.toLowerCase()===signInputEmail.value.toLowerCase() && clientData[i].cPassword.toLowerCase()===signInputPassword.value.toLowerCase()){
             localStorage.setItem("clientName",clientData[i].cName)
             location.replace("home.html")
             
           }else {
            checkLogin.innerHTML="Email Or Password Incorrect";
           }
           }
           checkLocalStorage()
})
   

// function to check an input not empty
function checkSignEmpty(){
    if( signInputEmail.value=== ""|| signInputPassword.value===""){
        return false
    }else {
        return true
    }
}

function checkLocalStorage(){
    if(clientData.length===0){
        checkLogin.innerHTML="You Not Have An Account Please Sign Up";
        return false
    }else {
        return true
    }
}
