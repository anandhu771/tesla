import React from 'react'
import './Navbar.css'
import { SlGlobe } from "react-icons/sl";
import { LuUserCircle2 } from "react-icons/lu";
import { GoQuestion } from "react-icons/go";
function Navbar() {
  return (
    <div>
        <nav class="navbar">
        <div class="logo"><a href="#">T E S L A</a></div>
        <ul class="nav-links">
          <li><a href="#model-s">Model S</a></li>
          <li><a href="#model-3">Model 3</a></li>
          <li><a href="#model-x">Model X</a></li>
          <li><a href="#model-y">Model Y</a></li>
          <li><a href="#solar-roof">Solar Roof</a></li>
          <li><a href="#solar-panels">Solar Panels</a></li>
        </ul>
        <div className='nav-icons'>
        <SlGlobe />
        <LuUserCircle2 />
        <GoQuestion />
        </div>
      </nav>
      {/* <div class="hero-content">
        <h1>Model 3</h1>
        <p>Order Online for Touchless Delivery</p>
        <div class="hero-buttons">
          <a href="#" class="button">Custom Order</a>
          <a href="#" class="button">Existing Inventory</a>
        </div>
      </div> */}
    </div>
  )
}

export default Navbar