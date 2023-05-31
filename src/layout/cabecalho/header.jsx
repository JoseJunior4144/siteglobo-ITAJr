import React from 'react'
import './header.css'
import Logo from './Logo/Logo/Logo'
import Foto from './Logo/Logo/Logo.png'
import MainMenu from './MainMenu/Mainmenu'
import AuxiliaryMenu from './AuxiliaryMenu/Auxiliary-menu'
import ProductLinks from './ProductLinks/ProductLinks/Product-links'

function header(){
    return(
        <header class="header">
            <div class="header-grid">
                <Logo>{Foto}</Logo>
                <MainMenu></MainMenu>
                <AuxiliaryMenu></AuxiliaryMenu>
                <ProductLinks></ProductLinks>
            </div>
        </header>
    )
}
export default header
