import "./Navbar.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [ color , setColor] = useState(false);
  const changeColor = () => {
   if (window.scrollY >= 100){ 
    setColor(true);
  } else {
    setColor(false);
  }
 };

 window.addEventListener("scroll", changeColor);

  return (
    <div className={ color ? "header header-bg" :
    "header"}>
      <Link to="/">
        <h1 className ={color? "h1 navName": ""} >My Portfolio.</h1>
      </Link>
      <ul className={click ? "nav-menu active": "nav-menu"}>
        <li className ={color? "li navName": ""} >
          <Link className ={color? "Link resMenu": "Link"} to="/">Home</Link>
        </li>
        <li >
          <Link  className ={color? "Link resMenu": "Link"} to="/Project">Project</Link>
        </li>
        <li>
          <Link className ={color? "Link resMenu": "Link"} to="/About">About</Link>
        </li>
        <li  >
          <Link className ={color? "Link resMenu": "Link"} to="/Contact">Contact</Link>
        </li>
        <li  >
          <Link className ={color? "Link resMenu": "Link"} to="/BookADemo">Book A Demo</Link>
        </li>
      </ul>
      
      <div className ="hamburger" onClick={handleClick}>
        { click ? (<FaTimes size={20} style={{ color: "#fff"}}/>) :
        (<FaBars size={20} style={{ color: "White"}}/>)} 
      </div>
    </div>
  );
};

export default Navbar;
