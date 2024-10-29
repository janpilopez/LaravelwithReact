import React from "react";
import {Routes, Route} from 'react-router-dom'

import Home from '../components/HomePage'
import About from '../components/AboutPage'
import Notfound from '../components/NotfoundPage'
//AQUI SE DEFINEN LAS RUTAS DE LA APLICACION EN REACT PARA QUE LUEGA PODAMOS LLAMARLAS
const Index = () => {
    return (
         <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/*" element={<Notfound />}/>

         </Routes>
    )
}

export default Index