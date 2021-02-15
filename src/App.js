import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2'
import { defaults } from 'react-chartjs-2';
import './App.css';
import config from './config';

document.title = "Yallow Life Science - DashBoard";

const url = `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}/values:batchGet?majorDimension=COLUMNS&ranges=Sheet1!D:N&ranges=Sheet1!P:Y&ranges=Sheet1!AB:AF&key=${config.apiKey}`;
const instaUrl = 'https://www.instagram.com/yallowlifescience/channel/?__a=1';
const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}

function App() {
  const [sheet, setSheet] = useState({
    hours: {
      labels: [],
      datasets: [{
        label: "Petter",
        data: []
      }]
    }
  });
  const [insta, setInsta] = useState({ foll: 0, posts: 0 });


  const fetchFromSheets = () => {
    fetch(url).then(response => response.json()).then(data => {
      let weekLabels = [];
      let datasets = [];

      data.valueRanges[1].values.forEach((e, i) => {
        if (i === 0) {
          e.forEach((e, i) => {
            if (i === 0) { return }
            weekLabels = [...weekLabels, e];
          })
        } else {
          let tempData = { label: "", data: [], backgroundColor: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})` }
          e.forEach((e, i) => {
            if (i === 0) { tempData.label = e } else {
              tempData['data'].push(e);
            }
            
          })
          datasets = [...datasets, tempData]
        }
      });

      // data.valueRanges[1].values[0]
      setSheet({ hours: { labels: weekLabels, datasets } });
    })
  }

  const fetchFromInstagram = () => {
    fetch(instaUrl).then(response => response.json()).then(data => {
      setInsta({ foll: data.graphql.user.edge_followed_by.count, posts: data.graphql.user.edge_owner_to_timeline_media.count });
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
        <p>
          Yallow dashboard will be here!
        </p>
        Instagram Followers: {insta.foll} <br />
        Instagram Posts: {insta.posts} <br />
        <Bar data={sheet.hours} options={options} />

      </header>
    </div>
  );
}

export default App;
