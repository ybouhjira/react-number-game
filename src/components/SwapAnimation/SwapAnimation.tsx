import {ReactNode} from "react";
import "./SwapAnimation.scss"
import cx from "classnames";

interface Props {
    children: ReactNode[]
    started?: boolean
}

export default function SwapAnimation({children, started}: Props) {
    return <div className={cx('wrapper', {started})}>
        <div className="first">
            {children[0]}
        </div>
        <div className="second">
            {children[1]}
        </div>
    </div>
}
