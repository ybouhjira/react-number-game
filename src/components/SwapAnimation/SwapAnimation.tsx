import {ReactNode} from "react";
import "./SwapAnimation.scss"
import cx from "classnames";

interface Props {
    children: [ReactNode, ReactNode] | ReactNode
    started?: boolean
    className?: string
}

export default function SwapAnimation({children, started, className}: Props) {
    return <div className={cx('swap-animation', {started}, className)}>
        {Array.isArray(children) ? (
            <>
                <div className="first">{children[0]}</div>
                <div className="second">{children[1]}</div>
            </>
        ) : (
            <div className="second">{children}</div>
        )}
    </div>
}
