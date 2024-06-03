import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Vehicles from "./Components/Vehicles/Vehicles";
import Home from "./Components/Home/Home";
import CarDetails from "./Components/CarDetails/CarDetails";

function App() {

  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="models-listing" element={<Vehicles />} />
          <Route path='/deatilView/:id' element={<CarDetails/>} />
        </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App;
