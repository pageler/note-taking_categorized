import { NoteData, Tag } from "../App";
import { NoteForm } from "../components/NoteForm";
import { useNote } from "../components/NoteLayout";

type EditNoteProps = {
    onSubmit: (id: string, data: NoteData) => void;
    onAddTag: (tag: Tag) => void;
    availableTags: Tag[];
};

export const EditNote = ({
    onSubmit,
    onAddTag,
    availableTags,
}: EditNoteProps) => {
    const note = useNote();

    return (
        <>
            <h1 style={{ color: "navy" }} className="my-4">
                <u>Edit Note</u>
            </h1>

            <NoteForm
                onSubmit={(data) => onSubmit(note.id, data)}
                onAddTag={onAddTag}
                availableTags={availableTags}
                // populate defaultValue NoteForm:
                title={note.title}
                tags={note.tags}
                markdown={note.markdown}
            />
        </>
    );
};
