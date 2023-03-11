import "./ChangingNumberAnimation.scss"
import {useEffect, useMemo, useRef, useState} from "react";
import cx from "classnames";

const INTERVAL = 300;
const COUNT = 100;

const getRandomNumber = () => Math.floor(Math.random() * 90 + 10);

export const useInterval = (callback: () => void, ms: number): void => {
    const intervalRef = useRef<any>(null)
    useEffect(() => {
        intervalRef.current = setInterval(callback, ms)
        return () => clearInterval(intervalRef.current)
    }, [callback, ms, intervalRef])
}


export default function ChangingNumberAnimation() {
    const [visibleNumber, setVisibleNumber] = useState(0)
    const numbers = useMemo(() => Array.from({length: COUNT}).map(getRandomNumber), [])
    useInterval(() => setVisibleNumber(Math.floor(Math.random() * 90 + 10)), INTERVAL)

    return <div className={cx('rolling-animation')}>
        {numbers.map((n, i) => (
            <div className={cx('random-number', {visible: visibleNumber === i})} key={i}>
                {n}
            </div>
        ))}
    </div>
}
