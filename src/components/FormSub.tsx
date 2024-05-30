import { useState } from "react";

const About = () => {
  const [positions, setPositions] = useState("");
  const [customPositions, setCustomPositions] = useState("");

  const handlePositions = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPositions(e.target.value);
    if (e.target.value !== "others") {
      setCustomPositions("");
    }
  };

  const handleFileClick = () => {
    const cvElement = document.getElementById("cv") as HTMLInputElement | null;
    if (cvElement) {
      cvElement.click();
    }
  };
  return (
    <>
      <div className="bg-black  min-h-screen">
        <div className="flex flex-col items-center justify-center text-white pt-10">
          <p className="text-center text-white font-bold text-xl">
            ECAST INTAKE FORM
          </p>
          <div className="w-1/2 lg:w-1/4 mx-auto border-t-1 border-b-2 border-gray-500 my-4 mb-8"></div>
        </div>
        <div className="flex items-center justify-center  px-4">
          <div className="bg- animate-glow p-8 rounded-3xl w-full max-w-3xl ">
            <form>
              <div className="mb-4 p-8  bg-[#2f3231] rounded-lg  w-full max-w-3xl">
                <label
                  className="block text-white text-secondary mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name Here"
                  required
                />
              </div>
              <div className="mb-4 p-8  bg-[#2f3231] rounded-lg  w-full max-w-3xl">
                <label
                  className="block text-white text-secondary mb-2"
                  htmlFor="rollNo"
                >
                  Roll No
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-secondary"
                  type="text"
                  id="rollNo"
                  name="rollNo"
                  placeholder="Campus Roll No."
                  required
                />
              </div>
              <div className="mb-4 p-8  bg-[#2f3231] rounded-lg  w-full max-w-3xl">
                <label
                  className="block text-white text-secondary mb-2"
                  htmlFor="contact"
                >
                  Contact
                </label>
                <input
                  className="w-full px-3 py-2 rounded-lg focus:outline-none focus:border-secondary"
                  type="text"
                  id="contact"
                  name="contact"
                  placeholder="Your Contact Number"
                  required
                />
              </div>
              <div className="mb-4 p-8  bg-[#2f3231] rounded-lg  w-full max-w-3xl">
                <label
                  className="block text-white text-secondary mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 rounded-lg focus:outline-none focus:border-secondary"
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email Address"
                  required
                />
              </div>
              <div className="mb-4 p-8  bg-[#2f3231] rounded-lg  w-full max-w-3xl">
                <label
                  className="block text-white text-secondary mb-2"
                  htmlFor="describe"
                >
                  Describe Yourself
                </label>
                <textarea
                  className="w-full px-3 py-2 border  rounded-lg focus:outline-none focus:border-secondary"
                  id="describe"
                  name="describe"
                  placeholder="Write Your Answer"
                  required
                />
              </div>
              <div className="mb-4 p-8  bg-[#2f3231] rounded-lg  w-full max-w-3xl">
                <label
                  className="block text-white text-secondary mb-2"
                  htmlFor="positions"
                >
                  Post You Want To Apply For
                </label>
                <select
                  className="w-full px-3 py-2 border  rounded-lg focus:outline-none focus:border-secondary"
                  id="positions"
                  name="positions"
                  value={positions}
                  onChange={handlePositions}
                  required
                >
                  <option value="">Select Post</option>
                  <option value="technicalTeam">
                    Technical Team (Hardware / Software)
                  </option>
                  <option value="researchDevelopment">
                    Research & Development
                  </option>
                  <option value="socialMedia_Manager">
                    Social Media Manager
                  </option>
                  <option value="events_Communications">
                    Events & Communications
                  </option>
                  <option value="editor_in_chief">Editor in chief</option>
                  <option value="others">Others</option>
                </select>
              </div>
              {positions === "others" && (
                <div className="mb-4 p-8 bg-[#2f3231] rounded-lg  w-full max-w-3xl">
                  <label
                    className="block text-white text-secondary mb-2"
                    htmlFor="customPositions"
                  >
                    Specify Positions
                  </label>
                  <input
                    className="w-full px-3 py-2 rounded-lg focus:outline-none focus:border-secondary"
                    type="text"
                    id="customPositions"
                    name="customPositions"
                    placeholder="Enter your Position"
                    value={customPositions}
                    onChange={(e) => setCustomPositions(e.target.value)}
                    required
                  />
                </div>
              )}
              <div className="mb-4 p-8 bg-[#2f3231] rounded-lg  w-full max-w-3xl">
                <label
                  className="block text-white text-secondary mb-2"
                  htmlFor="expectation"
                >
                  What do you hope to gain from joining the club?
                </label>
                <textarea
                  className="w-full px-3 py-2 border  rounded-lg focus:outline-none focus:border-secondary"
                  id="expectation"
                  name="expectation"
                  placeholder="Write Your Answer"
                  required
                />
              </div>

              <div className="mb-4 p-8 bg-[#2f3231] rounded-lg  w-full max-w-3xl">
                <label
                  className="block text-white text-secondary mb-2"
                  htmlFor="interests"
                >
                  Something that you are curently interested in outside of
                  course
                </label>
                <textarea
                  className="w-full px-3 py-2 border  rounded-lg focus:outline-none focus:border-secondary"
                  id="interests"
                  name="interests"
                  placeholder="Write Your Answer"
                  required
                />
              </div>
              <div className="mb-4 p-8  bg-[#2f3231] rounded-lg  w-full max-w-3xl">
                <label
                  className="block text-white text-secondary mb-2"
                  htmlFor="link"
                >
                  Link to any social media
                </label>
                <input
                  className="w-full px-3 py-2  rounded-lg focus:outline-none focus:border-secondary"
                  type="text"
                  id="link"
                  name="link"
                  placeholder="Write Your Answer"
                  required
                />
              </div>
              <div className="mb-4 p-8  bg-[#2f3231] rounded-lg  w-full max-w-3xl">
                <label
                  className="block text-white text-secondary mb-2"
                  htmlFor="cv"
                >
                  Upload Your CV
                </label>
                <input
                  className="w-full hidden px-3 py-2 rounded-lg focus:outline-none focus:border-secondary"
                  type="file"
                  id="cv"
                  name="cv"
                  accept=".pdf, image/*"
                  required
                />
                <button
                  type="button"
                  onClick={handleFileClick}
                  className="w-full px-3 rounded-full font-bold py-2 text-white hover:text-black hover:bg-white hover:border-white transition duration-500 border-2 border-white"
                >
                  Choose File
                </button>
              </div>

              <div className="mb-4 p-8  bg-[#2f3231] rounded-lg  w-full max-w-3xl">
                <label
                  className="block text-white text-secondary mb-2"
                  htmlFor="details"
                >
                  Other Details
                </label>
                <textarea
                  className="w-full px-3 py-2  rounded-lg focus:outline-none focus:border-secondary"
                  id="details"
                  name="details"
                ></textarea>
              </div>
              <button className="w-full my-4 py-4 bg-transparent text-white hover:text-black hover:bg-white transition duration-500 border-2 border-white font-bold rounded-full">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
