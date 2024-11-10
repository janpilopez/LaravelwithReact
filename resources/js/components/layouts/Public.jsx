import React from 'react'
import Navbar from '../partials/Navbar'
import Footer from '../partials/Footer'
import { Outlet } from 'react-router-dom'

const Public = () => {
    return (
        <>
            <h1>Public</h1>
            <Navbar/>

            <Outlet/> {/* MARDADOR DE POSICION, AQUI SE RENDERIZAN LOS COMPONENTE PAGES (HIJOS O EL QUE DEFINAMOS) */}
            
            <Footer/>
        </>
        
    )
}

export default Public