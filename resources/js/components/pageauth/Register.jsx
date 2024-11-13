import React, { useEffect, useState } from 'react'
import Config from '../../Config';
import { useNavigate } from 'react-router-dom';
import AuthUser from './AuthUser';
const Register = () => {
    const {getToken} = AuthUser()
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate()
    
    useEffect( () => {
        if (getToken()) {
            navigate('/')
        }
    }, [])


    const handleRegistro = async (e) => {
        e.preventDefault();
        Config.GetRegister({name, email, password})
        .then(({data})=>{
            if (data.success) {
                navigate('/login')
                
            }
        })
    }
    return (
        <div className='container'>
            <div className='grid'>
                <div className='mt-5 mb-5'>
                    <div className='max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden'>
                        <h1>Registro</h1>
                        <input type="text" className='' placeholder='Nombre' value={name} 
                        onChange={ (e) => setName(e.target.value)} required />
                        <input type="text" className='' placeholder='Email' value={email} 
                        onChange={ (e) => setEmail(e.target.value)} required />                     
                        <input type="text" className='' placeholder='Password' value={password} 
                        onChange={ (e) => setPassword(e.target.value)} required />
                        <button className='btn bg-green-500 rounded-lg p-2' onClick={handleRegistro}>
                            ENVIAR
                        </button>
                    </div>
                    <p>Terminos y Condiciones</p>
                </div>
            </div>

        </div>
    )
}

export default Register