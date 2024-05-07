import { supabase } from "@/utils/supabase/server";

export default async function Notes() {
    const { data: latest_project, error } = await supabase
        .from("latest_project")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Error fetching notes:", error);
        return <div>Error fetching notes</div>;
    }

    return (
        <div>
            <h1>Notes</h1>
            <ul>
                {latest_project?.map((note) => (
                    <li key={note.id}>
                        <h2>{note.name}</h2>
                        <p>{note.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}