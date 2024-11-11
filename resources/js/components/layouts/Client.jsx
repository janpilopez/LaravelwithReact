import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../partials/Navbar'
import Footer from '../partials/Footer'
import AuthUser from '../pageauth/AuthUser'

const Client = () => {
    const {getRol} = AuthUser()
    const navigate = useNavigate
    // UseEffect es un hook de React que te permite manejar efectos secundarios en tus componentes funcionales. Un "efecto secundario" se refiere a cualquier operación que afecte a algo fuera del alcance del componente actual, como:
    // Llamadas a APIs: Obtener datos de un servidor.
    // Suscripciones: Escuchar eventos o cambios en datos.
    // Manipulación del DOM: Cambiar propiedades o estilos de elementos.
    // Timers: Configurar temporizadores o intervalos.
    if(getRol != 'client'){
        navigate('/')
    }
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