import React from 'react'
import './../../header.css'

function Categorias(props)  {
    
    const divStyle = {
        color: props.color || 'black',
        fontFamily: 'Inter',
        fontWeight: 800,
        fontSize: 17
    };

    return(
        <a href={props.link} target="_blank" rel="noreferrer" class="Login-products">
            <div style={divStyle} onCLick=""> {props.children}</div>
        </a>
    )
}

export default Categorias