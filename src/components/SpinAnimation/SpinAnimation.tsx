import {ReactNode} from "react";
import cx from "classnames";
import "./SpinAnimation.scss"

interface Props {
    children: ReactNode;
    started?: boolean;
    infinite?: boolean;
}

export default function SpinAnimation({children, started = false, infinite = true}: Props) {
    return <div className={cx({spinning: started, infinite})}>
        {children}
    </div>
}
