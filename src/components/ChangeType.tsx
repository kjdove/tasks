import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");
    function flipType(): void {
        if (type === "short_answer_question") {
            setType("multiple_choice_question");
        } else {
            setType("short_answer_question");
            {
                <div>Short Answer</div>;
            }
        }
    }
    return (
        <span>
            <Button onClick={flipType}>Change Type</Button>
            {type === "multiple_choice_question" ?
                <div>Multiple Choice</div>
            :   <div>Short Answer</div>}
        </span>
    );
}
