import React from 'react';
import '../styles/Footer.css';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import sidlab from "../image/sidlab.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          <img src={sidlab} alt="SidLabs Logo" />
        </div>

        <div className="footer-content">
          <p>
            Join us on this extraordinary journey as we redefine the limits of human potential.
            Together, we are forging a brighter future—one innovation at a time.
          </p>
        </div>

        <div className="footer-contact">
          <p>Address: SidLabs, Asaf Ali Road, New Delhi-110002</p>
          <p>Email: info@sidlabs.net</p>
        </div>

        <div className="footer-social">
          <div className='footer-wp'>
            <p>Chat with us!</p>
            <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"> <FaWhatsapp />  </i>
            </a>
          </div>
          <div className="footer-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2023 SidLabs. All rights reserved.
          <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
