
import React from "react";
import "./App.css"
import { BrowserRouter as Router, Route, Routes, Outlet, BrowserRouter } from "react-router-dom";
 import Home from "./Page/Home/HomeScreen/Index";
import Navbar from "./Page/Home/Navbar";
import Moredetails from "./Page/Home/Moredetails";
import AboutMe from "./Page/Home/Aboutme";
import ContactMe from "./Page/Home/Contact";
import Herosection from "./Page/Home/Herosection";
import MyPortfolio from "./Page/Home/Project";
import Services from "./Page/Home/Services";
import Skils from "./Page/Home/Skils";
import Single from "./Page/Home/Single";
import Footer from "./Page/Home/Footer";

function App() {
  return (
    <div className="App">
  <div>
      <BrowserRouter>
   <Routes>
    
      
    <Route path ="/" element={<Navbar/>}>
    <Route path ="/" element={<Single/>}></Route>
    <Route path ="/home" element={<Herosection/>}/>
    <Route path ="/about" element={<AboutMe/>}/>
    {/* <Route path ="/skils" element={<Skils/>}/> */}
    <Route path ="/services" element={<Services/>}/>
    <Route path ="/project" element={<MyPortfolio/>}/>
    <Route path ="/contact" element={<ContactMe/>}/>

    </Route>
    
    
   
    
       </Routes>
    </BrowserRouter></div>
    
    </div>
  );
}

export default App;
