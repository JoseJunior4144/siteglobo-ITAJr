import React, { useState } from 'react'
import './Login.css'
import { login } from './api.js'

function Login() {

    const [error, setError] = useState(null)

    const handleLoginClick = () => {
        login().then(()=> {
            setError(null)
        }).catch((err)=> {
            setError('Ocorreu um erro no Login\nVerifique suas credenciais e tente novamente')
        })
    }

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
                    {error && <div className="error-message">{error}</div>}
                    <div className="login-caixa-texto">
                        <span class="input-icon">
                            <i class="fa fa-envelope"></i>
                        </span>
                        <input class="login-caixa-texto-input" id="email" type="
                        text" placeholder="E-mail"></input>
                    </div>
                    <div className="login-caixa-texto">
                        <span class="input-icon">
                            <i class="fa fa-lock"></i>
                        </span>
                        <input class="login-caixa-texto-input" id="password" type="text" placeholder="Senha"></input>
                    </div>
                    <button class="login-botao" onClick={handleLoginClick}>Entrar</button>
                    <span >
                        <a class="login-recuperacao">Esqueceu seu Email ou Senha?</a>
                    </span>
                </form>
            </div>
        </div>
    )
}

export default Login