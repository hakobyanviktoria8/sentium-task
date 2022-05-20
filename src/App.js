import React,{useState, useEffect} from 'react';
import './styles/App.css';
import { Routes, Route, useLocation  } from "react-router-dom";
import NavBar from './components/NavBar';
import Type from './components/Type';
import TotalInfo from './components/TotalInfo';

function App() {
  const[allData, setAllData]= useState("")

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
    .then(response => response.json())
    .then(data => setAllData(data))
    .catch((error) => console.log("Can’t access response.", error.message))
  },[])

  return (
    <div className="App">

      {/* dinamic navBar,change path selected value */}
      <NavBar />

      {/* total info give type location path */}
      <TotalInfo allData={allData} />

      <Routes>
        <Route path="/" element={<Type text="cases"/>} />
        <Route path="cases" element={<Type text="cases"/>} />
        <Route path="recovered" element={<Type text="recovered"/>} />
        <Route path="active" element={<Type text="active"/>} />
        <Route path="deaths" element={<Type text="deaths"/>} />
      </Routes>
    </div>
  );
}

export default App;
