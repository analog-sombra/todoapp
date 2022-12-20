import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getStoredNoted } from "~/data/notes";

export default function NoteDetailsPage() {
    const note = useLoaderData();
    return (
        <div className="grid place-items-center w-full h-screen">

            <main className="bg-red-400 rounded-lg shadow-lg p-4 w-80">
                <header>
                    <nav>
                        <Link to="/notes" className="text-lg text-white font-medium text-left">Back to all Notes</Link>
                    </nav>
                    <div className="w-full h-[2px] bg-white my-2"></div>
                    <h1 className="text-xl text-white font-medium text-left">{note.title}</h1>
                </header>
                <p className="text-xl text-white font-medium text-left">{note.description}</p>
            </main>
        </div>
    );
}

export async function loader({ params, request }: any) {
    const notes = await getStoredNoted();
    const noteId = params.noteId;
    const selectedNote = notes.find((note: any) => note.id === noteId);
    if (!selectedNote) {
        throw json({ message: "Could not find note for id " + noteId });
    }
    return selectedNote;
}