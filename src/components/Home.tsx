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
        className="flex h-[100vh] bg-no-repeat bg-cover bg-center relative"
        style={{ backgroundImage: `url(${Background})` }}
      >
        {/* Home Hero Section */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/80 backdrop-blur-[2px]" />
        <div className="relative z-10 flex flex-col w-full h-full justify-evenly items-center p-8">
          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-extralight tracking-wide animate-fade-in">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-theme via-white to-theme animate-texColCha">
              ECAST
            </span>
          </h1>
          
          <div className="space-y-4 text-center max-w-4xl">
            <h2 className="lg:text-xl text-center font-mono text-white/90 animate-slide-up">
              "Electronics and Computer Community Amidst Students, Thapathali"
            </h2>
            <TypeAnimation
              sequence={[
                `"Connecting the brightest young minds in Engineering"`,
                1000,
              ]}
              speed={25}
              wrapper="h2"
              className="lg:text-xl text-center font-mono text-theme animate-slide-up"
              cursor={false}
            />
          </div>

          <h2 className="lg:text-xl text-center bg-white/10 backdrop-blur-md text-white p-4 rounded-lg shadow-all tracking-wide font-mono animate-scale-in hover:bg-white/20 transition-colors duration-300">
            Thapathali's Student Club : Elevating Students' Skillsets
          </h2>

          <div className="sm:flex-row flex flex-col lg:w-[50%] w-[auto] justify-center gap-8 mb-4 animate-fade-in">
            <button
              className="px-8 py-4 bg-theme text-white font-bold rounded-lg hover:bg-white hover:text-theme transition-all duration-300 transform hover:scale-105 hover:shadow-hover-glow"
              onClick={eventsClick}
            >
              Our Events
            </button>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://discord.gg/4n8rquAp5H"
              className="transform hover:scale-105 transition-transform duration-300"
            >
              <button className="w-full px-8 py-4 bg-transparent text-white hover:text-theme hover:bg-white/10 transition-all duration-300 border-2 border-white font-bold rounded-lg hover:shadow-hover-glow">
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
