import AboutMe from "../Aboutme";
import ContactMe from "../Contact";
import Footer from "../Footer";
import Herosection from "../Herosection";
import Moredetails from "../Moredetails";
import MyPortfolio from "../Project";
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import Services from "../Services";

export default function Home (){
    return(
        <>
         <Herosection/>
        <AboutMe/>
        <MyPortfolio/>
        <Services/>
        <ContactMe/>
        <Footer/> 
        
        </>
    )
}