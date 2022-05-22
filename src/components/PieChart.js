import React, {useState, useEffect} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import "./../styles/PieChart.css"

ChartJS.register(ArcElement, Tooltip, Legend);

function PinChart() {
  const[allData, setAllData]= useState("")

  useEffect(() => {
    const getAllData = async () => {
      await fetch("https://disease.sh/v3/covid-19/all")
      .then(response => response.json())
      .then(data => setAllData(data))
      .catch((error) => console.log("Can’t access response.", error.message))
    }
    getAllData();
  },[])

  const data = {
    labels: ['Cases', 'Recovered', 'Active', 'Deaths'],
    datasets: [
      {
        label: '# of Votes',
        data: [allData.cases, allData.recovered, allData.active, allData.deaths],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          '#e2ffdd',
          'rgba(255, 206, 86, 0.2)',
          '#e6e6e6',
        ],
        borderColor: [
          'rgb(255 93 93)',
          '#00b300',
          'orange',
          'gray',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='pinChart'>
      <h2>Covid-19 Pie Chart Data</h2>
      <Pie data={data} />
    </div>
  )
}

export default PinChart