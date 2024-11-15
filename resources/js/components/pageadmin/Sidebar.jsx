import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div>
            <div className='text-center m-auto p-4'>
                <NavLink to={`/admin/user`} className={ ({isActive}) => `list-group-item p-3 border-b border-gray-200
                    ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-blue-100'}`} >User</NavLink>
                <NavLink to={`/admin/categoria`} className={ ({isActive}) => `list-group-item p-3 border-b border-gray-200
                    ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-blue-100'}`} >Categoria</NavLink>
                <NavLink to={`/admin/empresa`} className={ ({isActive}) => `list-group-item p-3 border-b border-gray-200
                    ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-blue-100'}`}>Empresa</NavLink>
            </div>
        </div>
    )
}
export default Sidebar