import React, {useState} from 'react'
import {FaAlignRight} from 'react-icons/fa'
import _ from 'lodash'

import logo from './logo.svg'
import './App.css'
import Iframe from './components/reusable/Iframe'
const STAT_TYPES = ['open', 'high', 'low', 'close']

const renderCheckbox = (stat, statsToDisplay, handleCheckboxClick) => {
  return <div>
    <input
      type="checkbox"
      id={stat}
      name={stat}
      checked={statsToDisplay.has(stat)}
      onChange={() => handleCheckboxClick(stat)}
    />
    <label for={stat}>
      {stat} price
    </label>
  </div>
}

const renderCheckboxes = (statsToDisplay, handleCheckboxClick) => {
  return STAT_TYPES.map((stat) => renderCheckbox(stat, statsToDisplay, handleCheckboxClick))
}


function App() {
  // set states
  const [isNavBarOpen, setIsNavBarOpen] = useState(true)
  const [tickerInput, setTickerInput] = useState('VZ')
  const [url, setUrl] = useState(process.env['REACT_APP_BACKEND_URL'])
  const [statsToDisplay, setStatsToDisplay] = useState(new Set())
  // change handlers
  const handleToggleNav = () => {
    setIsNavBarOpen(!isNavBarOpen)
  }
  const handleChangeTickerInput = (event) => {
    setTickerInput(event.target.value)
  }
  const handleButtonClick = (event) => {
    const base_url = process.env['REACT_APP_BACKEND_URL']
    const stat_param_strings = STAT_TYPES.map((stat) => `${stat}=${statsToDisplay.has(stat)}`)
    const stat_param_string = stat_param_strings.join('&')
    const new_url = `${base_url}?ticker=${tickerInput}&${stat_param_string}`
    setUrl(new_url)
  }
  const handleCheckboxClick = (stat) => {
    let stats_to_display = _.clone(statsToDisplay)
    // toggle the stat that they clicked
    if (stats_to_display.has(stat)) {
      stats_to_display.delete(stat)
    }
    else {
      stats_to_display.add(stat)
    }
    setStatsToDisplay(stats_to_display)
  }
  return (
    <div className="App">
      <div className="nav-bar">
        <button className="nav-button" onClick={handleToggleNav}>
          <FaAlignRight/>
        </button>
        <ul className={isNavBarOpen ? 'nav-links show-nav': 'nav-links'}>
          <li href='#'>Stock Ticker App</li>
          <li>
            <a
              className="App-link"
              href="https://github.com/MareoRaft/stock-backend-tdi"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className="App-link"
              href="https://www.thedataincubator.com/12day.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              12-day
            </a>
          </li>
        </ul>
      </div>
      <header className="App-header">
        Ticker symbol:
        <input
          type='text'
          value={tickerInput}
          onChange={handleChangeTickerInput}
        />
        <br/>
        {renderCheckboxes(statsToDisplay, handleCheckboxClick)}
        <br/>
        <button
          type='button'
          className='click-button'
          onClick={handleButtonClick}
        >
          fetch stock data
        </button>
        <br/>
        <Iframe {...{
          url: url,
        }}/>
      </header>
    </div>
  );
}

export default App;
