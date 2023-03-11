import React from 'react';
import './App.scss';
import ChangingNumberAnimation from "./components/ChangingNumberAnimation/ChangingNumberAnimation";
import SpinAnimation from "./components/SpinAnimation/SpinAnimation";
import SwapAnimation from "./components/SwapAnimation/SwapAnimation";


function App() {
  return (
    <div className="App">
        <SwapAnimation>
            <SpinAnimation started={true} >
                <ChangingNumberAnimation />
            </SpinAnimation>
            <SpinAnimation started={true} infinite={false}>?</SpinAnimation>
        </SwapAnimation>
    </div>
  );
}

export default App;
