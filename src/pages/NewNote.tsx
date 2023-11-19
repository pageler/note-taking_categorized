import { NoteData, Tag } from "../App";
import { NoteForm } from "../components/NoteForm";

type NewNoteProps = {
    onSubmit: (data: NoteData) => void;
    availableTags: Tag[];
    onAddTag: (tag: Tag) => void;
};

export const NewNote = ({
    onSubmit,
    availableTags,
    onAddTag,
}: NewNoteProps) => {
    return (
        <>
            <h1 className="mb-4" style={{ color: "navy" }}>
                <u>Create New Note</u>
            </h1>

            <NoteForm
                onSubmit={onSubmit}
                availableTags={availableTags}
                onAddTag={onAddTag}
            />
        </>
    );
};
