import React from 'react'
import './../header.css'

import { Link } from 'react-router-dom'

function AuxiliaryMenu() {

    return (
        <div class="auxiliary-menu">
            <Link to="/login" class="Login">
                <div className="auxiliary-menu-conta">
                    <p> Conta ITAJr</p>
                    <div className="auxiliary-menu-conta-logo">
                        <div>
                            <svg height="13" width="20">
                                <circle cx="10" cy="7" r="5.0" stroke="blue" stroke-width="2px" fill="white" />
                            </svg>
                        </div>
                        <div>
                            <svg height="13" width="20">
                                <circle cx="10" cy="-2" r="10" stroke="blue" stroke-width="2px" fill="white" />
                                <rect x="1" y="0" height="2px" width="18px" fill="blue" />
                            </svg>
                        </div>
                    </div>
                </div>
            </Link>
            <div className="auxiliary-menu-busca">
                <p> Busca </p>
                <div class="auxiliary-menu-busca-lupa">
                    <svg height="22" width="22">
                        <path d="M 13.0,14.0  L 340.0 ,400" stroke="blue" stroke-width="2px" />
                        <circle cx="9" cy="9" r="8" stroke-width="2px" stroke="blue" fill="white" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default AuxiliaryMenu