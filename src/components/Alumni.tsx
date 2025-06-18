import { useState } from 'react';

interface AlumniType {
  id: number;
  name: string;
  batch: string;
  position: string;
  company: string;
  testimonial: string;
  image: string;
}

const Alumni = () => {
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);

  const alumniData: AlumniType[] = [
    {
      id: 1,
      name: "Arjun Jha",
      batch: "2019",
      position: "Software Engineer",
      company: "Google",
      testimonial: "ECAST helped me develop both technical and leadership skills. The workshops and events organized by ECAST were instrumental in shaping my career path.",
      image: "/images/1.jpg"
    },
    {
      id: 2,
      name: "Rupeshwor sah",
      batch: "2020",
      position: "Data Scientist",
      company: "Microsoft",
      testimonial: "Being part of ECAST was one of the best decisions I made during my time at Thapathali. The exposure to cutting-edge technology and networking opportunities were invaluable.",
      image: "/images/2.jpg"
    },
    {
      id: 3,
      name: "Ram Kumar",
      batch: "2018",
      position: "Tech Lead",
      company: "Facebook",
      testimonial: "ECAST provided me with a platform to explore my interests in technology and innovation. The mentorship and guidance I received were exceptional.",
      image: "/images/3.jpg"
    },
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % alumniData.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + alumniData.length) % alumniData.length);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container flex flex-col mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center font-bold text-3xl">
            OUR ALUMNI
          </h1>
          <div className="w-1/2 lg:w-1/4 mx-auto border-t-1 border-b-2 border-red-800 my-4"></div>
          <p className="text-center text-gray-400 mb-12">
            Meet our distinguished alumni who have made their mark in the tech world
          </p>
        </div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {alumniData.map((alumni) => (
            <div key={alumni.id} className="bg-gray-900 rounded-lg p-6 transform hover:scale-105 transition duration-300">
              <img 
                src={alumni.image} 
                alt={alumni.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-2 border-red-800"
              />
              <h3 className="text-xl font-semibold text-center mb-2">{alumni.name}</h3>
              <p className="text-gray-400 text-center mb-1">Batch of {alumni.batch}</p>
              <p className="text-red-600 text-center mb-4">{alumni.position} at {alumni.company}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-center font-bold text-2xl mb-8">
            ALUMNI TESTIMONIALS
          </h2>
          <div className="relative bg-gray-900 rounded-lg p-8">
            <div className="flex items-center">
              <button 
                onClick={prevTestimonial}
                className="absolute left-4 text-gray-400 hover:text-white"
              >
                ❮
              </button>
              <div className="mx-12">
                <div className="flex flex-col items-center">
                  <img 
                    src={alumniData[activeTestimonial].image}
                    alt={alumniData[activeTestimonial].name}
                    className="w-20 h-20 rounded-full mb-4 object-cover border-2 border-red-800"
                  />
                  <p className="text-center italic mb-4">"{alumniData[activeTestimonial].testimonial}"</p>
                  <h4 className="font-semibold">{alumniData[activeTestimonial].name}</h4>
                  <p className="text-gray-400 text-sm">
                    {alumniData[activeTestimonial].position} at {alumniData[activeTestimonial].company}
                  </p>
                </div>
              </div>
              <button 
                onClick={nextTestimonial}
                className="absolute right-4 text-gray-400 hover:text-white"
              >
                ❯
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alumni;
