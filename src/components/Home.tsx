import { useNavigate } from "react-router-dom";
import Background from "../assets/Thapathali.jpg";
import { TypeAnimation } from "react-type-animation";
import LazyLoad from 'react-lazyload';

const Home = () => {
  const navigate = useNavigate();

  const eventsClick = () => {
    navigate("/ourevents");
  };

  // images from public folder for About sections
  const aboutSections = [
    {
      title: "What is ECAST?",
      description: "ECAST (Electronics and Computer Community Amidst Students) is a vibrant and dynamic student club at Thapathali Campus dedicated to fostering innovation, learning, and collaboration in electronics and computer engineering.",
      image: "/images/ecastbanner.png",
      href: "/whatisecast"
    },
    {
      title: "Workshops",
      description: "We conduct various workshops on cutting-edge technologies, programming languages, and engineering concepts to enhance students' practical skills and knowledge.",
      image: "/images/2.jpg",
      href: "/workshop"
    },
    {
      title: "Research",
      description: "ECAST promotes and supports student research initiatives, providing resources and mentorship for innovative projects in electronics and computer engineering.",
      image: "/images/3.jpg",
      href: "/research"
    },

    {
      title: "Program",
      description: "ECAST conducts various programs, including flagship events like 'My First Commit,' a Software Fellowship Program focusing on emerging technologies and web development.",
      image: "/images/12.jpg",
      href: "/innovation"
    }
  ];

  // Gallery images
  const galleryImages = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpeg",
    "/images/8.jpeg",
    "/images/9.jpg",
    "/images/10.jpg",
    "/images/11.jpg",
    "/images/12.jpg",
  ];

  return (
    <>
      <main className="min-h-screen bg-black">
        {/* Hero Section */}
        <section
          className="flex h-[100vh] bg-no-repeat bg-cover bg-center relative"
          style={{ backgroundImage: `url(${Background})` }}
        >
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
        </section>

        {/* About Sections with Alternating Layout */}
        <section className="px-4 md:px-8">
          <div className="flex flex-col items-center justify-center bg-black text-white pt-10 mb-5 ">
        <p className="text-center font-bold text-xl">
          WHAT ECAST IS ALL ABOUT ?
        </p>
        <div className="w-1/2 lg:w-1/4 mx-auto border-t-1 border-b-2 border-red-800 my-4"></div>
      </div>
          {aboutSections.map((section, index) => (
            <div 
              key={section.title}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 mb-20`}
            >
              <div className="w-full md:w-1/2">
                <LazyLoad height={300} offset={100} once>
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-[300px] object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                </LazyLoad>
              </div>
              <div className="w-full md:w-1/2 text-white">
                <h2 className="text-3xl font-bold mb-4 text-theme">{section.title}</h2>
                <p className="text-lg mb-4 text-gray-300 leading-relaxed">{section.description}</p>
                <a  href={`${section.href}`} className=" text-white  no-underline p-2 font-semibold cursor-pointer rounded border-2 border-gray-300 outline-none transition-all hover:bg-crimson hover:border-transparent">
              Read more
            </a>
              </div>
            </div>
          ))}
        </section>

        {/* Gallery Section */}
        <section className="py-20 px-4 md:px-8 bg-slate-900">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, index) => (
              <LazyLoad key={index} height={200} offset={100} once>
                <div className="aspect-square w-full overflow-hidden rounded-lg">
                  <img
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </LazyLoad>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
