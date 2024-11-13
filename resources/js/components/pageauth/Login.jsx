import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthUser from './AuthUser';
import Config from '../../Config';
import axios from 'axios';

const Login = () => {
    const {getToken, setToken} = AuthUser()
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate()

    useEffect( () => {
        if (getToken()) {
            navigate('/')
        }
    }, [])

    const handleLogin = async (e) => {
        e.preventDefault();
        await axios.get('/sanctum/csrf-token') //propio de laravel para obtener el cookietoken y poder hacer las solicitudes
        //es importante implementar esto para poder logearnos en nuestra aplicacion laravel, salir, gestion, etc
        .then( (response) => {
            Config.GetLogin({email, password, message})
            .then(({data})=>{
                if (data.success) {
                    setToken(
                        data.user,
                        data.token,
                        data.user.roles[0].name
                    )
                }else{
                    setMessage(data.message)
                    console.log('no login');
                    
                }
            })
        })
        
    }

    return (
        <div className='container'>
                <div className='grid'>
                    <div className='mt-5 mb-5'>
                        <div className='max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden'>
                            <h1>LOGIN</h1>
                            <input type="text" className='' placeholder='Email' value={email} 
                            onChange={ (e) => setEmail(e.target.value)} required />                     
                            <input type="text" className='' placeholder='Password' value={password} 
                            onChange={ (e) => setPassword(e.target.value)} required />
                            <button className='btn bg-green-500 rounded-lg p-2' onClick={handleLogin}>
                                ENVIAR
                            </button>
                        </div>
                        <p>{message}</p>
                        <a href="/register">Registro</a>
                    </div>
                </div>
        </div>
    
    )
}

export default Login