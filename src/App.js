import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Content from './Components/Content/Content';
import heroimg from './Assets/heroimg'
import modelydark from './Assets/modelydark.jpg'
import Footer from './Components/Footer/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {


  useEffect(()=>{
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  },[]
  )
  return (
    <>
    <div>
    <Navbar/>
    
    <Content aosdir="right"   textalign="left" imgUrl={heroimg}  title="Cyber TrucK" content="TRAVEL UP TO 340 MILES¹ ON A SINGLE CHARGE—ENOUGH TO GET YOU INTO THE BACKCOUNTRY AND BEYOND. RECOVER UP TO 136 MILES OF RANGE WITH JUST 15 MINUTES OF SUPERCHARGING."/>  
  
    <Content aosdir="left" textalign="right"  imgUrl={modelydark} title="model y" content="GO 0-60 MPH IN JUST 2.6 SECONDS† IN BEAST MODE WHILE MAINTAINING HIGH-SPEED STABILITY. WITH STEER-BY-WIRE AND REAR STEERING, YOU GET THE HANDLING OF A SPORTS CAR AND A BETTER TURNING RADIUS THAN MOST SEDANS." / >
   <Footer/>
    </div>
    </>
  );
}

export default App;
