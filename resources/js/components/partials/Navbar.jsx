import React from "react";
import { NavLink } from "react-router-dom";
import AuthUser from "../pageauth/AuthUser";
import Config from "../../Config";

const Navbar = () => {
    const { getToken, getLogout, getRol } = AuthUser();
    // alert(getToken());
    const logoutUser = () => {
        Config.GetLogout()
            // .get("/sanctum/csrf-cookie")
            .then((response) => {
                // Ahora puedes hacer la solicitud de logout
                getLogout()
            })
            .catch((error) => {
                console.error("Error durante el logout:", error.response || error.message);
            });
    };

    const renderLinks = () => {
        if (getToken()) {
            return (
                <>
                    <a
                        href={`${getRol()}`}
                        className="text-xs font-medium px-4 py-2.5 rounded-full hover:opacity-100 hover:shadow-sm bg-[#127CE5] text-white flex gap-1"
                    >
                        <span className="flex items-center space-x-2 rounded-md group hover:rounded-full transition hover:text-neutral-50/75">
                            <span>Administracion</span>
                        </span>
                    </a>
                    <a
                        href="#"
                        onClick={logoutUser}
                        className="text-xs font-medium px-4 py-2.5 rounded-full hover:opacity-100 hover:shadow-sm bg-[#127CE5] text-white flex gap-1"
                    >
                        <span className="flex items-center space-x-2 rounded-md group hover:rounded-full transition hover:text-neutral-50/75">
                            <span>Logout</span>
                        </span>
                    </a>
                </>
            );
        } else {
            return (
                <>
                    <a
                        href="/login"
                        className="text-xs font-medium px-4 py-2.5 rounded-full hover:opacity-100 hover:shadow-sm bg-[#127CE5] text-white flex gap-1"
                    >
                        <span className="flex items-center space-x-2 rounded-md group hover:rounded-full transition hover:text-neutral-50/75">
                            <span>Login</span>
                        </span>
                    </a>
                </>
            );
        }
    };

    return (
        <div className="flex backdrop-blur-3xl bg-white/30 sm:px-60 px-5 border-b sm:pt-4 pt-4 pb-4 sticky top-0 z-30">
            <div className="flex-1">
                <img
                    className="sm:translate-x-6 rounded-lg"
                    alt="Logo"
                    width="77"
                    height="77"
                    src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png"
                />
            </div>

            <div className="flex">
                <a
                    href="/"
                    className="text-xs font-medium px-4 py-2.5 rounded-full hover:opacity-100 hover:shadow-sm bg-[#127CE5] text-white flex gap-1"
                >
                    <span className="flex items-center space-x-2 rounded-md group hover:rounded-full transition hover:text-neutral-50/75">
                        <span>Home</span>
                    </span>
                </a>
                <a
                    href="/categorias"
                    className="text-xs font-medium px-4 py-2.5 rounded-full hover:opacity-100 hover:shadow-sm bg-[#127CE5] text-white flex gap-1"
                >
                    <span className="flex items-center space-x-2 rounded-md group hover:rounded-full transition hover:text-neutral-50/75">
                        <span>Categorias</span>
                    </span>
                </a>
                {renderLinks()}
            </div>
        </div>
    );
};

export default Navbar;
