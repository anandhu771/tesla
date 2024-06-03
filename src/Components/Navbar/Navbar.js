import React, { useState } from "react";
import "./Navbar.css";
import { SlGlobe } from "react-icons/sl";
import { LuUserCircle2 } from "react-icons/lu";
import { GoQuestion } from "react-icons/go";
import { Link } from "react-router-dom";
import Hamburger from "../Hamburger/Hamburger";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  //this function is to toggle the hamburger menu
  const toggleMenu = () => {
    setShowMenu((prevShowmenu) => !prevShowmenu);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">T E S L A</Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/models-listing">Vehicles</Link>
          </li>
          <li>
            <Link>Energy</Link>
          </li>
          <li>
            <Link>Charging</Link>
          </li>
          <li>
            <Link>Shop</Link>
          </li>
        </ul>

        <div className="nav-icons">
          <SlGlobe />
          <LuUserCircle2 />
          <GoQuestion />
        </div>

        {showMenu ? (
          <svg
            onClick={toggleMenu}
            className="hamburger"
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g clipPath="url(#clip0_429_11083)">
                <path
                  d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006"
                  stroke="#292929"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_429_11083">
                  <rect width="24" height="24" fill="white"></rect>
                </clipPath>
              </defs>
            </g>
          </svg>
        ) : (
          <svg
            onClick={toggleMenu}
            className="hamburger"
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g clipPath="url(#clip0_429_11066)">
                <path
                  d="M3 6.00092H21M3 12.0009H21M3 18.0009H21"
                  stroke="#292929"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_429_11066">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.000915527)"
                  ></rect>
                </clipPath>
              </defs>
            </g>
          </svg>
        )}
      </nav>
      {showMenu && (
        <div className="menubar">
          <Hamburger toggle={toggleMenu} />
        </div>
      )}
    </div>
  );
}

export default Navbar;
