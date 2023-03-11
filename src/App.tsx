import React, {useEffect, useState} from 'react';
import './App.scss';
import ChangingNumberAnimation from "./components/ChangingNumberAnimation/ChangingNumberAnimation";
import SpinAnimation from "./components/SpinAnimation/SpinAnimation";
import SwapAnimation from "./components/SwapAnimation/SwapAnimation";
import Button from "./components/Button/Button"


function App() {
    const [started, setStarted] = useState(false)

    const start = () => {
        setStarted(true);
    }

    return (
        <div className="App">
            <h1>Random Number Game</h1>
            <div className="number-animation">
                <SwapAnimation started={started}>
                    <SpinAnimation started={started}>
                        <ChangingNumberAnimation/>
                    </SpinAnimation>
                    <SpinAnimation started={started} infinite={false}>?</SpinAnimation>
                </SwapAnimation>
            </div>
            <Button onClick={start}>
                Start
            </Button>
        </div>
    );
}

export default App;
