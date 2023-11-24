import "./Footer.css";

import React from "react";
import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "1rem" }} />
            <p>500081, Anjaiah Nagar, Hyderabad</p>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={15}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              7989921486
            </h4>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk
                size={15}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              venkatasivamani1977@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About My self</h4>
          <p>
            Computer science graduate with 3.2 years of hands-on experience crafting user-friendly
            and high-performance web applications using React.
          </p>
          <div className="social">
            <FaFacebook
              size={20}
              style={{ color: "#fff", marginRight: "0.5rem" }}
            />
            <FaTwitter
              size={20}
              style={{ color: "#fff", marginRight: "0.5rem" }}
            />
            <FaLinkedin
              size={20}
              style={{ color: "#fff", marginRight: "0.5rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
