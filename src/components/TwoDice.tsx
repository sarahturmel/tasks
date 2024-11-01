import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeft] = useState(2);
    const [rightDie, setRight] = useState(5);

    function changeLeft(): void {
        setLeft(d6);
    }
    function changeRight(): void {
        setRight(d6);
    }

    return (
        <div>
            <div>
                Left Die: <span data-testid="left-die">{leftDie}</span>
                <Button onClick={changeLeft}>Roll Left</Button>
            </div>
            <div>
                Right Die: <span data-testid="right-die">{rightDie}</span>
                <Button onClick={changeRight}>Roll Right</Button>
            </div>
            <div>
                {leftDie === 1 && rightDie === 1 ?
                    <span>Lose</span>
                :   <span></span>}
                {leftDie === rightDie && leftDie !== 1 ?
                    <span>Win</span>
                :   <span></span>}
            </div>
        </div>
    );
}
