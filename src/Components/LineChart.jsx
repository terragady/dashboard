import React from 'react'
import {
  Chart,
  Tooltip,
  Interval,
  Point,
  Line,
  Axis,
} from "bizcharts";

export const LineChart = ({ data }) => {

  const scale = {
    value: {
      min: 20, max: 80, formatter: function (val) {
        return val + "%";
      }
    },
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
      <Axis
        name="value"
        label={{
          formatter: function (val) {
            return val + "%";
          }
        }}
      />

      <Tooltip shared />
    </Chart>

  )
}
