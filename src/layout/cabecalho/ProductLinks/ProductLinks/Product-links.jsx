import React from 'react'
import './../../header.css'
import Categoria from './categorias.jsx'

function ProductLinks() {

    return (
        <div class="Product-Links-header">
            <div class="Product-Links">
                <Categoria link="https://www.casd.ita.br">CASD</Categoria>
                <Categoria link="https://www.facebook.com/departamentodeordemeorientacao/" color="lightblue">DOO</Categoria>
                <Categoria link="https://atleticaita.com.br" color="darkblue">AAA</Categoria>
                <Categoria link="https://cursosantosdumont.org.br">CASD Vest</Categoria>
                <Categoria link="https://ceeita.com.br" color="red">CEE</Categoria>
                <Categoria link="https://www.instagram.com/agita.lgbt/" color="purple">AGITA</Categoria>
                <Categoria link="https://www.itajunior.com.br" color="blue">ITA Júnior</Categoria>
                <Categoria link="https://aerodesignita.wordpress.com" color="#FFC300">AeroDesign</Categoria>
                <Categoria link="https://www.itandroids.com.br" color="gray">ITAndroids</Categoria>
                <Categoria link="https://www.instagram.com/itarocket/?hl=pt" color="indigo"> ITARocket</Categoria>
            </div>
        </div>
    )
}

export default ProductLinks