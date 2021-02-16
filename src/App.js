import React, { useState, useEffect } from 'react';
import './App.css';
import config from './config';
import { BarChart } from './Components/BarChart';
import {
  G2,
  Chart,
  Tooltip,
  Interval,
} from "bizcharts";

document.title = "Yallow Life Science - DashBoard";

const url = `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}/values:batchGet?majorDimension=COLUMNS&ranges=Sheet1!D:N&ranges=Sheet1!P:Y&ranges=Sheet1!AB:AF&key=${config.apiKey}`;
const instaUrl = 'https://www.instagram.com/yallowlifescience/channel/?__a=1';
function App() {
  const [sheet, setSheet] = useState({
  });
  const [insta, setInsta] = useState({ foll: 0, posts: 0 });
  
  
  const fetchFromSheets = () => {
    fetch(url).then(response => response.json()).then(data => {
      let datasets = [];
      data.valueRanges[1].values[0].forEach((e, i) => {
        if (i === 0) { return }
        for (let l = 1; l < data.valueRanges[1].values.length; l++) {
          datasets.push({week: data.valueRanges[1].values[0][i], name: data.valueRanges[1].values[l][0], value: parseFloat(data.valueRanges[1].values[l][i])})
        }
      })
      setSheet(datasets)
      console.log(datasets)


      // data.valueRanges[1].values.forEach((e, i) => {
      //   if (e[0] === "Overall Avg. IR") {return}
      //   if (i === 0) {
      //     e.forEach((e, i) => {
      //       if (i === 0) { return }
      //       weekLabels = [...weekLabels, e];
      //     })
      //   } else {
      //     let tempData = {
      //       label: "", data: [], backgroundColor: colors.shift(), hoverBackgroundColor: colors2.shift(), borderWidth: 1,
      //       // , hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      //       // hoverBorderColor: 'rgba(255,99,132,1)', backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}` 
      //     }
      //     e.forEach((e, i) => {
      //       if (i === 0) { tempData.label = e } else {
      //         tempData['data'].push(e);
      //       }

      //     })
      //     datasets = [...datasets, tempData]
      //   }
      // });

      // // data.valueRanges[1].values[0]
      // setSheet({ hours: { labels: weekLabels, datasets } });
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
    <div className="App">
        <p>
          Yallow dashboard will be here!
        </p>
        Instagram Followers: {insta.foll} <br />
        Instagram Posts: {insta.posts} <br />
        <div style={{height: "30vh", width: "50%", border: "1px solid red"}}>
        {/* <BarChart data={sheet.hours}/> */}
        <Chart padding="auto" data={sheet} autoFit>
      <Interval
        adjust={[
         {
            type: 'dodge',
            marginRatio: 0,
          },
        ]}
        color="name"
        position="week*value"
      />
      <Tooltip shared />
    </Chart>
        </div>
    </div>
  );
}

export default App;
