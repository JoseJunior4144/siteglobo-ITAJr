import React from 'react'
import './../header.css'

import { Link } from 'react-router-dom'

function Mainmenu() {

    return (
        <div class="main-menu">
            <div className="main-menu_button">
                <svg>
                    <circle cx="2" cy="2" r="2px" />
                    <circle cx="2" cy="9" r="2px" />
                    <circle cx="2" cy="16" r="2px" />
                    <circle cx="9" cy="2" r="2px" />
                    <circle cx="9" cy="9" r="2px" />
                    <circle cx="9" cy="16" r="2px" />
                    <circle cx="16" cy="2" r="2px" />
                    <circle cx="16" cy="9" r="2px" />
                    <circle cx="16" cy="16" r="2px" />
                </svg>
            </div>
            <Link to="/Menu" class="Login">
                <div class="main-menu_menu">
                    <p> Menu </p>
                </div>
            </Link >
            <Link to="/Assine" class="Login">
                <div className="main-menu_vitrine">
                    <p> Assine </p>
                </div>
            </Link>
        </div >
    )
}

export default Mainmenu