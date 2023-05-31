import React from 'react'
import './Content.css'
import { Routes, Route } from 'react-router-dom'

import Home from '../paginas/Home-Noticias/Home'
import NotFound from '../paginas/NotFound/NotFound'
import Login from '../paginas/Login/Login'

const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/Login" element={<Login />} />
        </Routes>
    </main>
)

export default Content