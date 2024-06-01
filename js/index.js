const user = JSON.parse(localStorage.getItem("loginSucces")) || false
if(!user){
    window.location.href = "login.html"
}
const logOut = document.querySelector("#logOut")

logOut.addEventListener("click", ()=>{
    alert("Hasta la proxima!")
    localStorage.removeItem("loginSucces")
    window.location.href = "login.html"
})