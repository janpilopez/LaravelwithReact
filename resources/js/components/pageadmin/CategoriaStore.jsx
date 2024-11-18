import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { Link, useNavigate } from 'react-router-dom'
import Config from '../../Config'

const CategoriaStore = () => {
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [orden, setOrden] = useState('')
    const [urlfoto, setUrlfoto] = useState('')
    const navigate = useNavigate()
    const handleStore =  async (e) => {
        e.preventDefault()
        await Config.GetCategoriaStore( {
            nombre,
            descripcion,
            orden,
            urlfoto
        })
        navigate('/admin/categoria')
    }

    const handleInputChange = async (e) => {
        //TODO: USE FILE IN FRONT
        let files = e.target.files; // Obtiene los archivos seleccionados
        if (files && files.length > 0) {
            let reader = new FileReader(); // Crea una nueva instancia de FileReader
            reader.readAsDataURL(files[0]); // Lee el primer archivo como una URL de datos (base64)
            reader.onload = (e) => {
                setUrlfoto(e.target.result); // Establece la URL de la foto
            };
        } else {
            console.error("No file selected.");
        }
        // let files = e.target.files;:
        // e.target se refiere al elemento en el que ocurrió el evento (en este caso, el campo de entrada <input type="file">).
        // e.target.files es una lista de archivos seleccionados por el usuario. Es un objeto tipo FileList, similar a un array, que contiene todos los archivos seleccionados.
        // Aquí, files guardará esa lista de archivos. Si el usuario seleccionó más de un archivo, se almacenarán todos en files.
        // En el siguiente paso, usamos files[0] para acceder al primer archivo seleccionado, por si el usuario solo seleccionó uno.

        // let reader = new FileReader();:

        // FileReader es una API de JavaScript que permite leer archivos en el navegador de forma asíncrona.
        // reader es una nueva instancia de FileReader, y se utiliza para leer el archivo que el usuario ha seleccionado.
        // reader.readAsDataURL(files[0]);:

        // Aquí, le dices al FileReader que lea el primer archivo de la lista de archivos seleccionados (files[0]).

        // readAsDataURL es un método del FileReader que lee el archivo seleccionado y lo convierte en una URL en formato Base64 (también conocida como "Data URL").

        // Esto es útil cuando deseas mostrar imágenes o archivos directamente desde el navegador sin tener que subirlos al servidor, ya que los convierte en una cadena de texto que representa el archivo (en este caso, una imagen en base64).

        // ¿Por qué Base64?: El formato Base64 es una representación en texto de datos binarios, como imágenes o archivos, que se puede incluir directamente en el HTML (por ejemplo, como una URL de imagen) o en JavaScript.

        // reader.onload = (e) => {...}:

        // Cuando el archivo se ha leído correctamente y está listo, el evento onload se dispara.
        // onload es un evento del FileReader que se ejecuta cuando el archivo ha sido leído con éxito.
        // Dentro del bloque onload, tienes acceso al resultado de la lectura del archivo en e.target.result.
    }

    return (
        <div className="flex-none">
            <Sidebar />
            <div className="w-full">
                <div className="card w-4/5 m-auto">
                    <form onSubmit={handleStore}>
                        <div className='container'>
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
                                <input type="file" className='form-control' onChange={ (e) => handleInputChange(e)} />
                            </div>
                            <Link to={-1} className='bg-red-400 rounded-md'> REGRESAR</Link>
                            <button type='submit' className='bg-green-500 rounded-md'>
                                ENVIAR
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CategoriaStore