import React from 'react'
import {
  Chart,
  Tooltip,
  Interval,
} from "bizcharts";

export const BarChart = ({ data }) => {
  return (
    <Chart padding="auto" data={data} autoFit>
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

  )
}
