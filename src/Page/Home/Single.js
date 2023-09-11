import React from 'react'
import Navbar from './Navbar'
import Herosection from './Herosection'
import AboutMe from './Aboutme'
import Skils from './Skils'
import MyPortfolio from './Project'
import ContactMe from './Contact'
import Services from './Services'
import Footer from './Footer'

const Single = () => {
  return (
    <div> 
       
        <Herosection/>
        <AboutMe/>
        {/* <Skils/> */}
        <Services/>
        <MyPortfolio/>
        <ContactMe/>  
      
            
        



    </div>
  )
}

export default Single