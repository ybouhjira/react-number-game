import React, {ChangeEvent, useMemo, useState} from 'react';
import './App.scss';
import ChangingNumberAnimation from "./components/ChangingNumberAnimation/ChangingNumberAnimation";
import SpinAnimation from "./components/SpinAnimation/SpinAnimation";
import SwapAnimation from "./components/SwapAnimation/SwapAnimation";

function generateSecret() {
    return Math.floor(Math.random() * 100 + 1);
}

type GameStatus = 'notStarted' | 'noResponse' | 'below' | 'greater' | 'win'

const hasResponse = (status: GameStatus) => status !== 'noResponse' && status !== 'notStarted'

const getGameStatus = (secret?: number, response?: number): GameStatus => {
    if (!secret) {
        return 'notStarted'
    }

    if (!response) {
        return 'noResponse'
    }

    if (response === secret) {
        return 'win'
    } else if (response < secret) {
        return 'below'
    } else {
        return 'greater'
    }
};

function App() {
    const [secret, setSecret] = useState<number | undefined>()
    const [response, setResponse] = useState<number | undefined>()
    const status = useMemo(() => getGameStatus(secret, response), [response, secret])

    const [inputValue, setInputValue] = useState<number | ''>('')

    console.log({
        status, response, secret
    })
    const start = () => {
        setSecret(generateSecret())
    }

    const submitAnswer = () => {
        setResponse(Number(inputValue))
        setInputValue('')
    }

    const restart = () => {
        setResponse(undefined)
        setSecret(undefined)
        setInputValue('')
    }

    const handleInputChange = ({target: {valueAsNumber: value}, }: ChangeEvent<HTMLInputElement>) => {
        if (1 <= value && value <= 100) {
            setInputValue(value)
        }
    };

    return (
        <div className="App">
            <h1>
                {status === 'notStarted' && 'Random Number Game'}
                {status === 'noResponse' && 'What is the secret number'}
                {status === 'win' && 'You win!'}
                {(status === 'greater' || status === 'below') && 'Try again!'}
            </h1>


            <div className="big-font">{status === 'below' && 'Too low!'}</div>
            <div className="big-font">{status === 'greater' && 'Too high!'}</div>

            {!hasResponse(status) && (
                <div className="big-font">
                    <SwapAnimation started={status !== 'notStarted'}>
                        <SpinAnimation started={status !== 'notStarted'}>
                            <ChangingNumberAnimation/>
                        </SpinAnimation>
                        <SpinAnimation started={status !== 'notStarted'} infinite={false}>?</SpinAnimation>
                    </SwapAnimation>
                </div>
            )}


            {status !== 'win' && (
                <SwapAnimation started={status !== 'notStarted'}>
                    <button className="button" onClick={start}>
                        Start
                    </button>
                    <div>
                        <div className="input-group">
                            <input min={1}
                                   max={100}
                                   className="number-input"
                                   type="number"
                                   value={inputValue}
                                   onInput={handleInputChange}/>
                            <button className="ok-button" onClick={submitAnswer} disabled={!inputValue}>✔</button>
                        </div>
                    </div>
                </SwapAnimation>
            )}

            <SwapAnimation started={status !== 'notStarted'} className="reset-button-wrapper">
                <button className="button reset-button" onClick={restart}>Restart</button>
            </SwapAnimation>
        </div>
    );
}

export default App;
