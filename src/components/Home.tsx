import Background from "../assets/background.jpg";

const Home = () => {
  return (
    <main className="flex h-screen w-full">
      {/* Home Hero Section */}
      <img
        src={Background}
        className="absolute top-0 left-0 brightness-15 h-screen w-full bg-cover"
      />
      <div className="fixed top-20 p-8 text-white flex flex-col w-[100%] h-[100%] justify-evenly items-center">
        <h1 className="text-6xl sm:text-8xl lg:text-9xl animate-texColCha font-extralight tracking-wideext">
          ECAST
        </h1>
        <h2 className="lg:text-xl text-center lg:text-left font-mono">
          " Electronics and Computer Community Amidst Students , Thapathali "
        </h2>
        <h2 className="lg:text-xl text-center lg:text-left bg-white text-black p-2 rounded shadow-all shadow-white tracking-wide font-mono">
          Thapathali's Student Club : Elevating Students' Skillsets
        </h2>
        <div className="sm:flex-row flex flex-col lg:w-[50%] w-[100%] justify-around">
          <button className="px-6 m-4 py-4 bg-white text-black font-bold rounded hover:bg-theme hover:text-white transition duration-300">
            Our Events
          </button>
          <button className="px-6 m-4 py-4 bg-transparent text-white hover:text-theme hover:bg-white transition duration-500 border-2 border-white font-bold rounded">
            Join Our Discord
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
