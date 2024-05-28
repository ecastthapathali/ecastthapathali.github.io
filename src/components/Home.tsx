import { useNavigate } from "react-router-dom";
import Background from "../assets/Thapathali.jpg";

const Home = () => {

  const navigate = useNavigate();

  let eventsClick=()=>{
    navigate("/ourevents")
  }
  return (
    <main
      className={`flex h-[100vh] bg-no-repeat bg-cover`}
      style={{ backgroundImage: `url(${Background})` }}
    >
      {/* Home Hero Section */}
      <div className="static p-8 text-white flex flex-col w-[100%] h-[100%] justify-evenly items-center z-10 backdrop-blur-sm backdrop-brightness-50">
        <h1 className="text-6xl sm:text-8xl lg:text-9xl animate-texColCha font-extralight tracking-wideext">
          ECAST
        </h1>
        <h2 className="lg:text-xl text-center lg:text-left font-mono">
          " Electronics and Computer Community Amidst Students, Thapathali "
        </h2>
        <h2 className="lg:text-xl text-center lg:text-left bg-white text-black p-2 rounded shadow-all shadow-white tracking-wide font-mono">
          Thapathali's Student Club : Elevating Students' Skillsets
        </h2>
        <div className="sm:flex-row flex flex-col lg:w-[50%] w-[100%] justify-center  gap-8 mb-4">
          <button className="px-6 py-4 bg-white text-black font-bold rounded hover:bg-theme hover:text-white transition duration-300"  onClick={eventsClick}>
            Our Events
          </button>
          <a target="_blank" href="https://discord.gg/PuApCFtq">
            <button className="px-6 py-4 bg-transparent text-white hover:text-theme hover:bg-white transition duration-500 border-2 border-white font-bold rounded">
              Join Our Discord
            </button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home;
