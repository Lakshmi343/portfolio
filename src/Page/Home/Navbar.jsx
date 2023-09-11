
import React, { useState } from "react";

import { Link, NavLink, Outlet,Router, Route, Routes } from "react-router-dom";
import Home from "./HomeScreen/Index";
import Herosection from "./Herosection";
import AboutMe from "./Aboutme";
import Services from "./Services";
import MyPortfolio from "./Project";
import ContactMe from "./Contact";

 const Navbar = () => {
  

  return (
    <>
    <div>
      
    <nav>
      <h1 className="title">
        Lakshmi.k</h1>
      <ul > 
        
      <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {/* <li>
          <Link to="/skils">Skils</Link>
        </li> */}
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/project">Projects</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
        
      </ul>
  
    </nav>
    </div>
    <div>
      <Outlet/>
    </div>
    </>
  );
};

export default Navbar;