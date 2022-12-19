import React from "react";

export default function NavBar() {
    return (
        <React.StrictMode>
            <div className="w-full bg-red-500 grid place-items-center" >
                <div className="bg-red-500 text-white flex w-5/6 py-4">
                    <h2 className="text-2xl font-semibold">Note Taking App</h2>
                    <div className="grow"></div>
                    <div className="flex">
                        <h2 className="text-white font-semibold px-4 py-2 cursor-pointer">Home</h2>
                        <h2 className="text-white font-semibold px-4 py-2 cursor-pointer">Tasks</h2>
                        <h2 className="text-white font-semibold px-4 py-2 cursor-pointer">Add Tasks</h2>
                    </div>
                </div>
            </div>
        </React.StrictMode>
    );
}