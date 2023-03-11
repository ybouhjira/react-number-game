import React, {useState} from 'react';
import './App.scss';
import ChangingNumberAnimation from "./components/ChangingNumberAnimation/ChangingNumberAnimation";
import SpinAnimation from "./components/SpinAnimation/SpinAnimation";
import SwapAnimation from "./components/SwapAnimation/SwapAnimation";

function generateSecret() {
    return Math.floor(Math.random() * 100 + 1);
}

function App() {
    const [secret, setSecret] = useState<number | null>(null)
    const [response, setResponse] = useState<number | undefined>()
    const started =  !!secret;

    const start = () => {
        setSecret(generateSecret())
    }

    return (
        <div className="App">
            <h1>{started ? 'What is the secret number' : 'Random Number Game'}</h1>
            <div className="number-animation">
                <SwapAnimation started={started}>
                    <SpinAnimation started={started}>
                        <ChangingNumberAnimation/>
                    </SpinAnimation>
                    <SpinAnimation started={started} infinite={false}>?</SpinAnimation>
                </SwapAnimation>
            </div>
            <SwapAnimation started={started}>
                <button className="button" onClick={start}>
                    Start
                </button>
                <input className="number-input" type="number" value={response} onChange={e => setResponse(Number(e.target.value))}/>
            </SwapAnimation>
        </div>
    );
}

export default App;
