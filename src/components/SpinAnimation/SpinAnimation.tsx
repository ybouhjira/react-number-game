import {ReactElement} from "react";
import cx from "classnames";
import "./SpinAnimation.scss"

export default function SpinAnimation({children, started}: { children: ReactElement, started: boolean }) {
    return <div className={cx({spinning: started})}>
        {children}
    </div>
}
