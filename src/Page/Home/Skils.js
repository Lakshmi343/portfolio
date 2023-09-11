import React from 'react'
import First from './First'
import Second from './Second'



const Skils = () => {
  return (
    <section className='skils section' style={{display:'flex',textAlign:'center'}} id='skils'>
        <div className='skills_heading' ><h2>SKILS</h2><br/>
        <span className='section_subtitle'>My tecnical level</span></div>
        <div className='Skils_del' style={{display:'flex',gap:'33px',marginLeft:'250px'}}>
       <First/>
       <Second/>
       </div>
    </section>
  )
}

export default Skils