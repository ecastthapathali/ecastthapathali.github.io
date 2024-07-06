import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="bg-black text-white text-center h-screen flex flex-col justify-center items-center p-5">
      <h1 className="text-6xl md:text-8xl mb-5">404 - Page Not Found</h1>
      <p className="text-xl md:text-2xl mb-8">The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="bg-white text-black py-2 px-4 rounded-lg text-lg md:text-xl transition-transform duration-300 transform hover:scale-110"
        style={{
          textShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6)',
          animation: 'glow 1.5s ease-in-out infinite',
        }}
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
