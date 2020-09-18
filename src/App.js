import React, {useState} from 'react'
import logo from './logo.svg'
import './App.css'
import Iframe from './components/reusable/Iframe'

function App() {
  const [tickerInput, setTickerInput] = useState('VZ')
  const handleChangeTickerInput = (event) => {
    setTickerInput(event.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        Ticker symbol:
        <input
          type='text'
          value={tickerInput}
          onChange={handleChangeTickerInput}
        />
        tickervalue preview:
        {tickerInput}




        <Iframe>i am the iframe component</Iframe>
        done char.
      </header>
    </div>
  );
}

export default App;
