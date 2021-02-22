import React from 'react'
import {
  Chart,
  Tooltip,
  Axis,
  Slider,
  LineAdvance
} from "bizcharts";

export const LineChart = ({ data }) => {

  const scale = {
    value: {
      alias: "Average IR",
      min: 0,
      max: 100, 
      formatter: function (val) {
        return val + "%";
      },
      tickInterval: 5,
    }
  }
  return (
    <Chart padding="auto" scale={scale} data={data} autoFit filter={[
      ['value', val => val > 0.1]]}>
      {/* <Line shape="smooth" position="week*value" /> */}
      <LineAdvance area shape="smooth" position="week*value" size={2} color="blue" point={{size:3}}/>
      {/* <Point position="week*value" stroke="blue"/> */}
      <Axis name="week" title />
      {/* <Tooltip shared showCrosshairs /> */}
      <Tooltip showCrosshairs shared>
    {(title,items) => {
      return <div className="tooltip">Week: {title}<br/><br/>Average Invoice Rate: <b style={{marginLeft: "15px"}}>{items[0].data.value}%</b></div>
    }}
  </Tooltip>
      <Slider
				start={0.3}
				padding={[5, 15, 5, 5]}
			/>
    </Chart>

  )
}
