import React from 'react'
import './App.css'

import { BrowserRouter as Router } from 'react-router-dom'

import Header from './layout/cabecalho/header'
import Content from './layout/Content'


const App = props => (

    <div className="App">
        <Router>
            <Header/>
            <Content/>
        </Router>
    </div>
)

export default App