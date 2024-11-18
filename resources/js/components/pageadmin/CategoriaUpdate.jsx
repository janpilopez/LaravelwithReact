import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Config from '../../Config';
import Sidebar from './Sidebar';

const CategoriaUpdate = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const [ nombre, setNombre ] = useState('');
    const [ descripcion, setDescripcion ] = useState('');
    const [ orden, setOrden ] = useState('');
    const [ menu, setMenu ] = useState(false);
    const [ urlfoto, setUrlfoto ] = useState('');
    const [ file, setFile ] = useState('');

    useEffect( () => {
        const _getCategoriaUpdate = async () => {
            Config.GetCategoriaById(id)
            .then(
                ({ data }) => {
                    //verificamos si viene null
                    setNombre(data.nombre)
                    setDescripcion(data.descripcion)
                    setOrden(data.orden)
                    setMenu(data.menu === null ? false : data.menu);
                    setUrlfoto(data.urlfoto)
                }
            )
        }
        _getCategoriaUpdate()
        // alert(urlfoto)
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            
                nombre,
                descripcion,
                orden,
                urlfoto : file,
                menu
            
        };
        await Config.GetCategoriaUpdate( data, id)
        .then( ({data}) => {
            //allguna alerta o mensaje actualizado
        })
        .catch((error) => {
            console.error("Error:", error.response || error.message);
        });
        navigate('/admin/categoria')
    }

    const handleInputChange = async (e) => {
        //TODO: USE FILE IN FRONT
        let files = e.target.files; // Obtiene los archivos seleccionados
        if (files && files.length > 0) {
            let reader = new FileReader(); // Crea una nueva instancia de FileReader
            reader.readAsDataURL(files[0]); // Lee el primer archivo como una URL de datos (base64)
            reader.onload = (e) => {
                setFile(e.target.result); // Establece la URL de la foto
            };
        } else {
            console.error("No file selected.");
        }
    }

    return (
        <div className="flex-none">
            <Sidebar />
            <div className="w-full">
                <div className="card w-4/5 m-auto">
                    <form onSubmit={handleSubmit}>
                        <div className='container'>
                            <div className='w-8'>
                                <label htmlFor="menu"> Publicado: </label>
                                <input type="checkbox" role='switch' className='border-1 rounded-md' checked={menu} onChange={ (e) => setMenu(!menu)} id='menu'/>
                            </div>
                            <div className='w-1/5'>
                                <label htmlFor="">Nombre</label>
                                <input type="text" className='form-control' value={nombre} onChange={ (e) => setNombre(e.target.value)} />
                            </div>
                            <div className='w-1/5'>
                                <label htmlFor="">Orden</label>
                                <input type="number" className='form-control' value={orden} onChange={ (e) => setOrden(e.target.value)} />
                            </div>
                            <div className='w-1/5'>
                                <label htmlFor="">Descripcion</label>
                                <textarea type="text" className='form-control' value={descripcion} onChange={ (e) => setDescripcion(e.target.value)} />
                            </div>
                            <div className='w-1/5'>
                                <label htmlFor="">Imagen</label>
                                <img src={'/img/categoria/'+ urlfoto} alt="Loading..." className='w-32 h-auto' />
                                <input type="file" className='form-control' onChange={ (e) => handleInputChange(e)} />
                            </div>
                            <Link to={-1} className='bg-red-400 rounded-md'> REGRESAR</Link>
                            <button type='submit' className='bg-green-500 rounded-md'>
                                ACTUALIZAR
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CategoriaUpdate