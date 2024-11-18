import React, { useEffect, useState } from "react";
import Config from "../../Config";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const CategoriaAll = () => {
    const [categorias, setCategorias] = useState();

    useEffect(() => {
        _getCategoriaAll();
    }, []);

    const _getCategoriaAll = async () => {
        const response = await Config.GetCategoriaAll();
        setCategorias(response.data);
    }

    const _deleteCategoriaById = async (id) => {
        const isDelete = window.confirm('Borrar Categoria ?')
        if (isDelete) {
            await Config.GetCategoriaDeleteById(id);
            _getCategoriaAll()
        }
    }

    return (
        <div className="flex-none">
            <Sidebar />
            <div className="w-full">
                <Link to={'/admin/categoria/create'}>Crear Categoria</Link>
                <div className="card w-4/5 m-auto">
                    <table>
                        <thead>
                            <tr>
                                <th>ORDEN</th>
                                <th>NAME</th>
                                <th>ACCION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!categorias ? (
                                <tr>
                                    <td colSpan="3">.... loading</td>
                                </tr>
                            ) : (
                                categorias.map((categoria) => {
                                    return (
                                        <tr key={categoria.id}>
                                            <td>{categoria.orden}</td>
                                            <td>{categoria.nombre}</td>
                                            <td>
                                                <Link
                                                    to={`/admin/categoria/edit/${categoria.id}`}
                                                >
                                                    Editar
                                                </Link>
                                                <button onClick={() => _deleteCategoriaById(categoria.id)}>
                                                    Eliminar
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CategoriaAll;
