import React, {ReactNode, useEffect} from "react";
import {GameStatus} from "../../Game";
import "../../styles/_animation.scss"

interface TooHighTooLowParams {
    status: GameStatus;
}

function FailSound({children}: {children: ReactNode}) {
    useEffect(() => {
        new Audio('./fail.mp3').play()
    }, [])

    return <>{children}</>
}
export function TooHighTooLow({status}: TooHighTooLowParams) {
    return <>
        <div className="big-font">
            {status === "below" &&
                <FailSound>
                    <div className="scale-animation">Too low!</div>
                </FailSound>
            }
        </div>
        <div className="big-font">
            {status === "greater" &&
                <FailSound>
                    <div className="scale-animation">Too high!</div>
                </FailSound>
            }
        </div>
    </>;
}
