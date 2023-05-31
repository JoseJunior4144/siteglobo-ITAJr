import React from 'react'
import './Login.css'

function Login() {

    const user_circle = {
        fontSize: 150,
        color: 'white',
        marginBottom: 26,
    }

    return (
        <div class="login-main">
            <div className="login-box">
                <div className="singup-area">
                    <i class="fa fa-user-circle" style={user_circle}></i>
                    <span><a class="signup" href="">Não tem uma conta? Cadastre-se</a></span>
                </div>
                <form class="login-area">
                    <h3>LOGIN</h3>
                    <div className="login-caixa-texto">
                        <span class="input-icon">
                            <i class="fa fa-envelope"></i>
                        </span>
                        <input class="login-caixa-texto-input" type="
                        email" placeholder="Email"></input>
                    </div>
                    <div className="login-caixa-texto">
                        <span class="input-icon">
                            <i class="fa fa-lock"></i>
                        </span>
                        <input class="login-caixa-texto-input" type="password" placeholder="Senha"></input>
                    </div>
                    <button class="login-botao">Entrar</button>
                    <span >
                        <a class="login-recuperacao" href="#">Esqueceu seu Email ou Senha?</a>
                    </span>
                </form>
            </div>
        </div>
    )
}

export default Login