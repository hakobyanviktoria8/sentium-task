import React, { useState, useEffect } from 'react';
import LineChart from './LineChart'
import PieChart from './PieChart'
import { useLocation  } from "react-router-dom";
import "./../styles/Charts.scss"

function Charts() {    
    const[chartsAllData, setChartsAllData] = useState({})
    
    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=30")
        .then(response => response.json())
        .then(data => setChartsAllData(data))
        .catch((error) => console.log("Can’t access response.", error.message))
    },[])
    
    let location = useLocation();
    let typeName = location.pathname.split("/")[1] || "cases"
    const labels = Object.keys({...chartsAllData[typeName]});
    const numberData = Object.values({...chartsAllData[typeName]})

  return (
    <>
        <LineChart labels={labels} numberData={numberData} typeName={typeName}/>
        <PieChart />
    </>
  )
}

export default Charts