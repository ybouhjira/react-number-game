import SwapAnimation from "../SwapAnimation/SwapAnimation";
import SpinAnimation from "../SpinAnimation/SpinAnimation";
import ChangingNumberAnimation from "../ChangingNumberAnimation/ChangingNumberAnimation";
import React, {useEffect} from "react";
import "./NumberAnimation.scss"

interface Props {
    started: boolean;
}

export function NumberAnimation({started}: Props) {
    useEffect(() => {
        if (started) {
            new Audio('./spin.wav').play()
        }

    }, [started])
    return <div className="big-font">
        <SwapAnimation started={started}>
            <SpinAnimation started={started}>
                <ChangingNumberAnimation/>
            </SpinAnimation>
            <SpinAnimation started={started} infinite={false}>?</SpinAnimation>
        </SwapAnimation>
    </div>;
}
