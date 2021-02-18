import React from 'react'
import {
  Chart,
  Tooltip,
  Interval,
  Slider,
  LineAdvance

} from "bizcharts";

export const BarChart = ({ data }) => {

  const scale = {
    value: {
      formatter: function (val) {
        return val + "%";
      }
    },
    week:{ formatter: function (val){return "Week " + val;}}
  }

  return (
    <Chart padding="auto" scale={scale} data={data} autoFit interactions={['active-region']} filter={[
      ['value', val => val > 0.1]]} >
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
      <Slider start={0.3} padding={[5, 15, 5, 5]} data={[1]}/>

    </Chart>

  )
}


