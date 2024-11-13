import React from 'react'
import Router from '../router/Index'
//ESTRUCTUA DEL DOCUMENTO, BARRA DE NAVEGACION Y BODY
const App = () => {
    return (
        <div>
            <Router/> {/* ESTAS SON LAS RUTAS, LAS CARGA, LAS REDIRECCIONA A SU COMPONENTE CORRESPONDIENTE */}
        </div>
    )
}
export default App