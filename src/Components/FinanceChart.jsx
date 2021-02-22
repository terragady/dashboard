import React from 'react'
import {
  Chart,
  Tooltip,
  Interval,
  Slider,
  LineAdvance,
  View,
  Axis,
  Legend

} from "bizcharts";

export const FinanceChart = ({ data }) => {

  const scale = {
    value: {
      alias: "Cummulative",
      sync: true,
      nice: true,
      formatter: function (val) { 
        let res
        if (Math.abs(val) < 1000) {return val + "NOK"}
        else if (Math.abs(val) >= 1000 && Math.abs(val) < 1000000){
        return val / 1000 + "k NOK"; }
        else {return Math.ceil(val / 1000000) + "," + (Math.abs(val) - 1000000)/1000 + "k NOK"}
      
      }
    },
    month: { sync: true }
  }

  return (
    <Chart padding={[20,80,80,80]} scale={scale} data={data.acc} autoFit interactions={['active-region']} >
      <Tooltip shared />

      <Interval position="month*value" color="rgba(10,10,10,0.2)"/>

      <View padding={0} scale={scale} data={data.rest} autoFit>
        <LineAdvance shape="smooth" color={["name", ["rgb(235, 236, 28)", "#6E97D7"]]} position="month*value" size={2} point={{ size: 3 }} />


      </View>
    

    </Chart>

  )
}




