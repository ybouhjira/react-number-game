import React from "react";
import {GameStatus} from "../../Game";
import "./Heading.scss"

interface Props {
    status: GameStatus;
    gameInProgress: boolean;
}

export default function Heading({status, gameInProgress}: Props) {

    return <>
        {status === "notStarted" && <h1 className="heading">Random Number Game</h1>}
        {status === "noResponse" && <h1 className="heading">What is the secret number</h1>}
        {status === "win" && <h1 className="heading">You win!</h1>}
        {gameInProgress && <h1 className="heading">Try again!</h1>}
    </>;
}
