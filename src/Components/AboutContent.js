import "./AboutContent.css";
import { Link } from "react-router-dom";
import React from "react";
import AboutPro1 from "../assets/AboutPro1.webp";
import AboutPro2 from "../assets/AboutPro2.webp";
import ResumeDoc from "../assets/Resume.docx";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>
          Hi, I'm Venkata Siva Manikanta, a React and .NET
          Developer at Delta Cubes.I specialize in creating seamless user
          experiences and robust solutions.Let's connect and collaborate! Best
          regards,
          <br></br>
          <br></br>
          Venkata Siva Manikanta Gandi.
        </p>
        <Link to="/Contact">
          <button className="btn">Contact</button>
        </Link>
        
        <button className="btn" style={{marginTop: "20px"}}>
  <a className="Resume_Button" href={ResumeDoc} download="VenkataSivaManikantaResume.pdf">
    Download Resume
  </a>
</button>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={AboutPro1} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={AboutPro2} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutContent;
