import React from 'react'
import logo from './logo.svg'
import './App.css'
import Char from './components/one-time/Char'
import Iframe from './components/reusable/Iframe'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React.  TDI.
        </a>
        <Iframe>i am the iframe component</Iframe>
        done char.
      </header>
    </div>
  );
}

export default App;
