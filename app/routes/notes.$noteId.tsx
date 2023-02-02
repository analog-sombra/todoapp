import { ActionArgs, json, redirect } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { getStoredNoted, storeNotes } from "~/data/notes";

export default function NoteDetailsPage() {
    const note = useLoaderData();
    return (
        <div className="grid place-items-center w-full h-screen">
            <div>

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
                <Form method="post">
                    <input type="hidden" name="noteid" value={note.id} />
                    <button className="my-4 text-center hover:bg-red-500 py-2 transition-all cursor-pointer hover:rounded-lg w-80 bg-red-400 text-white text-xl font-bold">Delete</button>
                </Form>
            </div>
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

export async function action(params: ActionArgs) {
    const formData = await params.request.formData();
    const value = Object.fromEntries(formData);
    const existingNotes = await getStoredNoted();
    const updateNotes = existingNotes.filter((val: any) => val.id != value.noteid);

    await storeNotes(updateNotes);
    
    return redirect("/notes");


}