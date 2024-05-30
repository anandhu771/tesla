import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import VideoContainer from "./Components/Video/VideoContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Vehicles from "./Components/Vehicles/Vehicles";
import Home from "./Components/Home/Home";

function App() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="models-listing" element={<Vehicles />} />
        </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App;
