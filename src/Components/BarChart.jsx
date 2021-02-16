import React from 'react'
import {
  Chart,
  Tooltip,
  Interval,
  Point,
} from "bizcharts";

export const BarChart = ({ data }) => {


  return (
    <Chart  padding="auto" data={data} autoFit interactions={['element-active']}>
      <Interval
        adjust={[
          {
            type: 'dodge',
            marginRatio: 0,
          },
        ]}
        color="name"
        position="week*value"
        // label="value"
      />
      <Tooltip shared />
    </Chart>

  )
}
