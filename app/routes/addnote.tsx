import React from "react";
import { Form, useActionData, useTransition } from "@remix-run/react";
import { getStoredNoted, storeNotes } from "~/data/notes";
import { redirect } from "@remix-run/node";
export default function AddNote() {
    //this is only works with custom form components
    const navigation = useTransition();
    const isSubmitting = navigation.state === "submitting";
    //give the acces of data return by action
    const data = useActionData();
    return (
        <React.StrictMode>
            <div className="grid place-items-center w-full h-screen bg-gray-200">
                <Form method="post">
                    <div className="px-4 py-6 w-96 bg-white shadow-md rounded-md grid palce-items-center gap-3">
                        <h2 className="text-red-500 font-bold text-3xl mb-2 text-center">Add Task</h2>
                        <div className="h-[2px] bg-red-500 w-full"></div>
                        {data?.message && <p className="w-full border-2 border-red-500 bg-red-500 bg-opacity-5  text-center my-2 rounded-md p-2 text-sm font-semibold text-red-500">{data.message}</p>}
                        <input className="w-full   inline-block p-2 focus:outline-none border-2 border-red-500" type="text" placeholder="Enter title" name="title" required />
                        <textarea className="w-full  inline-block focus:outline-none border-2 p-2 border-red-500" rows={6} placeholder="Some description of task..." name="description" required></textarea>
                        <button className="w-full text-white text-xl font-medium text-center bg-red-500 mt p-2" disabled={isSubmitting}> {isSubmitting ? "Adding..." : "ADD TASK"}</button>
                    </div>
                </Form>

            </div>
        </React.StrictMode>
    );
}


//when a none get request send on this page it will run this funciton on the website
export async function action({ request }: any) {
    //all code are here run on server
    const formData = await request.formData();
    // const noteData = {
    //     title: fromData.get("name"),
    //     decription: fromData.get("description"),
    // };
    const noteData = Object.fromEntries(formData);

    if (noteData.title.trim().length < 5) {
        return { message: "invalid title - must be at least 5 characters long." };
    }
    //Add validation...
    const existingNotes = await getStoredNoted();

    noteData.id = new Date().toISOString();
    const updateNotes = existingNotes.concat(noteData);

    await storeNotes(updateNotes);

    return redirect("/");


}

export function meta() {
    return {
        title: "Add Notes",
        description: "Add a new note from here."
    };
}