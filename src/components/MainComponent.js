import React, {useState, useEffect} from 'react'
import "./../styles/MainComponent.scss"
import { useLocation  } from "react-router-dom";
import Charts from './Charts';

function MainComponent() {
  const[allCountries, setAllCountries]= useState(null)
  let location = useLocation();
  let typeName = location.pathname.split("/")[1]

  // give all countries data and sort by counry name
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries")
    .then(response => response.json())
    .then(data => setAllCountries(data?.sort((a, b) => (a.country > b.country) ? 1 : -1)))
    .catch((error) => console.log("Can’t access response.", error.message))
  },[])

  // sort table data when change path
  if(typeName==="cases"){
    allCountries?.sort((a, b) => (a.cases < b.cases) ? 1 : -1)
  } else if(typeName==="recovered"){
    allCountries?.sort((a, b) => (a.recovered < b.recovered) ? 1 : -1)
  } else if(typeName==="active"){
    allCountries?.sort((a, b) => (a.active < b.active) ? 1 : -1)
  } else if(typeName==="deaths"){
    allCountries?.sort((a, b) => (a.deaths < b.deaths) ? 1 : -1)
  }

  return (
    <div className='mainContentWrapper'>
      {/* Charts Line and Pie */}
      <div className='chartsWrapper'>
        <Charts/>
      </div>

      <h2>Covid-19 Table Data</h2>

      {/* table data */}
      <div className='mainComponent'>
        {
        !allCountries ? 
          <h2>Loading...</h2>
        :
        <table>
          <thead>
            <tr className="tableHeader">
              <th style={{width:"10%"}}>Flag</th>
              <th className={typeName==="" ? "active" :""} style={{width:"30%"}}>Country</th>
              <th className={typeName==="cases" ? "active" :""} style={{width:"15%"}}>Cases</th>
              <th className={typeName==="recovered" ? "active" :""} style={{width:"15%"}}>Recovered</th>
              <th className={typeName==="active" ? "active" :""} style={{width:"15%"}}>Active</th>
              <th className={typeName==="deaths" ? "active" :""} style={{width:"15%"}}>Deaths</th>
            </tr>
          </thead>
          <tbody>
            {
              allCountries && allCountries.map((item,idx)=>  {
                return [
                  <tr key={idx}>
                    <td><img className="flag" src={item.countryInfo.flag} alt=""/></td>
                    <td className='country'>{item.country}</td>                  
                    <td>{item.cases}</td>                  
                    <td>{item.recovered}</td>                  
                    <td>{item.active}</td>                  
                    <td>{item.deaths}</td>                  
                  </tr>
                ]
              })
            }
          </tbody>
        </table>
        }
      </div>
    </div>
  )
}

export default MainComponent