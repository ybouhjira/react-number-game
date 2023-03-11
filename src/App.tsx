import React, {useReducer} from 'react';
import SwapAnimation from "./components/SwapAnimation/SwapAnimation";
import Game from "./Game";
import Heading from "./components/Heading/Heading";
import {TooHighTooLow} from "./components/TooHighTooLow/TooHighTooLow";
import {NumberAnimation} from "./components/NumberAnimation/NumberAnimation";
import {NumberInput} from "./components/NumberInput/NumberInput";
import {GameReducer} from "./GameReducer";
import './App.scss';
import "./Button.scss"

function App() {
    const [game, dispatch] = useReducer(GameReducer, new Game())
    const status = game.status;

    return (
        <div className="App">
            <Heading status={status} gameInProgress={game.inProgress()}/>
            <TooHighTooLow status={status}/>
            {!game.hasResponse() && <NumberAnimation status={status}/>}
            {status !== 'win' && (
                <SwapAnimation started={status !== 'notStarted'}>
                    <button className="button" onClick={() => dispatch({type: 'start'})}>
                        Start
                    </button>
                    <NumberInput
                        inputValue={game.props.inputValue}
                        setValue={(value: number) => dispatch({type: 'setInputValue', value})}
                        onClick={() => dispatch({type: 'submitAnswer'})}/>
                </SwapAnimation>
            )}

            <SwapAnimation started={status !== 'notStarted'} className="reset-button-wrapper">
                <button className="button reset-button" onClick={() => dispatch({type: 'restart'})}>Restart</button>
            </SwapAnimation>
        </div>
    );
}

export default App;
