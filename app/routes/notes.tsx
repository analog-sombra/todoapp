import React from "react";
import { json } from "@remix-run/node";
import { getStoredNoted, storeNotes } from "~/data/notes";
import { useLoaderData } from "@remix-run/react";


export default function About() {
    const notes = useLoaderData();
    console.log(notes);

    return (<React.StrictMode>
        <div>about page</div>
        {notes.map((val: any, index: number) => {
            return (<div key={index}>
                <div>{val.title}</div>
                <div>{val.description}</div>
            </div>);
        })}
    </React.StrictMode>);
}

export async function loader() {
    const notes = await getStoredNoted()
    // return new Response(JSON.stringify(notes), { headers: { "Content-Type": "application/json" } });
    // return json(notes);
    return notes;


}