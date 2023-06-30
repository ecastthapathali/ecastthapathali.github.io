import React, { useState } from "react";
import Logo from "../assets/ecast-logo.png";

const NavBar: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="fixed top-0 left-0 z-50 w-full h-20 bg-[#00000099] backdrop-blur">
			<div className="mx-auto py-2 flex justify-between items-center">
				<a href="./" className="mx-2 flex items-center">
					<img src={Logo} alt="Logo" className="h-14 w-14 mr-2" />
					<span className="text-white text-3xl font-semibold">ECAST</span>
				</a>
				<div className="hidden sm:flex items-center space-x-4 mx-4">
					<NavLink to="/about">About Us</NavLink>
					<NavLink to="/committee">Committee</NavLink>
					<NavLink to="/projects">Projects</NavLink>
					<NavLink to="/gallery">Gallery</NavLink>
				</div>
				<button
					className="sm:hidden px-2 m-2 text-[#fff] hover:text-[#dbb732] transition-color duration-500"
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
				</button>
				{isMenuOpen && (
					<div className="sm:hidden fixed top-20 text-center backdrop-blur bg-[#000000dd] w-full min-h-screen p-4 flex py-48 justify-evenly flex-col">
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
	const baseurl = ".";

	return (
		<a
			href={baseurl + to}
			className="text-[#fff] opacity-00 hover:opacity-100 font-bold my-3 px-3 py-2 hover:text-[#dbb732] hover:underline underline-offset-8 transition duration-500"
		>
			{children}
		</a>
	);
};

export default NavBar;