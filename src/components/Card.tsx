import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface CardProps {
  imgSrc: string;
  name: string;
  pos: string;
  linkedin: string;
  github: string;
}

const Card: React.FC<CardProps> = ({ imgSrc, name, pos, linkedin, github }) => {
  return (
    <div className="group p-8 w-80 bg-slate-800/50 backdrop-blur-sm hover:shadow-hover-glow border-2 hover:border-theme border-theme-lqa rounded-xl items-center justify-evenly transition-all duration-500 hover:-translate-y-2 animate-fade-in">
      <div className="relative overflow-hidden rounded-full mb-6">
        <img 
          className="w-full rounded-full transition-transform duration-500 group-hover:scale-110" 
          src={imgSrc} 
          alt="Team Member" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <h1 className="text-3xl my-4 text-theme font-bold tracking-wide group-hover:scale-105 transition-transform duration-300">{name}</h1>
      <h1 className="text-xl my-4 text-white/90 group-hover:text-white transition-colors duration-300">{pos}</h1>
      <div className="flex justify-center space-x-6">
        <a 
          href={linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="transform hover:scale-110 transition-transform duration-300"
        >
          <FaLinkedin className="text-white hover:text-theme transition-colors duration-300" size={28} />
        </a>
        <a 
          href={github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="transform hover:scale-110 transition-transform duration-300"
        >
          <FaGithub className="text-white hover:text-theme transition-colors duration-300" size={28} />
        </a>
      </div>
    </div>
  );
};

export default Card;
