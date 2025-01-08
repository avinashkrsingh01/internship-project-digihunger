import React from 'react';
import './Footer.css';
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h2>QPEDIA</h2>
          <p>
            Qpedia is an online problem-solving and skill-up platform  v...........................................................
          </p>
          <div className="social-icons">
            <i className="fab fa-facebook-f"><FaFacebookF />
            </i>
            <i className="fab fa-twitter"><FaTwitter /></i>
            <i className="fab fa-linkedin-in"><FaLinkedinIn /></i>
            <i className="fab fa-instagram"><FaInstagram />
            </i>
          </div>
        </div>
        <div className="footer-section">
          <h3>Important Links</h3>
          <ul>
            <li>Blog</li>
            <li>Reviews</li>
            <li>Categories</li>
            <li>Video Editing</li>
            <li>Mentor View</li>
            <li>Syllabus</li>
            <li>Admin</li>
            <li>Mentor</li>
            <li>Student</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Help</h3>
          <ul>
            <li>Payment</li>
            <li>FAQ</li>
            <li>Cancellation & Refund</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Policy</h3>
          <ul>
            <li>Privacy</li>
            <li>Terms of use</li>
            <li>Sitemap</li>
          </ul>
        </div>
      </div>
      <div className="footer-middle">
        <h3>Popular Categories</h3>
        <p>
          Web Development | Node js | Animation | Digital Marketing | 3D Animation |
          Marketing | Digital Art | Vector Art
        </p>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024 Qpedia Pvt. Ltd.</p>
        <p>B11 Bhawani Complex Noida Sector-27 Near Noida Sector 18 Metro Station</p>
        <div className='email-section'>
          Customer Support:     <br /> <span className="support-email">support@qpedia.com</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
