import './styles/App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Type from './components/Type';

function App() {
  return (
    <div className="App">
      <NavBar />
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
