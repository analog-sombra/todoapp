import React from "react";

export default function AddNote() {
    return (
        <React.StrictMode>
            <div className="grid place-items-center w-full h-screen bg-gray-200">
                <div className="px-4 py-6 w-96 bg-white shadow-md rounded-md grid palce-items-center gap-3">
                    <h2 className="text-red-500 font-bold text-3xl mb-2 text-center">Add Task</h2>
                    <div className="h-[2px] bg-red-500 w-full"></div>
                    <input className="w-full   inline-block p-2 focus:outline-none border-2 border-red-500" type="text" placeholder="Enter title" />
                    <textarea className="w-full  inline-block focus:outline-none border-2 p-2 border-red-500" rows={6} placeholder="Some description of task..."></textarea>

                </div>
            </div>
        </React.StrictMode>
    );
}