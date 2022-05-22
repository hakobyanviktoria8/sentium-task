import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Covid-19 Line Chart Data',
    },
  },
};

function LineChart({labels, numberData, typeName}) {
    let colorChart= "rgb(255 93 93)"
    if(typeName==="cases"){
        colorChart = "rgb(255 93 93)"
    } else if (typeName==="recovered"){
        colorChart = "#00b300"
    } else if (typeName==="active"){
        colorChart = "orange"
    } else if (typeName==="deaths"){
        colorChart = "gray"
    }

    const data = {
        labels,
        datasets: [
            {
            label: typeName[0]?.toUpperCase().concat(typeName.slice(1)),
            data: numberData,
            borderColor: colorChart,
            },
        ],
    };

  return (
    <Line options={options} data={data} />
  )
}

export default LineChart