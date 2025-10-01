import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [isStudent, setStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your Name");
    const [isEM, setEM] = useState<boolean>(false);

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-em"
                label="Edit Mode"
                checked={isEM}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setEM(event.target.checked);
                }}
            />
            {isEM ?
                <div>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>,
                            ) => {
                                setName(event.target.value);
                            }}
                        />
                    </Form.Group>

                    <Form.Check
                        type="switch"
                        id="is-student"
                        label="Student?"
                        checked={isStudent}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setStudent(event.target.checked);
                        }}
                    />
                </div>
            :   <div>
                    {name} is {isStudent ? "a student" : "not a student"}
                </div>
            }
        </div>
    );
}
