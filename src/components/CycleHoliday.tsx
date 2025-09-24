import React, { useState } from "react";
import { Button } from "react-bootstrap";

//christ, nye, earth day, first day of fall, groundhog day
//dec, jan, april, sept, feb
export type Holiday = "🎄" | "🥂" | "🌏" | "🍁" | "🐿️";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHol] = useState<Holiday>("🎄");
    function nAlpha(): void {
        if (holiday === "🎄") {
            setHol("🌏");
        }
        if (holiday === "🌏") {
            setHol("🍁");
        }
        if (holiday === "🍁") {
            setHol("🐿️");
        }
        if (holiday === "🐿️") {
            setHol("🥂");
        }
        if (holiday === "🥂") {
            setHol("🎄");
        }
    }

    function nYear(): void {
        if (holiday === "🎄") {
            setHol("🥂");
        }
        if (holiday === "🌏") {
            setHol("🍁");
        }
        if (holiday === "🍁") {
            setHol("🎄");
        }
        if (holiday === "🐿️") {
            setHol("🌏");
        }
        if (holiday === "🥂") {
            setHol("🐿️");
        }
    }
    return (
        <span>
            {<div>Holiday: {holiday}</div>}
            <Button onClick={nAlpha}>Advance by Alphabet</Button>

            <Button onClick={nYear}>Advance by Year</Button>
        </span>
    );
}
