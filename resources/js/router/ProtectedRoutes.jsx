import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthUser from "../components/pageauth/AuthUser";

//AQUI SE DEFINEN LAS RUTAS PROTEGIDAS Y QUE USUARIOS TIENEN ACCESO A ELLAS
const ProtectedRoutes = () => {
    const { getToken } = AuthUser()
    
    if (!getToken ) {
        return <Navigate to={'/login'} />
    }
    return (
        //DEBEMOS REGRESAR OUTLET DE REACT ROUTER PORQUE HEREDA SEGUN LA VISTA DE CLIENTE O ADMIN
        //YA QUE ESO LO DEFINIMOS EN ROUTES/INDEX.JSX
        //ENTONCES SEGUN EL COMPONENTE QUE LE MANDEMOS EN LA DEFINICION DE LA RUTA LO HEREDA Y LO MUESTRA
        <Outlet/>
    )
}

export default ProtectedRoutes;