import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import config from './config';


const url = `https://sheets.googleapis.com/v4/spreadsheets/${ config.spreadsheetId }/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${ config.apiKey }`;


function App() {
  const [sheet, setSheet] = useState([]);
  useEffect(() => {
    fetch(url).then(response => response.json()).then(data => {
    setSheet(data);
  })
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Yallow dashboard will be here!
        </p>
        {JSON.stringify(sheet)}

      </header>
    </div>
  );
}

export default App;
