import React, {useState, useEffect} from 'react'
import "./../styles/MainComponent.css"

function MainComponent() {
  const[allCountries, setAllCountries]= useState("")

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries")
    .then(response => response.json())
    .then(data => setAllCountries(data))
    .catch((error) => console.log("Can’t access response.", error.message))
  },[])

  console.log(allCountries)

  return (
    <div className='mainComponent'>
      {!allCountries ? 
      <h2>Loading...</h2>
      :
      <table>
        <thead>
            <tr className="tableHeader">
                <th style={{width:"10%"}}>Flag</th>
                <th style={{width:"30%"}}>Country</th>
                <th style={{width:"15%"}}>Cases</th>
                <th style={{width:"15%"}}>Recovered</th>
                <th style={{width:"15%"}}>Active</th>
                <th style={{width:"15%"}}>Deaths</th>
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
  )
}

export default MainComponent