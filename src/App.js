import { Routes, Route } from "react-router-dom"
import './App.css';
import Nav from "./components/Nav";
import Characters from "./components/Characters";
import Locations from "./components/Locations";
import Episodes from "./components/Episodes";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path= "/characters" element={<Characters />} />
        <Route exact path= "/locations" element={<Locations />} />
        <Route exact path = "/episodes" element={<Episodes />} />
      </Routes>
      
    </div>
  );
}

export default App;
