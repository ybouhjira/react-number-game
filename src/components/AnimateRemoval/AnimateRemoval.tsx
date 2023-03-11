import {ReactNode, useEffect, useRef, useState} from "react";
import cx from "classnames";
import "./AnimateRemoval.scss"

interface Props {
    children: ReactNode
    hideWhen: boolean
}

export default function AnimateRemoval({children, hideWhen}: Props) {
    const [hidden, setHidden] = useState(false);
    const timeoutRef = useRef<any>(null)

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            if (hideWhen) {
                setHidden(true)
            }
        }, 1000)
        return ()  => clearTimeout(timeoutRef.current)
    }, [timeoutRef, hideWhen])

    return hidden ? null : <div className={cx({animate: hideWhen})}>
        {children}
    </div>;
}
