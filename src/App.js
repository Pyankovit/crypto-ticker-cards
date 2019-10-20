import React from 'react';
import Tickers from './Components/Tickers';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Crypto-ticker</h2>
      </div>
      <Tickers/>
    </div>
  );
}

export default App;
