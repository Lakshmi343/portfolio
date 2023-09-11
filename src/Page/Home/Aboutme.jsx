import cv from "./Lakshmi.k.pdf"
import photo from "./me.jpeg"

export default function AboutMe() {
    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src={photo} alt="About Me" />
        </div>
        <div className="hero--section--content--box ">
          <div className="hero--section--content">
            <p className="section--title">About</p>
            <h1 className="skills-section--heading">About Me</h1>
            <p className="hero--section-description">
            I'm a dedicated MERN stack developer experienced in crafting dynamic web applications.
             My proficiency in MongoDB, Express.js, React, and Node.js allows me to seamlessly merge the front-end and
              back-end, resulting in efficient and engaging digital solutions. With a keen eye for user experience and a 
              problem-solving mindset, I'm committed to delivering high-quality software that makes a meaningful impact.
            </p>
          </div>
          <button className="btn btn-primary">
          <a
     className="buttona"
     href={cv}
     download
     >
    Download Resume
  </a>
</button>
          
          
        </div>
      </section>
    );
  }