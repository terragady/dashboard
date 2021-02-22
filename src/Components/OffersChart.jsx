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
    value: { alias: "Offers sent", formatter: function (val) { return val / 1000 + "k NOK"; } }

  }

  return (
    <Chart padding={[0, 0, 80, 65]} scale={scale} data={data} autoFit interactions={['active-region']} >
      <Tooltip shared={true}  />
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
      {/* <Point position="week*value" /> */}
      {/* <Slider start={0.3} padding={[5, 15, 5, 5]} /> */}
      <Slider
        start={0.3}
        padding={[5, 15, 5, 5]}
      />
    </Chart>

  )
}


