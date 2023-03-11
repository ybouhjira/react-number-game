import React from "react";
import {GameStatus} from "../Game";

interface Props {
    status: GameStatus;
    gameInProgress: boolean;
}

export default function Heading(props: Props) {
    return <h1>
        {props.status === "notStarted" && "Random Number Game"}
        {props.status === "noResponse" && "What is the secret number"}
        {props.status === "win" && "You win!"}
        {props.gameInProgress && "Try again!"}
    </h1>;
}
