import React, { useState } from 'react'
import './Login.css'
import { login } from './api.js'
import { axiosConfig } from './api.js'

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
                    <span><a class="signup">Não tem uma conta? Cadastre-se</a></span>
                </div>
                <form class="login-area">
                    <h3>LOGIN</h3>
                    <div className="login-caixa-texto">
                        <span class="input-icon">
                            <i class="fa fa-envelope"></i>
                        </span>
                        <input class="login-caixa-texto-input" id="email" name="login" type="
                        email" placeholder="e-mail"></input>
                    </div>
                    <div className="login-caixa-texto">
                        <span class="input-icon">
                            <i class="fa fa-lock"></i>
                        </span>
                        <input class="login-caixa-texto-input" id="password" type="password" name="password" placeholder="Senha"></input>
                    </div>
                    <button class="login-botao" onClick={login}>Entrar</button>
                    <span>
                        <a class="login-recuperacao">Esqueceu seu Email ou Senha?</a>
                    </span>
                </form>
            </div>
        </div>
    )
}

export default Login