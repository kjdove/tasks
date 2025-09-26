import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    function doubler() {
        setDhValue(2 * dhValue);
    }
    function halver() {
        setDhValue(0.5 * dhValue);
    }
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Button onClick={doubler}>Double</Button>
            <Button onClick={halver}>Halve</Button>
        </div>
    );
}
