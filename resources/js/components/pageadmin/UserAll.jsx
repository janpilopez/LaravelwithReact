import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Config from "../../Config";
import { Link } from "react-router-dom";

const UserAll = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        getUserAll();
    }, []);

    const getUserAll = async () => {
        const response = await Config.GetUserAll();
        setUsers(response.data);
    };
    return (
        <div className="flex-none">
            <Sidebar />
            <div className="w-full">
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
                            {!users ? ".... loading" : users.map((user) => {
                                      return (
                                          <tr key={user.id}>
                                              <td>{user.id}</td>
                                              <td>{user.name}</td>
                                              <td> <Link to={`/admin/user/edit/${user.id}`}>Editar</Link></td>
                                          </tr>
                                      );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserAll;
