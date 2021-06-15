import React from 'react';
import Links from './components/Links'
import Misson from './components/Misson'
import Vision from './components/Vision'
import CoreValues from './components/CoreValues'
import logo from './images/PirateLogo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="image-background">
        <img src={logo} alt="Grover logo" />
      </div>
      <div className="info">
        <Links />
        <div className="statements">
          <div className="mission-vision">
            <Misson />
            <Vision />
          </div>
          <CoreValues />
        </div>
      </div>
    </div>
  );
}

export default App;
