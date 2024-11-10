import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <NavLink to={'/'} className={ ({isActive}) => (isActive ? 'active' : '') }>
                Go to Home Page
            </NavLink>
            <NavLink to={'/about'} className={ ({isActive}) => (isActive ? 'active' : '') }>
                Go to About Page
            </NavLink>
        </nav>
    )
}

export default Navbar