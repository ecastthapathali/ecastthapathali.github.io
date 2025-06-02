import Logo from "../../public/ecast-logo.png";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer px-5 py-5 bg-slate-900">
      <div className="top-footer text-white flex flex-col items-center justify-center pb-1">
        <div className="motto text-center pb-5">
          <a href="./" className="flex  justify-center pb-2 items-center">
            <img
              src={Logo}
              alt="Logo"
              className="h-14 w-14 justify-center mr-2"
            />
            <h1 className="text-2xl font-bold">ECAST</h1>
          </a>
        </div>
        <div className="quick-links flex justify-around flex-wrap max-w-5xl">
          <Link to="/" className="px-6 py-2 m-1 hover:text-crimson">
            Home
          </Link>
          <Link to="/about" className="px-6 py-2 m-1 hover:text-crimson">
            About Us
          </Link>
          <Link to="/committee" className="px-6 py-2 m-1 hover:text-crimson">
            Committee
          </Link>
          <Link to="/projects" className="px-6 py-2 m-1 hover:text-crimson">
            Projects
          </Link>
          <Link to="/gallery" className="px-6 py-2 m-1 hover:text-crimson">
            Gallery
          </Link>
          <Link to="/contact-us" className="px-6 py-2 m-1 hover:text-crimson">
            Contact us
          </Link>
          {/* <Link to="/join-us" className="px-6 py-2 m-1 hover:text-crimson">
            Join Us
            </Link> */}
        </div>
      </div>
      <div className="social text-white text-center ">
        <div className="social-links flex justify-center  pb-1 mt-2 mb-2">
          <a
            className="instagram text-3xl mx-3"
            href="https://www.instagram.com/ecastthapathali/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            className="linkedin text-3xl mx-3"
            href="https://www.linkedin.com/company/ecastthapathali/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="facebook text-3xl mx-3"
            href="https://www.facebook.com/ecastthapathali"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            className="mail text-3xl mx-3"
            href="mailto:ecast@tcioe.edu.np"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
        </div>
        <div className="copyright pt-5">
          &copy; ECAST - {currentYear} - All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
