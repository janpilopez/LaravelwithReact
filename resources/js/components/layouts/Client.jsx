import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../partials/Navbar'
import Footer from '../partials/Footer'

const Client = () => {
    return (
        <>
            <h1>Client</h1>
            <Navbar/>

            <Outlet/> {/* MARDADOR DE POSICION, AQUI SE RENDERIZAN LOS COMPONENTE PAGES (HIJOS O EL QUE DEFINAMOS) */}
            
            <Footer/>
        </>
    )
}

export default Client