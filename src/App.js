import React, {useState} from 'react'
import logo from './logo.svg'
import './App.css'
import Iframe from './components/reusable/Iframe'

function App() {
  const [tickerInput, setTickerInput] = useState('VZ')
  const [url, setUrl] = useState(process.env['REACT_APP_BACKEND_URL'])
  const handleChangeTickerInput = (event) => {
    setTickerInput(event.target.value)
  }
  const handleButtonClick = (event) => {
    const base_url = process.env['REACT_APP_BACKEND_URL']
    const new_url = `${base_url}?ticker=${tickerInput}`
    setUrl(new_url)
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
        <button
          type='button'
          onClick={handleButtonClick}
        >
          fetch stock data
        </button>




        <Iframe {...{
          url: url,
        }}/>
      </header>
    </div>
  );
}

export default App;
