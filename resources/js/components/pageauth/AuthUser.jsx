import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthUser = () => {
    // useNavigate se utiliza para la navegación dentro de tu aplicación. useNavigate se utiliza para cambiar de rutas y navegar a diferentes partes de la aplicación. No reemplaza la necesidad de manejar el estado local.
    const navigate = useNavigate();

    const getToken = () => {
        // sessionStorage es un objeto web que permite almacenar datos de manera temporal en el navegador. Los datos almacenados en sessionStorage persisten mientras la pestaña o ventana del navegador esté abierta. Una vez que se cierra la pestaña o ventana, los datos se eliminan.
        // Uso: Es útil para almacenar información que solo necesitas durante la sesión actual, como tokens de autenticación, preferencias de usuario o datos temporales que no necesitas guardar permanentemente.
        const tokenString = sessionStorage.getItem('token')
        const token = JSON.parse(tokenString)
        return token;
    }

    const getUser = () => {
        const userString = sessionStorage.getItem('user')
        const user = JSON.parse(userString)
        return user;
    }

    const getRol = () => {
        const rolString = sessionStorage.getItem('rol')
        const rol = JSON.parse(rolString)
        return rol;
    }
    // useState es útil para manejar el estado local y permitir que tu componente reaccione a cambios.
    const [ token, setToken] = useState(getToken());
    const [ user, setUser] = useState(getUser());
    const [ rol, setRol] = useState(getRol());

    const saveToken = (user, token, rol) => {
        // Utiliza sessionStorage.setItem para guardar los datos en el almacenamiento del navegador.
        sessionStorage.setItem('user', JSON.stringify(user))
        sessionStorage.setItem('token', JSON.stringify(token))
        sessionStorage.setItem('rol', JSON.stringify(rol))
        setUser(user)
        setRol(rol)
        setToken(token)

        //rol : admin | client
        if (getRol() === 'admin') {
            navigate('/admin')
        }
        if (getRol() === 'client') {
            navigate('/client')
        }

        const getLogout = () => {
            // Propósito: Esta función se encarga de cerrar la sesión del usuario.
            // Limpieza: Utiliza sessionStorage.clear() para eliminar todos los datos almacenados.
            sessionStorage.clear()
            navigate('/')
        }

        
    }

    return {
        setToken:saveToken,
        token,
        user,
        rol,
        getToken,
        getRol,
        getUser
    }



}

export default AuthUser