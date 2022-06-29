import React from "react"
import { Pie} from "react-chartjs-2"
import Chart from 'chart.js/auto';

const PieChart = (props) => {
console.log('inside chart',props.details)
const state = {
labels: Object.keys(props.details),
datasets: [
  {
    label: "Rainfall",
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      '#B21F00',
      '#C9DE00',
      '#2FDE00',
      '#00A6B4',
      '#6800B4'
    ],
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 2,
    data: Object.values(props.details)
  }
]
}

const options={
  plugins:{
    legend:{
      display:true,
      position:"bottom"
    }
  }
}

return (
<div>
<Pie data={state} options={options}/>
</div>
)
}

export default PieChart;