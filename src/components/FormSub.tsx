import { useState, ChangeEvent, FormEvent } from "react";

const SubForm = () => {
  const [name, setName] = useState<string>("");
  const [rollNo, setRollNo] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [batch, setBatch] = useState<string>("");
  const [about, setAbout] = useState<string>("");
  const [reason_to_join, setReason_to_join] = useState<string>("");
  const [interest, setInterest] = useState<string>("");
  const [resume, setResume] = useState<File | null>(null);
  const [resumeName, setResumeName] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);


  const [link1, setLink1] = useState<string>("");
  const [link2, setLink2] = useState<string>("");
  const [link3, setLink3] = useState<string>("");

  const showAlert = (message: string) => {
    // Create background overlay
    const bgOverlay = document.createElement("div");
    bgOverlay.className = "fixed inset-0 bg-black bg-opacity-50 z-50";
  
    // Create alert box
    const alertBox = document.createElement("div");
    alertBox.className = "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black p-6 rounded shadow-lg z-50 max-w-xs w-full text-center";
  
    // Create close button
    const closeButton = document.createElement("button");
    closeButton.className = "absolute top-0 right-0 mt-2 mr-2 text-black";
    closeButton.innerHTML = "&times;";
    closeButton.onclick = () => {
      document.body.removeChild(alertBox);
      document.body.removeChild(bgOverlay);
    };
  
    // Append close button to alert box
    alertBox.appendChild(closeButton);
  
    // Create message paragraph
    const messageParagraph = document.createElement("p");
    messageParagraph.innerText = message;
    
    // Append message paragraph to alert box
    alertBox.appendChild(messageParagraph);
  
    // Append alert box and background overlay to the body
    document.body.appendChild(bgOverlay);
    document.body.appendChild(alertBox);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(this);
    formData.append("name", name);
    formData.append("campus_roll", rollNo);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("department", department);
    formData.append("batch", batch);
    formData.append("about", about);
    formData.append("reason_to_join", reason_to_join);
    formData.append("interests", interest);
    formData.append("post", positions);
    if (resume) {
      formData.append("resume", resume);
    }
    formData.append("github_link", link1);
    formData.append("facebook_link", link2);
    formData.append("linkedin_link", link3);
    try {
      const response = await fetch(
        "https://ecast.pythonanywhere.com/api/intake/form/",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.status !== 201) {
        const responseData = await response.json();
        console.log("Error response:", responseData);

        if (responseData.error && responseData.error.includes("email must make a unique set")) {
          showAlert("Error: The email is already used. Please use a unique email.");
        } else if (responseData.error && responseData.error.includes("Enter a valid email address.")) {
          showAlert("Error: Please enter a valid email adress")
        }
        else if (responseData.error) {
          showAlert(`Error: ${responseData.error}`);
        } else {
          showAlert("Failed to submit form. Please try again.");
        }
        return;
      }

      const responseData = await response.json();
      console.log("Success:", responseData);
      setFormSubmitted(true);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const [positions, setPositions] = useState<string>("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
      setResumeName(e.target.files[0].name);
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

<div className="fixed top-0 bottom-0 left-0 right-0 w-full flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
  <div className="relative bg-white text-black px-6 py-4 border-0 rounded-lg shadow-lg">
    <span className="block sm:inline">
      Intake application for the year 2024-2025 has been closed.
    </span>
    <button
      className="absolute top-0 right-0 p-1 focus:outline-none"
      onClick={() => (window.location.href = "http://ecast.tcioe.edu.np")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className=" w-4 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
</div>

     
      <div className="bg-black min-h-screen">
        <div className="flex items-center justify-center px-4">
          <div className="animate-glow my-8 p-8 rounded-5xl w-full max-w-5xl">
            <div className="flex flex-col items-center justify-center text-white">
              <p className="text-center text-white font-bold text-xl">
                ECAST INTAKE FORM
              </p>
              <div className="w-1/2 lg:w-1/4 mx-auto  border-t-1 border-b-2 border-red-500 my-4 mb-8"></div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 p-8 bg-black shadow-md shadow-gray-400 rounded-lg w-full max-w-5xl transform transition duration-500 hover:scale-105">
                <label
                  className="block text-white text-secondary mb-2"
                  htmlFor="name"
                >
                  Enter Your Name *
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name Here"
                  required
                />
              </div>
              <div className="mb-4 p-8 bg-black shadow-md shadow-gray-400 rounded-lg w-full max-w-5xl transform transition duration-500 hover:scale-105">
                <label
                  className="block text-white text-secondary mb-2"
                  htmlFor="rollNo"
                >
                  Enter Roll No *
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-secondary"
                  type="text"
                  id="rollNo"
                  name="rollNo"
                  value={rollNo}
                  onChange={(e) => setRollNo(e.target.value)}
                  placeholder="Campus Roll No. ex(THA080BEI01)"
                  required
                />
              </div>
              <div className="mb-4 p-8 bg-black shadow-md shadow-gray-400 rounded-lg w-full max-w-5xl transform transition duration-500 hover:scale-105">
                <label
                  className="block text-white text-secondary mb-2"
                  htmlFor="positions"
                >
                  Select Your Batch *
                </label>
                <select
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-secondary"
                  id="year"
                  name="year"
                  value={batch}
                  onChange={(e) => setBatch(e.target.value)}
                  required
                >
                  <option value="">Select Year</option>
                  <option value="78">2078</option>
                  <option value="79">2079</option>
                  <option value="80">2080</option>
                </select>
              </div>
              <div className="mb-4 p-8 bg-black shadow-md shadow-gray-400 rounded-lg w-full max-w-5xl transform transition duration-500 hover:scale-105">
                <label
                  className="block text-white text-secondary mb-2"
                  htmlFor="positions"
                >
                  Select Your Department *
                </label>
                <select
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-secondary"
                  id="department"
                  name="department"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  required
                >
                  <option value="">Select Year</option>
                  <option value="BCT">Computer Engineering</option>
                  <option value="BEI">
                    Electroncis, Communication and Information Engineering
                  </option>
                  <option value="BCE">Civil Engineering</option>
                  <option value="BIE">Industrial Engineering</option>
                  <option value="BME">Mechanical Engineering</option>
                  <option value="BAM">Automobile Engineering</option>
                  <option value="BEL">Electrical Engineering</option>
                </select>
              </div>

              <div className="mb-4 p-8 bg-black shadow-md shadow-gray-400 rounded-lg w-full max-w-5xl transform transition duration-500 hover:scale-105">
                <label
                  className="block text-white text-secondary mb-2"
                  htmlFor="contact"
                >
                  Contact *
                </label>
                <input
                  className="w-full px-3 py-2 rounded-lg focus:outline-none focus:border-secondary"
                  type="text"
                  id="contact"
                  name="contact"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Your Contact Number"
                  required
                />
              </div>
              <div className="mb-4 p-8 bg-black shadow-md shadow-gray-400 rounded-lg w-full max-w-5xl transform transition duration-500 hover:scale-105">
                <label
                  className="block text-white text-secondary mb-2"
                  htmlFor="email"
                >
                  Email *
                </label>
                <input
                  className="w-full px-3 py-2 rounded-lg focus:outline-none focus:border-secondary"
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email Address"
                  required
                />
              </div>
              <div className="mb-4 p-8 bg-black shadow-md shadow-gray-400 rounded-lg w-full max-w-5xl transform transition duration-500 hover:scale-105">
                <label
                  className="block text-white text-secondary mb-2"
                  htmlFor="describe"
                >
                  Describe Yourself In Few Words *
                </label>
                <textarea
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-secondary"
                  id="describe"
                  name="describe"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  placeholder="Write Your Answer"
                  required
                />
              </div>
              <div className="mb-4 p-8 bg-black shadow-md shadow-gray-400 rounded-lg w-full max-w-5xl transform transition duration-500 hover:scale-105">
                <label
                  className="block text-white text-secondary mb-2"
                  htmlFor="positions"
                >
                  Post You Want To Apply For *
                </label>
                <select
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-secondary"
                  id="positions"
                  name="positions"
                  value={positions}
                  onChange={(e) => {
                    setPositions(e.target.value);
                  }}
                  required
                >
                  <option value="">Select Post</option>
                  <option value="TT">
                    Technical Team (Hardware / Software)
                  </option>
                  <option value="RD">Research & Development</option>
                  <option value="SMM">Social Media Manager</option>
                  <option value="EC">Events & Communications</option>
                  <option value="EIC">Editor in chief</option>
                  <option value="GD">Graphic Design</option>
                </select>
              </div>

              <div className="mb-4 p-8 bg-black shadow-md shadow-gray-400 rounded-lg w-full max-w-5xl transform transition duration-500 hover:scale-105">
                <label
                  className="block text-white text-secondary mb-2"
                  htmlFor="reason_to_join"
                >
                  Why You Want To Join ECAST? *
                </label>
                <textarea
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-secondary"
                  id="reason_to_join"
                  name="reason_to_join"
                  value={reason_to_join}
                  onChange={(e) => setReason_to_join(e.target.value)}
                  placeholder="Write Your Answer"
                  required
                />
              </div>

              <div className="mb-4 p-8 bg-black shadow-md shadow-gray-400 rounded-lg w-full max-w-5xl transform transition duration-500 hover:scale-105">
                <label
                  className="block text-white text-secondary mb-2"
                  htmlFor="interest"
                >
                  Your Skills And Interests *
                </label>
                <textarea
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-secondary"
                  id="interest"
                  name="interest"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  placeholder="Write Your Answer"
                  required
                />
              </div>
              <div className="mb-4 p-8 bg-black shadow-md shadow-gray-400 rounded-lg w-full max-w-5xl transform transition duration-500 hover:scale-105">
                <label
                  className="block text-white text-secondary mb-2"
                  htmlFor="cv"
                >
                  Upload Your CV * (only pdf is accepted)
                </label>
                <input
                  className="w-full hidden px-3 py-2 rounded-lg focus:outline-none focus:border-secondary"
                  type="file"
                  id="cv"
                  name="cv"
                  onChange={handleFileChange}
                  accept=".pdf*"
                  required
                />
                <button
                  type="button"
                  onClick={handleFileClick}
                  className="w-full px-3 rounded-full font-bold py-2 text-white hover:text-black hover:bg-white hover:border-white transition duration-500 border-2 border-white"
                >
                  Choose File
                </button>
                {resumeName && (
                  <p className="text-white mt-2 text-sm italic text-center">
                    <span className="font-semibold">Uploaded File: 📄</span>{" "}
                    {resumeName}
                  </p>
                )}
              </div>
              <div className="mb-4 p-8 bg-black shadow-md shadow-gray-400 rounded-lg w-full max-w-5xl transform transition duration-500 hover:scale-105">
                <label
                  className="block text-white text-secondary mb-2"
                  htmlFor="link3"
                >
                  Enter Your Facebook Profile Link *
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-secondary"
                  type="url"
                  id="link3"
                  name="link3"
                  value={link3}
                  onChange={(e) => setLink3(e.target.value)}
                  placeholder="Paste The Url Here"
                  required
                />
              </div>
              <div className="mb-4 p-8 bg-black shadow-md shadow-gray-400 rounded-lg w-full max-w-5xl transform transition duration-500 hover:scale-105">
                <label
                  className="block text-white text-secondary mb-2"
                  htmlFor="link1"
                >
                  Enter Your Linkedin Profile Link
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-secondary"
                  type="url"
                  id="link1"
                  name="link1"
                  value={link1}
                  onChange={(e) => setLink1(e.target.value)}
                  placeholder="Paste The Url"
                />
              </div>
              <div className="mb-4 p-8 bg-black shadow-md shadow-gray-400 rounded-lg w-full max-w-5xl transform transition duration-500 hover:scale-105">
                <label
                  className="block text-white text-secondary mb-2"
                  htmlFor="link2"
                >
                  Enter Your GitHub Link
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-secondary"
                  type="url"
                  id="link2"
                  name="link2"
                  value={link2}
                  onChange={(e) => setLink2(e.target.value)}
                  placeholder="Paste The Url"
                />
              </div>

              <button
                type="submit"
                className="w-full px-3 rounded-full font-bold py-2 text-white hover:text-black hover:bg-white hover:border-white transition duration-500 border-2 border-white"
              >
                Submit
              </button>
            </form>
            {formSubmitted && (
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
                <div className="bg-white text-black px-6 py-4 border-0 rounded-lg shadow-lg">
                  <span className="block sm:inline">
                    Form submitted successfully!
                  </span>
                  <button
                    className="absolute top-4 right-4 p-2 focus:outline-none"
                    onClick={() => setFormSubmitted(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SubForm;
