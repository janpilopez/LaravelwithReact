import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../partials/Navbar'
import Footer from '../partials/Footer'
import AuthUser from '../pageauth/AuthUser'

const Admin = () => {

    const {getRol} = AuthUser()
    const navigate = useNavigate()
    // UseEffect es un hook de React que te permite manejar efectos secundarios en tus componentes funcionales. Un "efecto secundario" se refiere a cualquier operación que afecte a algo fuera del alcance del componente actual, como:
    // Llamadas a APIs: Obtener datos de un servidor.
    // Suscripciones: Escuchar eventos o cambios en datos.
    // Manipulación del DOM: Cambiar propiedades o estilos de elementos.
    // Timers: Configurar temporizadores o intervalos.

    useEffect(() => {
        if (getRol() !== 'admin') {
            navigate('/');
        }
    }, [getRol, navigate]); 
    // getRol:
    // Si getRol es una función que puede cambiar (por ejemplo, si está vinculada a un contexto que proporciona el rol del usuario), entonces es importante incluirla aquí.
    // Esto asegura que si la función getRol cambia (aunque esto no es común, puede suceder si cambias el contexto o el estado en el que se basa), el efecto se ejecutará nuevamente y verificará el rol actualizado.
    // navigate:
    // navigate es una función proporcionada por useNavigate de react-router-dom. Aunque normalmente esta función no cambia (ya que es estable durante la vida del componente), es una buena práctica incluirla.
    // Esto asegura que el efecto se mantenga actualizado con cualquier posible cambio en la función de navegación, aunque en la mayoría de los casos no necesitarás que se vuelva a ejecutar.
    return (
        <>
            <Navbar/>

            <Outlet/> {/* MARDADOR DE POSICION, AQUI SE RENDERIZAN LOS COMPONENTE PAGES (HIJOS O EL QUE DEFINAMOS) */}
            
            <Footer/>
        </>
    )
}

export default Admin