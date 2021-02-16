import React, { useState, useEffect } from 'react';
import './App.css';
import config from './config';
import { BarChart } from './Components/BarChart';
import { LineChart } from './Components/LineChart';
import { Line } from 'chartist';
import BarLoader from "react-spinners/PulseLoader";



document.title = "Yallow Life Science - DashBoard";

const url = `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}/values:batchGet?majorDimension=COLUMNS&ranges=Sheet1!D:N&ranges=Sheet1!P:Y&ranges=Sheet1!AB:AF&key=${config.apiKey}`;
const instaUrl = 'https://www.instagram.com/yallowlifescience/channel/?__a=1';
function App() {
  const [sheet, setSheet] = useState({});
  const [overallAvg, setOverallAvg] = useState({});
  const [insta, setInsta] = useState({ foll: 0, posts: 0 });


  const fetchFromSheets = () => {
    fetch(url).then(response => response.json()).then(data => {
      let datasets = [];
      let overallAvg = [];
      data.valueRanges[1].values[0].forEach((e, i) => {
        // how many weeks behind
        if (i === 0 || i < data.valueRanges[1].values[0].length - 25) { return }
        for (let l = 1; l < data.valueRanges[1].values.length; l++) {
          // skip the names stated here
          if (data.valueRanges[1].values[l][0] === "Overall Avg. IR") {
            overallAvg.push({ week: data.valueRanges[1].values[0][i], name: data.valueRanges[1].values[l][0], value: parseFloat(data.valueRanges[1].values[l][i]) })
          }
          else if (data.valueRanges[1].values[l][0] === "Employee 7" || data.valueRanges[1].values[l][0] === "Kamila") {
          } else {
            datasets.push({ week: data.valueRanges[1].values[0][i], name: data.valueRanges[1].values[l][0], value: parseFloat(data.valueRanges[1].values[l][i]) })
          }
        }
      })
      setSheet(datasets)
      setOverallAvg(overallAvg)
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

  return (
    <div className="card-wrapper">
      <div className="first-row">
        <div className="card-small">
          <div className="card-title">Instagram Followers:</div>
          <div className="card-value">{insta.foll ? insta.foll : <BarLoader color="darkgrey" size={12} />}</div>
        </div>
        <div className="card-small">
          <div className="card-title">Instagram Posts:</div>
          <div className="card-value">{insta.posts ? insta.posts : <BarLoader color="darkgrey" size={12} />}</div>
        </div>
      </div>
      <div className="second-row">
        <div className="card-big">
          <div className="card-title">
            Invoice Rate
          </div>
          <div className="chart-box">
            {sheet[1] ? <BarChart data={sheet} /> : <BarLoader color="darkgrey" size={20} />}
          </div>
        </div>
        <div className="card-medium">
          <div className="card-title">
            Overall Average Invoice Rate
          </div>
          <div className="chart-box">
            {overallAvg[1] ? <LineChart data={overallAvg} />
              : <BarLoader color="darkgrey" size={20} />}

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
