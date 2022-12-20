import { NavLink } from "@remix-run/react";
import React from "react";

export default function NavBar() {
    return (
        <React.StrictMode>
            <div className="w-full bg-red-500 grid place-items-center" >
                <div className="bg-red-500 text-white flex w-5/6 py-4">
                    <h2 className="text-2xl font-semibold">Note Taking App</h2>
                    <div className="grow"></div>
                    <div className="flex">
                        <NavLink to="/" className={({ isActive }) =>
                            isActive ? "text-red-500 bg-white font-semibold px-4 py-2 cursor-pointer rounded-lg" : "text-white font-semibold px-4 py-2 cursor-pointer"
                        }  >Home</NavLink>
                        <NavLink to="/addnote" className={({ isActive }) =>
                            isActive ? "text-red-500 bg-white font-semibold px-4 py-2 cursor-pointer rounded-lg" : "text-white font-semibold px-4 py-2 cursor-pointer"}>Add Tasks</NavLink>
                        <NavLink to="notes" className={({ isActive }) =>
                            isActive ? "text-red-500 bg-white font-semibold px-4 py-2 cursor-pointer rounded-lg" : "text-white font-semibold px-4 py-2 cursor-pointer"}>All Tasks</NavLink>
                    </div>
                </div>
            </div>
        </React.StrictMode>
    );
}