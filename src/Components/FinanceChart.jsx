import React from 'react'
import {
  Chart,
  Tooltip,
  Interval,
  Slider,

} from "bizcharts";

export const FinanceChart = ({ data }) => {

  const scale = {

  }

  return (
    <Chart padding="auto" scale={scale} data={data} autoFit interactions={['active-region']} >
      <Interval
        adjust={[
          {
            type: 'dodge',
            marginRatio: 0,
          },
        ]}
        color="name"
        position="month*value"
      />
      <Tooltip shared />
    </Chart>

  )
}


