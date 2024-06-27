"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonatChart = ({accounts}: {accounts: DoughnutChartProps}) => {

  // Example Data Donuts
  const data = {
    datasets: [
      {
        label: 'Banks',
        data: [1250, 2500, 3942],
        backgroundColor: ['#dc2626', "#f97316", "#a3e635"]
      }
    ],
    labels: ['Test Bank 1', "test Bank 2", "Test Bank 3"]
  }

  return (
    <Doughnut data={data} options={{
      cutout: '50%',
      plugins: {
        legend: {
          display: false
        }
      }
    }} />
  )
}

export default DonatChart