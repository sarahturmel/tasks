import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);
    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="userEmotions">
                <Form.Label>How do you feel?</Form.Label>
                <Form.Select value={choice} onChange={updateChoice}>
                    {options.map((op: string) => (
                        <option key={op} value={op}>
                            Choose: {op}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            The user chose {choice}
            <div>
                {choice === expectedAnswer ?
                    <span>✔️</span>
                :   <span>❌</span>}
            </div>
        </div>
    );
}
