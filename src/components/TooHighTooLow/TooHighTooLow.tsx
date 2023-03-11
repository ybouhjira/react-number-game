import React from "react";
import {GameStatus} from "../../Game";

interface TooHighTooLowParams {
    status: GameStatus;
}

export function TooHighTooLow({status}: TooHighTooLowParams) {
    return <>
        <div className="big-font">{status === "below" && "Too low!"}</div>
        <div className="big-font">{status === "greater" && "Too high!"}</div>
    </>;
}
