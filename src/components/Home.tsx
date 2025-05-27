import { useNavigate } from "react-router-dom";
import Background from "../assets/Thapathali.jpg";
import { TypeAnimation } from "react-type-animation";


const Home = () => {
  const navigate = useNavigate();

  const eventsClick = () => {
    navigate("/ourevents");
  };

  return (
    <>
    <main
      className={`flex h-[100vh] bg-no-repeat bg-cover`}
      style={{ backgroundImage: `url(${Background})` }}
      >
      {/* Home Hero Section */}
      <div className="static p-100 text-white flex flex-col w-full h-full justify-evenly items-center z-10 backdrop-blur-sm backdrop-brightness-75 bg-no-repeat bg-cover">
        <h1 className="text-6xl sm:text-8xl lg:text-9xl animate-texColCha font-extralight tracking-wide">
          ECAST
        </h1>
        <h2 className="lg:text-xl text-center lg:text-left font-mono">
          "Electronics and Computer Community Amidst Students, Thapathali"
          <TypeAnimation
            sequence={[
              `     "      Connecting the brightest young minds in Engineering "`,
              1000, // Pause for 1 second
            ]}
            speed={25}
            wrapper="h2"
            className="lg:text-xl text-center lg:text-center font-mono"
            cursor={false}
          />
        </h2>
        <h2 className="lg:text-xl text-center lg:text-left bg-white text-black p-2 rounded shadow-all shadow-white tracking-wide font-mono">
          Thapathali's Student Club : Elevating Students' Skillsets
        </h2>
        <div className="sm:flex-row flex flex-col lg:w-[50%] w-[auto] justify-center gap-8 mb-4">
          <button
            className="px-6 py-4 bg-white text-black font-bold rounded hover:bg-theme hover:text-white transition duration-300"
            onClick={eventsClick}
          >
            Our Events
          </button>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.gg/4n8rquAp5H"
          >
            <button className="px-6 py-4 bg-transparent text-white hover:text-theme hover:bg-white transition duration-500 border-2 border-white font-bold rounded">
              Join Our Discord
            </button>
          </a>
        </div>
      </div>
    </main>
    </>
  );
};

export default Home;
