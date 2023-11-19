import { Badge, Button, Col, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNote } from "../components/NoteLayout";
import ReactMarkdown from "react-markdown";

type NoteDetailsProps = {
    onDeleteNote: (id: string) => void;
};

export const NoteDetails = ({ onDeleteNote }: NoteDetailsProps) => {
    const note = useNote();

    return (
        <>
            <Row className="align-items-center my-4">
                <Col>
                    <h1 style={{ color: "navy" }}>
                        <u>Note Details</u>
                    </h1>
                </Col>
                <Col xs="auto">
                    <Stack direction="horizontal" gap={2}>
                        <Link to={`/${note.id}/edit`}>
                            <Button variant="primary">Edit Note Details</Button>
                        </Link>
                        <Button
                            variant="outline-danger"
                            onClick={() => onDeleteNote(note.id)}
                        >
                            Delete Note Details
                        </Button>
                        <Link to="/">
                            <Button variant="outline-secondary">
                                To Note List Page
                            </Button>
                        </Link>
                    </Stack>
                </Col>
            </Row>

            <Stack className="mb-4">
                <h1>
                    <b>
                        <u>{note.title}</u>
                    </b>
                </h1>
                {note.tags.length > 0 && (
                    <Stack direction="horizontal" gap={1} className="flex-wrap">
                        {note.tags.map((tag) => (
                            <Badge key={tag.id} className="text-truncate">
                                {tag.label}
                            </Badge>
                        ))}
                    </Stack>
                )}
            </Stack>
            <ReactMarkdown>{note.markdown}</ReactMarkdown>
        </>
    );
};
