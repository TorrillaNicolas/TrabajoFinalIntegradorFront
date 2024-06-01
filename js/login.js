const loginForm = document.querySelector("#loginForm");

loginForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const username = document.querySelector("#username").value
    const password = document.querySelector("#password").value
    const Users = JSON.parse(localStorage.getItem("users")) || []
    const validUser = Users.find(user => user.username === username && user.password === password)
    if(!validUser){
        return alert("Usuario y/o contraseña incorrectos")
    }
    alert(`Ya puedes ingresar ${validUser.username}`)
    localStorage.setItem("loginSucces", JSON.stringify(validUser))
    window.location.href = "index.html"
})