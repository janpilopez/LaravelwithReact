import React from "react";
import {Routes, Route} from 'react-router-dom'

import Home from '../components/HomePage'
import About from '../components/AboutPage'
import Notfound from '../components/NotfoundPage'
import Public from "../components/layouts/Public";
import Admin from "../components/layouts/Admin";
import ProtectedRoutes from "./ProtectedRoutes";
import Client from "../components/layouts/Client";
import Login from "../components/pageauth/Login";
//AQUI SE DEFINEN LAS RUTAS DE LA APLICACION EN REACT PARA QUE LUEGA PODAMOS LLAMARLAS
const Index = () => {
    return (
         <Routes>
            <Route path="/" element={<Public />}>
                <Route path="/login" element={<Login/>} />
                <Route index element={<Home/>} />
                {/* A CONTINUACION COMPONENTE PUBLICOS HEREDAN COMPONENTES DEL PADRE */}
                <Route path="/about" element={<About />}>
                </Route>
                <Route path="/*" element={<Notfound />}>
                </Route>
            </Route>

            {/* definimos las rutas protegidas con alguna validacion segun el rol
                y agregamos las dos rutas tanto de admin como de cliente
            */}
            <Route element={<ProtectedRoutes />}>
                <Route path="/admin" element={<Admin />}>
                    <Route index element={<Home/>} />
                </Route>
                <Route path="/client" element={<Client />}>
                    <Route index element={<Home/>} />
                </Route>
            </Route>



         </Routes>
    )
}

export default Index