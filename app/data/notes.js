import fs from 'fs/promises';
export async function getStoredNoted() {
    const rawFileContent = await fs.readFile("notes.json", { encoding: "utf-8" });
    const data = JSON.parse(rawFileContent);
    const storeNotes = data.notes ?? [];
    return storeNotes;
}
export function storeNotes(notes) {
    return fs.writeFile("notes.json", JSON.stringify({ notes: notes || [] }));
}