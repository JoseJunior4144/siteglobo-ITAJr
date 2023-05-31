import React from 'react'
import './../../header.css'

import { Link } from 'react-router-dom'

function Logo(props){
    
    return(
            <Link to='/'> 
                <div className="logo">
                    <img id="logo" src={props.children} alt=""/>
                </div>
            </Link>
    )
}

export default Logo;