import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import config from './config';
document.title = "Yallow Life Science - DashBoard";

const url = `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}/values:batchGet?ranges=Sheet1!A:B&majorDimension=COLUMNS&ranges=Sheet1!D:N&ranges=Sheet1!P:Y&ranges=Sheet1!AB:AF&key=${config.apiKey}`;
const instaUrl = 'https://www.instagram.com/yallowlifescience/channel/?__a=1';


function App() {
  const [sheet, setSheet] = useState([]);
  const [insta, setInsta] = useState({foll: 0, posts: 0});

  
  const fetchFromSheets = () => {
  fetch(url).then(response => response.json()).then(data => {
    setSheet(data);
  })
}

const fetchFromInstagram = () => {
  fetch(instaUrl).then(response => response.json()).then(data => {
    setInsta({foll: data.graphql.user.edge_followed_by.count, posts: data.graphql.user.edge_owner_to_timeline_media.count});
      })
}
  useEffect(() => {
    fetchFromSheets();
    fetchFromInstagram();
    const interval = setInterval(() => {
      fetchFromSheets();
      fetchFromInstagram();
    }, 300000);

    return () => clearInterval(interval)
  }, [])
console.log(sheet)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Yallow dashboard will be here!
        </p>
        Instagram Followers: {insta.foll} <br />
        Instagram Posts: {insta.posts} <br />
        { sheet && sheet.valueRanges ? JSON.stringify(sheet.valueRanges[0]) : "Loading..." }

      </header>
    </div>
  );
}

export default App;
