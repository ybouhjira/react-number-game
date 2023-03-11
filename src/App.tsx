import React from 'react';
import './App.scss';
import ChangingNumberAnimation from "./components/ChangingNumberAnimation/ChangingNumberAnimation";
import SpinAnimation from "./components/SpinAnimation/SpinAnimation";


function App() {
  return (
    <div className="App">
        <SpinAnimation started={true} >
            <ChangingNumberAnimation />
        </SpinAnimation>
    </div>
  );
}

export default App;
