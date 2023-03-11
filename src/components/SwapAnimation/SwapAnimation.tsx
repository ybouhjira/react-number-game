import {ReactElement, ReactNode} from "react";
import "./SwapAnimation.scss"

interface Props {
    children: ReactNode[]
}

export default function SwapAnimation({children}: Props) {
    return <div className="wrapper">
        <div className="first">
            {children[0]}
        </div>
        <div className="second">
            {children[1]}
        </div>
    </div>
}
