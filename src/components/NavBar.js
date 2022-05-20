import React from 'react'
import "./../styles/NavBar.css"
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className='navBar'>
        <Link to="/cases">Cases</Link>
        <Link to="/recovered">Recovered</Link>
        <Link to="/active">Active</Link>
        <Link to="/deaths">Deaths</Link>
    </div>   
  )
}

export default NavBar