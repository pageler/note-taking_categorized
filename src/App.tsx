import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { NoteList } from "./pages/NoteList";
import { NewNote } from "./pages/NewNote";
import { NoteLayout } from "./components/NoteLayout";
import { NoteDetails } from "./pages/NoteDetails";
import { EditNote } from "./pages/EditNote";
import { Container } from "react-bootstrap";

function App() {
    return (
        <Container className="my-4">
            <Routes>
                <Route path="/" element={<NoteList />} />
                <Route path="/new" element={<NewNote />} />
                <Route path="/:id" element={<NoteLayout />}>
                    <Route index element={<NoteDetails />} />
                    <Route path="edit" element={<EditNote />} />
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Container>
    );
}

export default App;
