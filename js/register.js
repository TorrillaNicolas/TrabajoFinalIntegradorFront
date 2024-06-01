const registerForm = document.querySelector("#registerForm");

registerForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const username = document.querySelector("#username").value
    const password = document.querySelector("#password").value
    const Users = JSON.parse(localStorage.getItem("users")) || []
    const UsersRegistered = Users.find(user => user.username === username)
    if(UsersRegistered){
        return alert("El usuario ya esta registrado")
    }
    Users.push({username, password})
    localStorage.setItem("users", JSON.stringify(Users))
    alert("Registro exitoso!")
    window.location.href = "./index.html"

})