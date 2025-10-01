import React, { useState } from "react";
import { Form } from "react-bootstrap";

export const COLORS = [
    { option: "coral", label: "coral" },
    { option: "maroon", label: "maroon" },
    { option: "olive", label: "olive" },
    { option: "plum", label: "plum" },
    { option: "cyan", label: "cyan" },
    { option: "salmon", label: "salmon" },
    { option: "navy", label: "navy" },
    { option: "orchid", label: "orchid" },
];

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>(COLORS[0].label);

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((c) => (
                <div key={c.option}>
                    <Form.Check
                        inline
                        type="radio"
                        name="color"
                        onChange={(e) => {
                            setColor(e.target.value);
                        }}
                        id={c.option}
                        label={c.label}
                        style={{
                            display: "inline-block",
                            margin: "5px",
                            padding: "5px 10px",
                            borderRadius: "8px",
                            backgroundColor: c.label,
                            color: "white",
                            minWidth: "80px",
                        }}
                        value={c.label}
                        checked={color === c.option}
                    />
                </div>
            ))}
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{
                        display: "inline-block",
                        margin: "5px",
                        padding: "5px 10px",
                        borderRadius: "8px",
                        backgroundColor: color,
                        color: "white",
                        minWidth: "80px",
                    }}
                >
                    {color}
                </span>
            </div>
        </div>
    );
}
