import React, {useState, useEffect} from 'react';
import './styles/App.scss';
import { Routes, Route, useLocation  } from "react-router-dom";
import NavBar from './components/NavBar';
import MainComponent from './components/MainComponent';
import TotalInfo from './components/TotalInfo';

function App() {
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

  return (
    <div className="app">

      {/* dinamic navBar,change path selected value */}
      <NavBar />

      {/* total info give type location path */}
      <TotalInfo allData={allData} />

      <Routes>
        <Route path="/" element={<MainComponent text="cases"/>} />
        <Route path="/sentium-task/" element={<MainComponent text="cases"/>} />
        <Route path="cases" element={<MainComponent text="cases"/>} />
        <Route path="recovered" element={<MainComponent text="recovered"/>} />
        <Route path="active" element={<MainComponent text="active"/>} />
        <Route path="deaths" element={<MainComponent text="deaths"/>} />
      </Routes>
    </div>
  );
}

export default App;
