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
    const [status, setStatus] = useState<'win' | 'responseBelowSecret' | 'responseGreaterThanSecret'>()
    const [inputValue, setInputValue] = useState<number | undefined>()
    const started = !!secret;

    const start = () => {
        setSecret(generateSecret())
    }

    const submitAnswer = () => {
        setResponse(inputValue)
        if (!response || !secret) {
            return
        }

        if (response === secret) {
            setStatus('win')
        } else if (response > secret) {
            setStatus('responseGreaterThanSecret')
        } else {
            setStatus('responseBelowSecret')
        }
    }

    const reset = () => {
        setResponse(undefined)
        setSecret(null)
        setInputValue(undefined)
    }

    return (
        <div className="App">
            <h1>{!response ? (
                started ? 'What is the secret number' : 'Random Number Game'
            ) : (
                <>
                    {status === 'win' && 'You win!'}
                    {status !== 'win' && 'Try again!'}
                    {status === 'responseBelowSecret' && 'Too low!'}
                    {status === 'responseGreaterThanSecret' && 'Too High!'}
                </>
            )}</h1>
            <div className="number-animation">
                <SwapAnimation started={started}>
                    <SpinAnimation started={started}>
                        <ChangingNumberAnimation/>
                    </SpinAnimation>
                    <SpinAnimation started={started} infinite={false}>?</SpinAnimation>
                </SwapAnimation>
            </div>

            {status !== 'win' && (
                <SwapAnimation started={started}>
                    <button className="button" onClick={start}>
                        Start
                    </button>
                    <div>
                        <div className="input-group">
                            <input className="number-input" type="number" value={inputValue}
                                   onChange={e => setInputValue(Number(e.target.value))}/>
                            <button className="ok-button" onClick={submitAnswer}>✔</button>
                        </div>
                        <button className="button" onClick={reset}>Reset</button>
                    </div>
                </SwapAnimation>
            )}
        </div>
    );
}

export default App;
