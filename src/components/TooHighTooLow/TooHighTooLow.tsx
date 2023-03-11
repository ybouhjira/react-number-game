import React from "react";
import {GameStatus} from "../../Game";
import "../../styles/_animation.scss"

interface TooHighTooLowParams {
    status: GameStatus;
}

export function TooHighTooLow({status}: TooHighTooLowParams) {
    return <>
        <div className="big-font">
            {status === "below" && <div className="scale-animation">Too low!</div>}
        </div>
        <div className="big-font">
            {status === "greater" && <div className="scale-animation">Too high!</div>}
        </div>
    </>;
}
