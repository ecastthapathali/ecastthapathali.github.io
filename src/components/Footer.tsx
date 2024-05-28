import Logo from "../assets/ecast-logo.png";

import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";
import { FaMobileScreen, FaRegEnvelope, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

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
          <div className="links [&>*]:cursor-pointer flex flex-col m-1 p-1">
            <Link to="/" className="pt-3 hover:text-crimson">
              Home
            </Link>
            <Link to="/about" className="pt-3 hover:text-crimson">
              About Us
            </Link>
            <Link to="/form" className="pt-3 hover:text-crimson">
              Form
            </Link>
            <Link to="/committee" className="pt-3 hover:text-crimson">
              Committee
            </Link>
            <Link to="/projects" className="pt-3 hover:text-crimson">
              Projects
            </Link>
            <Link to="" className="pt-3 hover:text-crimson">
              Gallery
            </Link>
          </div>
        </div>
        <div className="contact-us w-auto">
          <h1 className="text-xl font-bold">Contact Us</h1>

          <div className="mobile flex items-center mt-3">
            <FaMobileScreen className="mr-2" />
            <span>
              <a href="tel:+9779745298983">+977 9745298983</a>,
              <a href="tel:+977988786876">+977 988786876</a>
            </span>
          </div>

          <div className="email flex items-center mt-3">
            <FaRegEnvelope className="mr-2" />
            <span>
              <a href="mailto:ecast@tcioe.edu.np" target="_blank">
                ecast@tcioe.edu.np
              </a>
            </span>
          </div>

          <div className="location flex items-center mt-3">
            <FaLocationDot className="mr-2" />
            <span>
              <a
                href="https://maps.app.goo.gl/CvzD96hgud5kjCVX8"
                target="_blank"
              >
                Thapathali Campus, Kathmandu, Nepal
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="social text-white">
        <h2 className="f2 text-center">FOLLOW US</h2>
        <div className="social-links flex justify-center mt-3 mb-3">
          <a
            className="instagram text-3xl mx-5"
            href="https://www.instagram.com/ecastthapathali/"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
            className="linkedin text-3xl mx-5"
            href="https://www.linkedin.com/company/ecastthapathali/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            className="facebook text-3xl mx-5"
            href="https://www.facebook.com/ecastthapathali"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a
            className="mail text-3xl mx-5"
            href="mailto:ecast@tcioe.edu.np"
            target="_blank"
          >
            <FaEnvelope />
          </a>
        </div>
        <div className="copyright text-center pt-10">
          &copy; - ECAST - {currentYear} - All rights reserved{" "}
        </div>
      </div>
    </div>
  );
};
export default Footer;
