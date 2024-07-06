import React, { useState } from "react";
import Logo from "../../public/ecast-logo.png";
import { NavLink } from "react-router-dom";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); 
  };

  return (
    <nav className="sticky top-0 left-0 z-50 w-full h-20 bg-slate-900 backdrop-filter backdrop-blur-lg  opacity-95 shadow-2xl flex">
      <div className="flex w-[100%] items-center justify-between m-auto">
        <div className="flex px-4 items-center">
          <NavLink to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <img src={Logo} alt="Logo" className="h-14 w-14" />
            <span className="text-white text-3xl font-semibold tracking-wider">
              ECAST
            </span>
          </NavLink>
        </div>
      </div>

      <div className="hidden mx-11 sm:flex items-center gap-2">
        <Navlink to="/" onClick={closeMenu}>Home</Navlink>
        <Navlink to="/about" onClick={closeMenu}>About</Navlink>
        <Navlink to="/committee" onClick={closeMenu}>Committee</Navlink>
        <Navlink to="/projects" onClick={closeMenu}>Projects</Navlink>
        <Navlink to="/gallery" onClick={closeMenu}>Gallery</Navlink>
        <Navlink to="/contact-us" onClick={closeMenu}>Contact</Navlink>
        {/* <Navlink to="/FormSub" onClick={closeMenu}>Intake</Navlink> */}
      </div>
      <div
        className="sm:hidden text-white hover:text-theme mx-4 my-6 transition-color duration-500"
        onClick={handleMenuToggle}
      >
        <svg
          className="h-8 w-8"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          {isMenuOpen ? (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 5h21v2H4V6zm0 5h6v2H4v2zm0 5h21v2H4v-2z"
            />
          ) : (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 5h15v2H4V6zm0 5h15v2H4v2zm0 5h15v2H4v-2z"
            />
          )}
        </svg>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden fixed top-20 text-center backdrop-blur bg-[#000000dd] w-full min-h-screen p-4 flex py-48 justify-evenly flex-col">
          <Navlink to="/about" onClick={closeMenu}>About Us</Navlink>
          <Navlink to="/committee" onClick={closeMenu}>Committee</Navlink>
          <Navlink to="/projects" onClick={closeMenu}>Projects</Navlink>
          <Navlink to="/gallery" onClick={closeMenu}>Gallery</Navlink>
          <Navlink to="/contact-us" onClick={closeMenu}>Contact Us</Navlink>
          {/* <Navlink to="/FormSub" onClick={closeMenu}>Intake Form</Navlink> */}
        </div>
      )}
    </nav>
  );
};

interface NavlinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void; 
}

const Navlink: React.FC<NavlinkProps> = ({ to, children, onClick }) => {
  const baseurl = ".";

  function useClassName({ isActive }: { isActive: boolean }) {
    let baseClasses =
      "p-2 opacity-90 hover:opacity-100 font-bold uppercase tracking-wide underline-offset-8 transition duration-500 ";
    if (isActive) {
      baseClasses += "text-theme underline";
    } else {
      baseClasses += "text-white hover:text-theme hover:underline";
    }
    return baseClasses;
  }

  return (
    <NavLink
      to={baseurl + to}
      className={({ isActive }) => useClassName({ isActive })}
      onClick={onClick} 
    >
      {children}
    </NavLink>
  );
};

export default NavBar;
