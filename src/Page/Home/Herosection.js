import { Link } from "react-router-dom"
import img from "./lakshmi.jpg"
import Image from 'react-bootstrap/Image';

export default function Herosection(){
    return(
      <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
        <p className="section--title">Hey, I'm Lakshmi.k</p>
        <h1 className="hero--section--title">
        <span className="hero--section-title--color">Mern  Stack</span>
        <br />
        Developer
        </h1>
        <p className="hero--section-description">
        Creating full-stack web applications using MongoDB, Express.js, React, and Node.js.
        </p>
       </div>
       <Link to="/contact"><button className="btn btn-primary">Get In Touch </button></Link>
        </div>
        <div className="hero--section--img" >
          <Image src={img}  roundedCircle />
        </div>
      </section>

    )
}