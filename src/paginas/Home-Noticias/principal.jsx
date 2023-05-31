import './Home.css'
import './principal.css'
import React from 'react'

import { Link } from 'react-router-dom'

function principal(props) {

    const black = {
        color: '#000',
    }

    const cor = {
        color: props.cor || '#000',
    }

    let x = ""

    switch (props.cor) {
        case 'black':
            x = "CASD"
            break;
        case 'red':
            x = "CEE"
            break;
        case 'blue':
            x = "ITAJunior"
            break;
        case 'lightblue':
            x = "DOO"
            break;
        case 'darkblue':
            x = "AAA"
            break;
        case 'purple':
            x = "AGITA"
            break;
        case 'gray':
            x = "ITAndroids"
            break;
        case 'indigo':
            x = "ITARocket"
            break;
        case '#FFC300':
            x = "AeroDesign"
            break;

    }

    return (
        <Link to={"/"+x+"/noticia"+"/"+props.titulo} class="Login-products">
            <article class="principal">
                <img class="imagem-principal" src={props.imagem} alt=""></img>
                <div class="headline_container" style={cor}>
                    {props.titulo}
                </div>
                <div className="headline_bulets">
                    {props.subtitulo1 && <li style={cor}><span style={black}>{props.subtitulo1}</span></li>}
                    {props.subtitulo2 && <li style={cor}><span style={black}>{props.subtitulo2}</span></li>}
                    {props.subtitulo3 && <li style={cor}><span style={black}>{props.subtitulo3}</span></li>}
                </div>
                <hr class="division_line" />
            </article>
        </Link>
    )
}

export default principal