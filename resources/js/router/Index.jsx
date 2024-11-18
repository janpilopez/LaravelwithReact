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
import Register from "../components/pageauth/Register";
import PanelAdmin from "../components/pageadmin/PanelAdmin";
import PanelClient from "../components/pageclient/PanelClient";
import UserAll from "../components/pageadmin/UserAll"
import UserUpdate from "../components/pageadmin/UserUpdate"
import CategoriaAll from "../components/pageadmin/CategoriaAll";
import CategoriaStore from "../components/pageadmin/CategoriaStore";
import CategoriaUpdate from "../components/pageadmin/CategoriaUpdate";

//AQUI SE DEFINEN LAS RUTAS DE LA APLICACION EN REACT PARA QUE LUEGA PODAMOS LLAMARLAS
const Index = () => {
    return (
         <Routes>
            <Route path="/" element={<Public />}>
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route index element={<Home/>} />
                {/* A CONTINUACION COMPONENTE PUBLICOS HEREDAN COMPONENTES DEL PADRE */}
                <Route path="/about" element={<About />}>
                </Route>
                <Route path="/*" element={<Notfound />}>
                </Route>
            </Route>

            {/* definimos las rutas protegidas con alguna validacion(protected routes) segun el rol
                y agregamos las dos rutas tanto de admin como de cliente
            */}
            <Route element={<ProtectedRoutes />}>
                <Route path="/admin" element={<Admin />}>
                    <Route index element={<PanelAdmin/>} />
                    <Route path="user" element={<UserAll/>}/> {/* ruta relativa es sin /, si se pone / es ruta absoluta, por consiguiente  todas las demas son relativas a partir de una ruta principal*/ }
                    <Route path="user/edit/:id" element={<UserUpdate/>}/>
                    <Route path="categoria" element={<CategoriaAll/>}/> 
                    <Route path="categoria/create" element={<CategoriaStore/>}/>
                    <Route path="categoria/edit/:id" element={<CategoriaUpdate/>}/>

                </Route>
                <Route path="/client" element={<Client />}>
                    <Route index element={<PanelClient/>} />
                </Route>
            </Route>



         </Routes>
    )
}

export default Index