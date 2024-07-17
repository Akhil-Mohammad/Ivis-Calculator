import logo from './logo.svg';
import './App.css';
import React from 'react';
import CalculatorOnBitrate from "./components/calculatorOnBitrate";
import CalculatorOnCamerasAndBandwidth from './components/calculatorOnCamerasAndBandwidth';
import CalculatorOnSizeAndTime from './components/calculatorOnSizeAndTime';
import Home from './components/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
    <Home />
            {/* <CalculatorOnBitrate />
            <CalculatorOnCamerasAndBandwidth />
            <CalculatorOnSizeAndTime /> */}
        
        
    </div>
    
  );
}

export default App;
