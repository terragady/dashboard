import React from 'react'
import { Bar } from 'react-chartjs-2'


export const BarChart = (props) => {
  return (
    <div>
      <Bar
        data={props.data}
        options={{ responsive: true}}
      />
    </div>
  )
}
