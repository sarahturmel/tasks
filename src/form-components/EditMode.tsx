import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [status, setStatus] = useState<boolean>(true);

    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function updateStatus(event: React.ChangeEvent<HTMLInputElement>) {
        setStatus(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-in-edit-mode-check"
                label="In Edit Mode?"
                checked={editMode}
                onChange={updateMode}
            />
            <div>
                {editMode ?
                    <div>
                        <Form.Check
                            type="switch"
                            id="is-student-check"
                            label="Student?"
                            checked={status}
                            onChange={updateStatus}
                        />
                        <Form.Group controlId="formEnterName">
                            <Form.Label>Enter Name:</Form.Label>
                            <Form.Control value={name} onChange={updateName} />
                        </Form.Group>
                    </div>
                :   <div></div>}
            </div>
            <div></div>
            {name} is {status ? "" : "not"} a student
        </div>
    );
}
