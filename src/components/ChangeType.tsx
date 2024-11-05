import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const TYPE_TRANSITIONS: Record<QuestionType, QuestionType> = {
        short_answer_question: "multiple_choice_question",
        multiple_choice_question: "short_answer_question",
    };
    const [qType, setQType] = useState<QuestionType>("short_answer_question");
    function changeQType(): void {
        const newType = TYPE_TRANSITIONS[qType];
        setQType(newType);
    }
    return (
        <div>
            <h3>Change Type</h3>
            <div>
                <Button onClick={changeQType}>Change Type</Button>
            </div>
            <div>
                {qType === "short_answer_question" ?
                    <span>Short Answer</span>
                :   <span>Multiple choice</span>}
            </div>
        </div>
    );
}
