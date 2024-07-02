interface CardProps {
  imgSrc: string;
  name: string;
  pos: string;
}

const Card: React.FC<CardProps> = ({ imgSrc, name, pos }) => {
  return (
    <div className="p-8 w-80 hover:shadow-xl border-2 hover:border-theme border-theme-lqa rounded-xl items-center justify-evenly transition duration-500">
      <img className="w-full rounded-full" src={imgSrc} alt="Team Member" />
      <h1 className="text-3xl my-4 text-theme">{name}</h1>
      <h1 className="text-xl my-4 text-white">{pos}</h1>
      {/* If Socials then add below... */}
    </div>
  );
};

export default Card;
