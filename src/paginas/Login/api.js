import axios from 'axios'

export function login() {
    
    var emailField = document.getElementById("email")
    var passwordField = document.getElementById("password")

    var email = emailField.value
    var password = passwordField.value

    console.log(email)
    console.log(password)
    axios.post("https://api-siteglobo-itajr.onrender.com/auth", {email, password}).then(res => {
        alert("Login efetuado com sucesso")
        var token = res.data.token
        localStorage.setItem("token", token)
        axiosConfig.headers.Authorization = "Bearer" + localStorage.getItem("token")
    }).catch(err => {
        alert("Oops... Ocorreu um erro!\nVerifique suas credenciais e tente novamente.")
    })
}

export var axiosConfig = {
    headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
    }
}