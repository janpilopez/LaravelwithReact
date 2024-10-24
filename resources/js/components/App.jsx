import React from 'react'
import Router from '../router/Index'
import { NavLink } from 'react-router-dom'

const App = () => {
    return (
        <div>
            <h1>Hola from React</h1>
            <nav>
                <NavLink to={'/'} className={ ({isActive}) => (isActive ? 'active' : '') }>
                    Go to Home Page
                </NavLink>
                <NavLink to={'/about'} className={ ({isActive}) => (isActive ? 'active' : '') }>
                    Go to About Page
                </NavLink>
                <Router/> {/* ES EL COMPONENTE PAGE, EL BODY POR DECIRLO ASI */}
            </nav>
        </div>
    )
}
export default App