import "./HeroImage.css";
import React from 'react'
import IntroImg from "../assets/Intro-Img.jpg";
import { Link } from 'react-router-dom';

const HeroImage = () => {
    return (<div className = "hero">
        <div className ="mask" >
            <img className="into-img" src={IntroImg} alt = "IntroImg"/>
            </div>
            <div className ="content">
            <p>Hi, my self Siva Mani</p>
            <h1>I'm React Developer</h1>
            <Link to='/project' className ="btn">Projects</Link>
            <Link to='/contact' className ="btn btn-light">Contact</Link>
        </div>
    </div>  
    )
};


export default HeroImage;

