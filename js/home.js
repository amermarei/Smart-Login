var logOut = document.getElementById("logout");
var userName = document.getElementById("user");
var user = localStorage.getItem("clientName")


userName.innerHTML=`hello <span class="text-warning">${user}</span> `
logOut.addEventListener("click",function(){
    localStorage.removeItem("clientName")
})