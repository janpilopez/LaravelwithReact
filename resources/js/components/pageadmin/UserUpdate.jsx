import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Config from '../../Config';
import Sidebar from './Sidebar';
import { data } from 'autoprefixer';

const UserUpdate = () => {

    const navigate = useNavigate()
    const { id} = useParams();
    const [ name, setName ] = useState('');
    const [ aprobado, setAprobado ] = useState(false);

    useEffect( () => {
        const getUserById = async () => {
            Config.GetUserById(id)
            .then(
                ({ data }) => {
                    //verificamos si viene null
                    setAprobado(data.aprobado === null ? false : data.aprobado);
                    setName(data.name)
                }
            )
        }
        getUserById();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = { aprobado };  // 'aprobado' es una variable que contiene el valor booleano
        // const data = { aprobado : aprobado };  //es lo mismo de arriba, verificar si se envia la propiedad

        await Config.GetUserUpdate( data, id)
        .then( ({data}) => {

        })
        .catch((error) => {
            console.error("Error durante el logout:", error.response || error.message);
        });
        navigate('/admin/user')
    }

    return (
        <div className="flex-none">
            <Sidebar />
            <div className="w-full">
                <div className="card w-4/5 m-auto">
                    <form onSubmit={handleSubmit}>
                        <div className='w-8'>
                            <label htmlFor="name"> Nombre: </label>
                            <input type="text" className='border-1 rounded-md' value={name} onChange={ (e) => setName(e.target.value)}/>
                        </div>
                        <div className='w-8'>
                            <label htmlFor="aprobado"> Aprobado: </label>
                            <input type="checkbox" role='switch' className='border-1 rounded-md' checked={aprobado} onChange={ (e) => setAprobado(!aprobado)} id='aprobado'/>
                        </div>
                        <Link to={-1} className='bg-red-400 rounded-md'> REGRESAR</Link>
                        <button type='submit' className='bg-green-500 rounded-md'>
                            ENVIAR
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserUpdate



