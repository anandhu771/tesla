import React from 'react'
import './Navbar.css'
import { SlGlobe } from "react-icons/sl";
import { LuUserCircle2 } from "react-icons/lu";
import { GoQuestion } from "react-icons/go";
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className="navbar">
        <div className="logo"><Link to="/">T E S L A</Link></div>
        <ul className="nav-links">
          <li><Link to="/models-listing">Vehicles</Link></li>
          <li><Link >Energy</Link></li>
          <li><Link >Charging</Link></li>
          <li><Link >Shop</Link></li>
          {/* <li><a href="#solar-roof">Solar Roof</a></li>
          <li><a href="#solar-panels">Solar Panels</a></li> */}
        </ul>
        <div className='nav-icons'>
        <SlGlobe />
        <LuUserCircle2 />
        <GoQuestion />
        </div>
      </nav>
      {/* <div className="hero-content">
        <h1>Model 3</h1>
        <p>Order Online for Touchless Delivery</p>
        <div className="hero-buttons">
          <a href="#" className="button">Custom Order</a>
          <a href="#" className="button">Existing Inventory</a>
        </div>
      </div> */}
    </div>
  )
}

export default Navbar