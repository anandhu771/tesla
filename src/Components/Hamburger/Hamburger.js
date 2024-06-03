import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Hamburger.css'

function Hamburger({toggle}) {

  return (
    <div className='hamburger-wrap'>
        <nav className="hamburger-navbar">
        <ul className="hamburger-nav-links">
          <li onClick={toggle}><Link to="/models-listing">Vehicles</Link></li>
          <li onClick={toggle}><Link >Energy</Link></li>
          <li onClick={toggle}><Link >Charging</Link></li>
          <li onClick={toggle}><Link >Shop</Link></li>
          {/* <li><a href="#solar-roof">Solar Roof</a></li>
          <li><a href="#solar-panels">Solar Panels</a></li> */}
        </ul>
        
      </nav>
    </div>
  )
}

export default Hamburger;