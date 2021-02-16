import React from 'react'
import {
  Chart,
  Tooltip,
  Interval,
  Point,
  Line,
  Axis,
  Slider,
} from "bizcharts";

export const LineChart = ({ data }) => {

  const scale = {
    value: {
      alias: "Average IR",
      max: 80, formatter: function (val) {
        return val + "%";
      }
    }
  }
  return (
    <Chart padding={[10,20,50,40]} scale={scale} data={data} autoFit interactions={['element-active']}>
      <Line shape="smooth" position="week*value" />
      <Point position="week*value" />
      

      <Tooltip shared showCrosshairs />
      <Slider
				start={0.3}
				padding={[0, 0, 0, 0]}
				
			/>
    </Chart>

  )
}
