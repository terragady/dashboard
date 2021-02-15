import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import config from './config';
document.title = "Yallow Life Science - DashBoard";

const url = `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}/values:batchGet?ranges=Sheet1!A:B&majorDimension=COLUMNS&ranges=Sheet1!D:N&ranges=Sheet1!P:Y&ranges=Sheet1!AB:AF&key=${config.apiKey}`;



function App() {
  const [sheet, setSheet] = useState([]);


  const fetchFromSheets = () => {
  fetch(url).then(response => response.json()).then(data => {
        setSheet(data);
        console.log("drugie");
      })
}
  useEffect(() => {
    console.log("pierwsze");
    fetchFromSheets();
    const interval = setInterval(() => {
      fetchFromSheets();
    }, 10000);

    return () => clearInterval(interval)
  }, [])



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Yallow dashboard will be here!
        </p>
        { sheet && sheet.valueRanges ? JSON.stringify(sheet.valueRanges[0]) : "Loading..." }

      </header>
    </div>
  );
}

export default App;
