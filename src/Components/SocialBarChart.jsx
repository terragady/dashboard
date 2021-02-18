import React from 'react'
import {
  Chart,
  Tooltip,
  Interval,
  Point,
  Slider,
  Axis,
} from "bizcharts";

export const SocialBarChart = ({ data }) => {


  return (
    <Chart padding="auto" data={data} autoFit interactions={['active-region']} >
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
      <Tooltip shared scale={{week:{ formatter: function (val){return "Week" + val;}}}} />
      <Slider start={0.5} padding={[5, 5, 5, 5]} />

    </Chart>

  )
}


