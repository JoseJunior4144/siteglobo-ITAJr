import React from 'react'
import './noticia.css'
import './Home.css'

import { Link } from 'react-router-dom'

function Noticia(props) {

    const black = {
        color: '#000',
    }

    const cor = {
        color: props.cor || '#000',
    }

    let x = "teste"

    switch(props.cor) {
        case 'black':
            x = "CASD"
            break;
        case 'red':
            x ="CEE"
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
        <Link to={"/"+x+"/noticia/"+props.titulo} class="Login-products">
            <article class="Noticia">
                <img class="imagem-noticia" src={props.imagem} alt=""></img>
                <div class="Noticia_headline" style={cor}>
                    {props.titulo}
                </div>
                <ul class="subtitulo">
                    {props.subtitulo1 && <li class="Noticia_bullets" style={cor}><span style={black}>{props.subtitulo1}</span></li>}
                    {props.subtitulo2 && <li class="Noticia_bullets" style={cor}><span style={black}>{props.subtitulo2}</span></li>}
                    {props.subtitulo3 && <li class="Noticia_bullets" style={cor}><span style={black}>{props.subtitulo3}</span></li>}
                </ul>
            </article>
        </Link>
    )
}

export default Noticia