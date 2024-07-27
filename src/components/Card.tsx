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
    <div className="p-8 w-80 hover:shadow-xl border-2 hover:border-theme border-theme-lqa rounded-xl items-center justify-evenly transition duration-500">
      <img className="w-full rounded-full" src={imgSrc} alt="Team Member" />
      <h1 className="text-3xl my-4 text-theme">{name}</h1>
      <h1 className="text-xl my-4 text-white">{pos}</h1>
      <div className="flex justify-center space-x-4">
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white hover:text-theme transition duration-300" size={24} />
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white hover:text-theme transition duration-300" size={24} />
        </a>
      </div>
    </div>
  );
};

export default Card;
