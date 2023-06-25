import React, { useState } from 'react';
import Logo from '../assets/ecast-logo.png';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 z-10 w-full  h-20">
      <div className="mx-auto px-4 py-3 flex  justify-between items-center">
        <a href="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="h-14 w-14 mr-2" />
          <span className="text-white text-4xl font-semibold">ECAST</span>
        </a>
        <div className="hidden sm:flex items-center space-x-4">
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/committee">Committee</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
        </div>
        <button
          className="sm:hidden text-white border border-white rounded-full p-2 hover:bg-white hover:text-black transition-colors"
          onClick={handleMenuToggle}
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            {isMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 6h14v2H3V6zm0 5h14v2H3v-2zm0 5h14v2H3v-2z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h12v2H4V6zm0 5h12v2H4v-2zm0 5h12v2H4v-2z"
              />
            )}
          </svg>
        </button>
        {isMenuOpen && (
        <div className="sm:hidden absolute top-20 right-0 bg-zinc-500/75 p-4 space-y-2 flex flex-col">
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/committee">Committee</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
        </div>
      )}
      </div>
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  return (
    <a href={to} className="text-white border border-white rounded-full px-4 py-2 hover:bg-white hover:text-black transition-colors">
      {children}
    </a>
  );
};

export default NavBar;
