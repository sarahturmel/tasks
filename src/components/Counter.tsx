import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Counter(): React.JSX.Element {
    const [value, setValue] = useState<number>(0);
    return (
        <div>
            <h3>Count Up</h3>
            <span>
                <Button
                    onClick={() => {
                        setValue(1 + value);
                    }}
                >
                    Add One
                </Button>
                to {value}.
            </span>
        </div>
    );
}
