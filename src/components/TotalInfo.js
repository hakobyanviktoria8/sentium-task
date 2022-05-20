import React from 'react'
import "./../styles/TotalInfo.css"

function TotalInfo({type, allCase, todayCase, updated}) {
  let day = new Date(updated)
  let updatedDate= `${day.getDate()} / ${day.getMonth()+1} / ${day.getFullYear()}`

  return (
    <div className='totalInfo'>
        <p>All {type} <b>{allCase}</b></p>
        <p>Today {type} <b>{todayCase}</b></p>
        <p>Last update {updated && updatedDate}</p>
    </div>
  )
}

export default TotalInfo