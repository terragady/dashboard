import React from 'react'
import {
  Chart,
  Tooltip,
  Interval,
  Point,
  Line,
  Axis,
  Slider,
  LineAdvance
} from "bizcharts";

export const LineChart = ({ data }) => {

  const scale = {
    value: {
      alias: "Average IR",
      max: 80, 
      formatter: function (val) {
        return val + "%";
      },
      tickInterval: 5,
    }
  }
  return (
    <Chart padding="auto" scale={scale} data={data} autoFit >
      {/* <Line shape="smooth" position="week*value" /> */}
      <LineAdvance area shape="smooth" position="week*value" size={2} color="blue" point={{size:3}}/>
      {/* <Point position="week*value" stroke="blue"/> */}
      <Axis name="week" title />
      {/* <Tooltip shared showCrosshairs /> */}
      <Tooltip showCrosshairs shared>
    {(title,items) => {
      console.log(items);
      return <div className="tooltip">Week: {title}<br/><br/>Average Invoice Rate: <b>{items[0].data.value}%</b></div>
    }}
  </Tooltip>
      <Slider
				start={0.3}
				padding={[20, 10, 10, 10]}
			/>
    </Chart>

  )
}
