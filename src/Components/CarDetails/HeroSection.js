import React from 'react'
import './HeroSection.css'
import { IoMdSpeedometer } from "react-icons/io";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaChargingStation } from "react-icons/fa6";
import { GiPathDistance } from "react-icons/gi";
function HeroSection({details}) {
  return (
    <div className='hero-section-wrap' style={{'backgroundImage':`linear-gradient(to right,black,transparent,transparent,black),URL(${details.heroimg})`}}>
        <div className='car-name'>
            {details.carName}
        </div>
        <div className='car-content'>
            <div className='icon-pack'><GiTakeMyMoney className='svg' />{details.carPrice}</div>
            <div className='icon-pack'><IoMdSpeedometer className='svg'  />{details.carSpeed}</div>
            <div className='icon-pack'><GiPathDistance className='svg' />{details.carRange}</div>
            <div className='icon-pack'><FaChargingStation className='svg' />{details.carMilege}</div>
        </div>
    </div>
  )
}

export default HeroSection