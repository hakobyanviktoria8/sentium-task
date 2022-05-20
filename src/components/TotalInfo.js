import React from 'react'
import { useLocation  } from "react-router-dom";
import "./../styles/TotalInfo.css"

function TotalInfo({allData}) {
    let location = useLocation();
    let typeName = location.pathname.split("/")[1]
    let typeNameToday = "today".concat(typeName[0]?.toUpperCase().concat(typeName.slice(1)))
    let day = new Date(allData?.updated)
    let updatedDate= `${day.getDate()}/${day.getMonth()+1}/${day.getFullYear()}`
  
  return (
    <div className='totalInfo'>
        <p>All {typeName} <b>{allData[typeName]}</b></p>
        <p>Today {typeName} <b>{allData[typeNameToday]}</b></p>
        <p>Last update {allData.updated && updatedDate}</p>
    </div>
  )
}

export default TotalInfo