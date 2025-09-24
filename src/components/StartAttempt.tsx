import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    function startButton(): void {
        setAttempts(attempts - 1);
        setProgress(true);
    }
    function stopButton(): void {
        setProgress(false);
    }
    function mullButton(): void {
        setAttempts(attempts + 1);
    }
    return (
        <span>
            <div>
                <Button
                    onClick={startButton}
                    disabled={progress || attempts === 0}
                >
                    Start Quiz
                </Button>
            </div>
            <div>
                <Button onClick={stopButton} disabled={!progress}>
                    Stop Quiz
                </Button>
            </div>
            <div>
                <Button onClick={mullButton} disabled={progress}>
                    Mulligan
                </Button>
            </div>
            <div>Attempts: {attempts}</div>
        </span>
    );
}
