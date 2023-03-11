import React, {ChangeEvent, useReducer} from 'react';
import './App.scss';
import ChangingNumberAnimation from "./components/ChangingNumberAnimation/ChangingNumberAnimation";
import SpinAnimation from "./components/SpinAnimation/SpinAnimation";
import SwapAnimation from "./components/SwapAnimation/SwapAnimation";
import Game from "./Game";

type Action = { type: 'start' }
    | { type: 'restart' }
    | { type: 'submitAnswer' }
    | { type: 'setInputValue', value: number | '' }

function GameReducer(game: Game, action: Action): Game {
    switch (action.type) {
        case "start":
            return game.start()
        case "submitAnswer":
            return game.submitAnswer()
        case "setInputValue":
            return game.setInputValue(action.value)
        case "restart":
            return game.restart()
        default:
            return game
    }
}


function App() {
    const [game, dispatch] = useReducer(GameReducer, new Game())

    const status = game.status;

    const start = () => {
        dispatch({type: 'start'})
    }

    const submitAnswer = () => {
        dispatch({type: 'submitAnswer'})
    }

    const restart = () => {
        dispatch({type: 'restart'})
    }

    const handleInputChange = ({target: {valueAsNumber: value}}: ChangeEvent<HTMLInputElement>) => {
        console.log({value})
        if(isNaN(value)) {
            dispatch({type: 'setInputValue', value: ''})
        } else if (1 <= value && value <= 100) {
            dispatch({type: 'setInputValue', value})
        }
    };

    return (
        <div className="App">
            <h1>
                {status === 'notStarted' && 'Random Number Game'}
                {status === 'noResponse' && 'What is the secret number'}
                {status === 'win' && 'You win!'}
                {game.inProgress() && 'Try again!'}
            </h1>


            <div className="big-font">{status === 'below' && 'Too low!'}</div>
            <div className="big-font">{status === 'greater' && 'Too high!'}</div>

            {!game.hasResponse() && (
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
                                   value={game.props.inputValue}
                                   onInput={handleInputChange}
                                   onKeyUp={e => e.key === "Enter" && submitAnswer()}/>
                            <button className="ok-button" onClick={submitAnswer} disabled={!game.props.inputValue}>✔
                            </button>
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
