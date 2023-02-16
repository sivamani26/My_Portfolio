import "./AboutContent.css";
import { Link } from "react-router-dom";
import React from "react";
import AboutPro1 from "../assets/AboutPro1.webp";
import AboutPro2 from "../assets/AboutPro2.webp";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>
          I'm a friendly Front-End Developer.I create responsive secure websites
          for my clients.
        </p>
        <Link to="/Contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={AboutPro1} className="img" alt="true"/>
            </div>
            <div className="img-stack bottom">
            <img src={AboutPro2} className="img" alt="true"/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutContent;
