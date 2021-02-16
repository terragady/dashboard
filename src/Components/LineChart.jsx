import React from 'react'
import {
  Chart,
  Tooltip,
  Interval,
  Point,
  Line,
} from "bizcharts";

export const LineChart = ({ data }) => {

  const scale = {
    value: { min: 20, max: 80 },
    name: {
      formatter: v => {
        return {
          'Overall Avg. IR': 'Average invoice rate'
        }[v]
      }
    }
  }
  return (
    <Chart padding="auto" scale={scale} data={data} autoFit interactions={['element-active']}>
      <Line shape="smooth" position="week*value" color="name" label="value" />
      <Point position="week*value" color="name" />


      <Tooltip shared />
    </Chart>

  )
}
