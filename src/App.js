import React, { useState, useEffect } from 'react';
import './App.css';
//import config from './config';
import { BarChart } from './Components/BarChart';
import { SocialBarChart } from './Components/SocialBarChart';
import { LineChart } from './Components/LineChart';
import { FinanceChart } from './Components/FinanceChart';
import { SalesChart } from './Components/SalesChart';
import { OffersChart } from './Components/OffersChart';
import BarLoader from "react-spinners/PulseLoader";
import Clock from './Components/Clock';



document.title = "Yallow Life Science - DashBoard";

const url = `https://sheets.googleapis.com/v4/spreadsheets/1VUxJ_qQwCoPou2nzBn2B-yPmN2ICeHzfT6FQvbMjOL8/values:batchGet?majorDimension=COLUMNS&ranges=Sheet1!D:N&ranges=Sheet1!P:Z&ranges=Sheet1!AB:AF&ranges=Sheet1!B2&ranges=Sheet1!B4&ranges=Sheet1!B5&ranges=Sheet1!B6&key=AIzaSyAhJlD7G3G5EWwHSQWJA-oiY3rm_9mr2P8`;
function App() {
  const [sheet, setSheet] = useState({});
  const [overallAvg, setOverallAvg] = useState({});
  const [insta, setInsta] = useState(0);
  const [linked, setLinked] = useState(0);
  const [diffData, setDiffData] = useState(0);
  const [finance, setFinance] = useState(0);
  const [newLastWeek, setNewLastWeek] = useState(0);
  const [sales, setSales] = useState(0);
  const [offers, setOffers] = useState(0);


  const fetchFromSheets = () => {
    fetch(url).then(response => response.json()).then(data => {

      // how much weeks behind fetch data should occur
      const weeksBehind = 25
      // fetch hours
      let datasets = [];
      let NewOverallAvg = [];
      data.valueRanges[1].values[0].forEach((e, i) => {
        // how many weeks behind
        if (i === 0 || i < data.valueRanges[1].values[0].length - weeksBehind) { return }
        for (let l = 1; l < data.valueRanges[1].values.length; l++) {
          // skip the names stated here or do something with them
          if (data.valueRanges[1].values[l][0] === "Overall Avg. IR") {
            NewOverallAvg.push({ week: data.valueRanges[1].values[0][i], name: data.valueRanges[1].values[l][0], value: parseFloat(data.valueRanges[1].values[l][i]), value1: parseFloat(data.valueRanges[1].values[l][i]) })
          }
          else if (data.valueRanges[1].values[l][0] === "Employee 7") {}
          else {
            datasets.push({ week: data.valueRanges[1].values[0][i], name: data.valueRanges[1].values[l][0], value: parseFloat(data.valueRanges[1].values[l][i]), avg: parseFloat(data.valueRanges[1].values[l][i]) })
          }
        }
      })


      setNewLastWeek({
        instaFoll: data.valueRanges[0].values[1][data.valueRanges[0].values[1].length - 1],
        instaPost: data.valueRanges[0].values[2][data.valueRanges[0].values[2].length - 1],
        linkedFoll: data.valueRanges[0].values[3][data.valueRanges[0].values[3].length - 1],
        linkedPost: data.valueRanges[0].values[4][data.valueRanges[0].values[4].length - 1]
      })


      // Finance
      let NEW_Finance = { rest: [], acc: [] };
      data.valueRanges[2].values[0].forEach((e, i) => {
        // how many weeks behind
        if (i === 0 || i < data.valueRanges[2].values[0].length - weeksBehind) { return }
        for (let l = 1; l < 5; l++) {
          if (l === 2) { }
          else if (l === 4) {
            NEW_Finance['acc'].push({
              month: e,
              name: data.valueRanges[2].values[l][0],
              value: parseFloat(data.valueRanges[2].values[l][i]),
            })
          } else {
            NEW_Finance['rest'].push({
              month: e,
              name: data.valueRanges[2].values[l][0],
              value: parseFloat(data.valueRanges[2].values[l][i]),

            })
          }
        }
      }
      )

      //fetch diff data
      let instaNewFollPosts = []
      data.valueRanges[0].values[0].forEach((e, i) => {
        // how many weeks behind
        if (i === 0 || i < data.valueRanges[1].values[0].length - weeksBehind) { return }
        instaNewFollPosts.push({ "week": e, "value": parseInt(data.valueRanges[0].values[1][i]), "name": "New Followers" })
        instaNewFollPosts.push({ "week": e, "value": parseInt(data.valueRanges[0].values[2][i]), "name": "New Posts" })
      })
      let linkedNewFollPosts = []
      data.valueRanges[0].values[0].forEach((e, i) => {
        // how many weeks behind
        if (i === 0 || i < data.valueRanges[1].values[0].length - weeksBehind) { return }
        linkedNewFollPosts.push({ "week": e, "value": parseInt(data.valueRanges[0].values[3][i]), "name": "New Followers" })
        linkedNewFollPosts.push({ "week": e, "value": parseInt(data.valueRanges[0].values[4][i]), "name": "New Posts" })
      })
      let newSales = []
      data.valueRanges[0].values[0].forEach((e, i) => {
        // how many weeks behind
        if (i === 0 || i < data.valueRanges[1].values[0].length - weeksBehind) { return }
        newSales.push({ "week": e, "value": parseInt(data.valueRanges[0].values[6][i]), "name": "New Leads" })
        newSales.push({ "week": e, "value": parseInt(data.valueRanges[0].values[5][i]), "name": "Sales Meetings" })
        newSales.push({ "week": e, "value": parseInt(data.valueRanges[0].values[7][i]), "name": "Meetings Booked" })
      })

      let NEWoffers = []
      data.valueRanges[0].values[0].forEach((e, i) => {
        // how many weeks behind
        if (i === 0 || i < data.valueRanges[1].values[0].length - weeksBehind) { return }
        NEWoffers.push({ name: "Offers sent", "week": e, "value": parseInt(data.valueRanges[0].values[8][i]) })
        let wins = data.valueRanges[0].values[10][i] ? data.valueRanges[0].values[10][i] : 0
        NEWoffers.push({ name: "Wins", "week": e, "value": parseInt(wins) })
      })

      if (JSON.stringify(offers) !== JSON.stringify(NEWoffers)) { setOffers(NEWoffers) }
      if (JSON.stringify(sales) !== JSON.stringify(newSales)) { setSales(newSales); }
      if (JSON.stringify(finance) !== JSON.stringify(NEW_Finance)) { setFinance(NEW_Finance); }
      if (JSON.stringify(diffData) !== JSON.stringify({ instaNewFollPosts, linkedNewFollPosts })) { setDiffData({ instaNewFollPosts, linkedNewFollPosts }) }
      if (JSON.stringify(linked) !== JSON.stringify({ foll: data.valueRanges[3].values[0], posts: data.valueRanges[4].values[0] })) { setLinked({ foll: data.valueRanges[3].values[0], posts: data.valueRanges[4].values[0] }) }
      if (JSON.stringify(insta) !== JSON.stringify({ foll: data.valueRanges[5].values[0], posts: data.valueRanges[6].values[0] })) { setInsta({ foll: data.valueRanges[5].values[0], posts: data.valueRanges[6].values[0] }) }
      if (JSON.stringify(sheet) !== JSON.stringify(datasets)) { setSheet(datasets) }
      if (JSON.stringify(overallAvg) !== JSON.stringify(NewOverallAvg)) { setOverallAvg(NewOverallAvg) }
    })
  }

  useEffect(() => {
    fetchFromSheets();
    const interval = setInterval(() => {
      fetchFromSheets();
    },
      // 5000
      3600000
      // 300000
    );

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="card-wrapper">
      <div className="header-row">
        <Clock />
      </div>
      <div className="second-row">
        <div className="card-small-plus">
          <div className="card-title">
            Instagram New Followers and Posts
          </div>
          <div className="chart-box">
            {diffData.instaNewFollPosts ? <SocialBarChart data={diffData.instaNewFollPosts} />
              : <BarLoader color="darkgrey" size={20} />}
          </div>
        </div>
        <div className="first-row">
          <div className="card-small">
            <div className="card-title">Instagram Followers:</div>
            <div className="card-value">{insta.foll ? insta.foll + ` (${newLastWeek.instaFoll})` : <BarLoader color="darkgrey" size={12} />}</div>
          </div>
          <div className="card-small">
            <div className="card-title">Instagram Posts:</div>
            <div className="card-value">{insta.posts ? insta.posts : <BarLoader color="darkgrey" size={12} />}</div>
          </div>
        </div>        <div className="first-row">


          <div className="card-small">
            <div className="card-title">LinkedIn Followers:</div>
            <div className="card-value">{linked.foll ? linked.foll + ` (${newLastWeek.linkedFoll})` : <BarLoader color="darkgrey" size={12} />}</div>
          </div>
          <div className="card-small">
            <div className="card-title">LinkedIn Posts:</div>
            <div className="card-value">{linked.posts ? linked.posts : <BarLoader color="darkgrey" size={12} />}</div>
          </div>
        </div>
        <div className="card-small-plus">
          <div className="card-title">
            LinkedIn New Followers and Posts
          </div>
          <div className="chart-box">
            {diffData.linkedNewFollPosts ? <SocialBarChart data={diffData.linkedNewFollPosts} />
              : <BarLoader color="darkgrey" size={20} />}
          </div>
        </div>
      </div>



      <div className="third-row">
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



      <div className="fourth-row">
        <div className="card-small-plus">
          <div className="card-title">
            Finance
          </div>
          <div className="chart-box">
            {finance.acc ? <FinanceChart data={finance} />
              : <BarLoader color="darkgrey" size={20} />}
          </div>
        </div>
        <div className="card-small-plus">
          <div className="card-title">
            Sales
          </div>
          <div className="chart-box">
            {finance.acc ? <SalesChart data={sales} />
              : <BarLoader color="darkgrey" size={20} />}
          </div>
        </div>
        <div className="card-small-plus">
          <div className="card-title">
            Offers
          </div>
          <div className="chart-box">
            {finance.acc ? <OffersChart data={offers} />
              : <BarLoader color="darkgrey" size={20} />}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
