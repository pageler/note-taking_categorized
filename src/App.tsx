import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { NoteList } from "./pages/NoteList";
import { NewNote } from "./pages/NewNote";
import { NoteLayout } from "./components/NoteLayout";
import { NoteDetails } from "./pages/NoteDetails";
import { EditNote } from "./pages/EditNote";
import { Container } from "react-bootstrap";
import { useMemo, useState } from "react";
import { v4 as uuidV4 } from "uuid";

export type Note = {
    id: string;
} & NoteData;

export type NoteData = {
    title: string;
    markdown: string;
    tags: Tag[];
};

export type Tag = {
    id: string;
    label: string;
};

export type RawNote = {
    id: string;
} & RawNoteData;

export type RawNoteData = {
    title: string;
    markdown: string;
    tagIds: string[];
};

export type AppProps = {};

function App(props: AppProps) {
    const [notes, setNotes] = useState<RawNote[]>([]);
    const [tags, setTags] = useState<Tag[]>([]);

    const notesWithTags = useMemo(() => {
        return notes.map((note) => {
            return {
                ...note,
                tags: tags.filter((tag) => note.tagIds.includes(tag.id)),
            };
        });
    }, [notes, tags]);

    function onCreateNote({ tags, ...data }: NoteData) {
        setNotes((prevNotes) => {
            return [
                ...prevNotes,
                { ...data, id: uuidV4(), tagIds: tags.map((tag) => tag.id) },
            ];
        });
    }

    function onAddTag(tag: Tag) {
        setTags((prevTags) => [...prevTags, tag]);
    }

    return (
        <>
            <div
                style={{
                    marginTop: "10px",
                    textAlign: "center",
                    textDecoration: "underline",
                    color: "navy",
                    fontFamily: "Lobster",
                    fontSize: "3em",
                }}
            >
                <u>Note-Taking Categorized Markdown App</u>
            </div>
            <div>
                <Container className="my-4">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <NoteList
                                    availableTags={tags}
                                    notes={notesWithTags}
                                />
                            }
                        />
                        <Route
                            path="/new"
                            element={
                                <NewNote
                                    onSubmit={onCreateNote}
                                    availableTags={tags}
                                    onAddTag={onAddTag}
                                />
                            }
                        />
                        <Route
                            path="/:id"
                            element={<NoteLayout notes={notesWithTags} />}
                        >
                            <Route index element={<NoteDetails />} />
                            <Route path="edit" element={<EditNote />} />
                        </Route>
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </Container>
            </div>
        </>
    );
}

export default App;
