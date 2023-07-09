import React from "react";
import Logo from "../assets/ecast-logo.png";


import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";
import { FaMobileScreen, FaRegEnvelope, FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
      <div className="footer px-10 py-10 bg-[#2f3231]">
      <div className="top-footer text-white flex justify-between pb-10 flex-col md:flex-row">
        <div className="motto pb-10 w-auto">
          <a href="./" className="mx-0 flex items-center">
            <img src={Logo} alt="Logo" className="h-14 w-14 mr-2" />
            <h1 className="text-2xl font-bold">ECAST</h1>
          </a>
          <h2>Connecting the brightest young minds in Engineering.</h2>
        </div>
        <div className="quick-links pb-10 w-auto">
          <h1 className="text-xl font-bold">Quick Links</h1>
          <ul className="links">
            <li className="pt-3 hover:text-crimson">Home</li>
            <li className="pt-3 hover:text-crimson">Committee</li>
            <li className="pt-3 hover:text-crimson">About Us</li>
            <li className="pt-3 hover:text-crimson">Projects</li>
            <li className="pt-3 hover:text-crimson">Gallery</li>
          </ul>
        </div>
        <div className="contact-us w-auto">
          <h1 className="text-xl font-bold">Contact Us</h1>

          <div className="mobile flex items-center mt-3">
            <FaMobileScreen className="mr-2" />
            <span>+977 984534343, +977 988786876</span>
          </div>

          <div className="email flex items-center mt-3">
            <FaRegEnvelope className="mr-2" />
            <span>info@ecast.com</span>
          </div>

          <div className="location flex items-center mt-3">
            <FaLocationDot className="mr-2" />
            <span>Thapathali Campus, Kathmandu, Nepal</span>
          </div>
        </div>
      </div>
      <div className="social text-white">
        <h2 className="f2 text-center">FOLLOW US</h2>
        <div className="social-links flex justify-center mt-3 mb-3">
          <div className="instagram text-3xl mx-5">
            <FaInstagram />
          </div>
          <div className="linkedin text-3xl mx-5">
            <FaLinkedin />
          </div>
          <div className="facebook text-3xl mx-5">
            <FaFacebook />
          </div>
          <div className="mail text-3xl mx-5">
            <FaEnvelope />
          </div>
        </div>
        <div className="copyright text-center pt-10">
          &copy; - ECAST - {currentYear} - All rights reserved{" "}
        </div>
      </div>
    </div>
  );
};
export default Footer;
