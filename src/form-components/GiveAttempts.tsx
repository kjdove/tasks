import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [requestAttempts, setRA] = useState<string>("0");
    const [attempts, setAtt] = useState<number>(3);

    function useAttempt() {
        setAtt(attempts - 1);
    }

    function moreAttempts() {
        const value = parseInt(requestAttempts);
        if (!isNaN(value)) {
            setAtt(attempts + value);
        }
    }

    function reqAttempts(event: React.ChangeEvent<HTMLInputElement>) {
        setRA(event.target.value);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Button
                onClick={useAttempt}
                disabled={attempts === 0 ? true : false}
            >
                use
            </Button>
            <Button onClick={moreAttempts}>gain</Button>
            <Form.Group controlId="formAttempts">
                <Form.Control
                    type="number"
                    value={requestAttempts}
                    onChange={reqAttempts}
                />
            </Form.Group>
            <div>Number of Attempts Left: {attempts}</div>
        </div>
    );
}
