import React, { useEffect } from "react";
import { json } from "@remix-run/node";
import { getStoredNoted, storeNotes } from "~/data/notes";
import { Link, useCatch, useLoaderData } from "@remix-run/react";


export default function About() {
    const notes = useLoaderData();


    return (<React.StrictMode>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 p-6">

            {notes.map((val: any, index: number) => {
                return (
                    <Link key={index} to={`/notes/${val.id}`}>
                        <div className="bg-red-400 shadow-lg rounded-md p-4">
                            <div className="flex border-white border-b-2">
                                <h1 className="text-xl text-white font-medium text-left">#{index + 1}</h1>
                                <div className="grow"></div>
                                <h1 className="text-md text-white font-medium text-left">{new Date(val.id).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })}</h1>
                            </div>
                            <div className="text-xl text-white font-medium text-left">{val.title}</div>
                            <div className="text-lg text-white font-medium text-left">{val.description}</div>
                        </div>
                    </Link>
                );
            })}
        </div>

    </React.StrictMode>);
}


export function meta() {
    return {
        title: "All Notes",
        description: "Your all notes will be here."
    };
}
export async function loader() {
    const notes = await getStoredNoted()
    if (!notes || notes.length == 0) {
        throw json({ message: "could not find any notes." }, {
            status: 404,
            statusText: "Note Found"
        });
    }
    // return new Response(JSON.stringify(notes), { headers: { "Content-Type": "application/json" } });
    // return json(notes);
    return notes;


}


export function CatchBoundary() {
    const caughtResponse = useCatch();

    const message = caughtResponse.data.message || "Data not found.";

    return (
        <div className="w-full h-screen grid place-items-center">
            <div className="bg-red-500 rounded-lg border-l-4 border-red-500 p-4 bg-opacity-10 font-medium">
                <h1 className="text-center text-red-500 text-xl">{message}</h1>
            </div>
        </div>
    );

}