import React from "react";
import Sidebar from "./Sidebar";

const Panel = () => {
    return (
        <div className="bg-slate-500 w-full p-1">
            <div className="flex-none">
                <Sidebar></Sidebar>
                <div className="w-full pt-3">
                    <h1 className="text-center">ADMIN</h1>
                </div>
            </div>
        </div>
    );
};

export default Panel;
