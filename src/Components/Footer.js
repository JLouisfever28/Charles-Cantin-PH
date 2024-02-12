import React from 'react';
import "../Styles/Footer.css"
import Facebook from "../Images/facebook logo.png"
import Instagram from "../Images/instagram.png"

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <a href="https://www.facebook.com/" target='blank'><img src={Facebook} alt="Facebook" /></a>
        <a href="https://www.instagram.com/" target='blank'><img src={Instagram} alt="Instagram" /></a>
        <p>&copy; 2024 Charles Cantin Ph. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;