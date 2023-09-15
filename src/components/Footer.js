import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <FaFacebookSquare size={25} />
        <FaInstagram size={25} />
        <FaTwitter size={25} />
        <FaYoutube size={25} />
      </div>
      <div className="footer-links">
        <Link to="/" className="link">Conditions of Use</Link>
        <Link to="/" className="link">Privacy & Policy</Link>
        <Link to="/" className="link">Press Room</Link>
      </div>
      <div className="copyright">
        <p>&copy; 2023 MovieBox by Egbule Emmanuel</p>
      </div>
    </div>
  );
};

export default Footer;
