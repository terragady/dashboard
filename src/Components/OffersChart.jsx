import React from 'react'
import {
  Chart,
  Tooltip,
  Interval,
  Slider,
  Point

} from "bizcharts";

export const OffersChart = ({ data }) => {

  const scale = {
    week: { formatter: function (val) { return "Week " + val; } },
    value1: { formatter: function (val) { return val / 1000 + "k NOK"; } }

  }

  return (
    <Chart padding={[0,0,30,69]} scale={scale} data={data} autoFit interactions={['active-region']} >
      <Tooltip shared={true} showCrosshairs />
      <Interval
        position="week*value1"

      />
      {/* <Point position="week*value" /> */}
      {/* <Slider start={0.3} padding={[5, 15, 5, 5]} /> */}

    </Chart>

  )
}


