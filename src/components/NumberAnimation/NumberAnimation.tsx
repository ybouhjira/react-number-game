import SwapAnimation from "../SwapAnimation/SwapAnimation";
import SpinAnimation from "../SpinAnimation/SpinAnimation";
import ChangingNumberAnimation from "../ChangingNumberAnimation/ChangingNumberAnimation";
import React from "react";
import "./NumberAnimation.scss"

interface Props {
    status: any;
}

export function NumberAnimation(props: Props) {
    return <div className="big-font">
        <SwapAnimation started={props.status !== "notStarted"}>
            <SpinAnimation started={props.status !== "notStarted"}>
                <ChangingNumberAnimation/>
            </SpinAnimation>
            <SpinAnimation started={props.status !== "notStarted"} infinite={false}>?</SpinAnimation>
        </SwapAnimation>
    </div>;
}
