import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useParams, Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import './EventRegistration.css';

interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
}

const EventRegistration: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [college, setCollege] = useState<string>("");
  const [suggestion, setSuggestion] = useState<string>("");
  const [documents, setDocuments] = useState<File | null>(null);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [link2, setLink2] = useState<string>("");

  useEffect(() => {
    const events: Event[] = [
      { id: 'ai-writing-competition', title: 'AI Writing Competition', description: 'ECAST is excited to announce its AI Writing Competition, a unique opportunity for aspiring writers and tech enthusiasts to explore the intersection of creativity and technology.', image: '/src/components/ourEvents/EventsImages/event1.jpg' },
      // Add more events as needed
    ];
    const selectedEvent = events.find(e => e.id === eventId);
    console.log('Selected Event:', selectedEvent);
    setEvent(selectedEvent || null);
  }, [eventId]);

  const showAlert = (message: string) => {
    const bgOverlay = document.createElement("div");
    bgOverlay.className = "fixed inset-0 bg-black bg-opacity-50 z-50";

    const alertBox = document.createElement("div");
    alertBox.className = "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black p-6 rounded shadow-lg z-50 max-w-xs w-full text-center";

    const closeButton = document.createElement("button");
    closeButton.className = "absolute top-0 right-0 mt-2 mr-2 text-black";
    closeButton.innerHTML = "&times;";
    closeButton.onclick = () => {
      document.body.removeChild(alertBox);
      document.body.removeChild(bgOverlay);
    };

    alertBox.appendChild(closeButton);
    const messageParagraph = document.createElement("p");
    messageParagraph.innerText = message;
    alertBox.appendChild(messageParagraph);

    document.body.appendChild(bgOverlay);
    document.body.appendChild(alertBox);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("college", college);
    formData.append("suggestions", suggestion);
    if (documents) {
      formData.append("documents", documents);
    }
    formData.append("facebook_link", link2);

    try {
      const response = await fetch("https://ecast.pythonanywhere.com/api/event/form/", {
        method: "POST",
        body: formData,
      });

      if (response.status !== 201) {
        const responseData = await response.json();
        console.log("Error response:", responseData);
        showAlert(responseData.error || "Failed to submit form. Please try again.");
        return;
      }

      const responseData = await response.json();
      console.log("Success:", responseData);
      showAlert("Form submitted successfully!");
      setFormSubmitted(true);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setDocuments(e.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-black text-white pt-5 pb-5">
      <div className="card text-white bg-black mr-8 ml-8 mt-10 pt-4 p-6 relative flex items-center justify-center overflow-hidden sm:w-full md:w-96 lg:w-[80%] xl:w-[60%] shadow-outline-red rounded-2xl shadow-custom">
        <div className="content flex flex-col items-center gap-5 w-full text-center">
          {formSubmitted ? (
            <TypeAnimation
              sequence={['Your registration was successful!', 1000]}
              speed={50}
              wrapper="p"
              className="success-message"
              repeat={1}
              cursor={false}
            />
          ) : event ? (
            <>
              <h2 className="event-title text-2xl font-bold">{event.title}</h2>
              <img 
                src={event.image} 
                alt={event.title} 
                className="event-image" 
              />
              <TypeAnimation
                sequence={[event.description, 1000]}
                speed={50}
                wrapper="p"
                className="event-description"
                repeat={1}
                cursor={false}
              />
              <div className="article-themes-container bg-black text-white p-6 rounded-lg shadow-lg mt-6">
                <TypeAnimation
                  sequence={['Guidelines', 1000]}
                  speed={50}
                  wrapper="h3"
                  className="text-xl font-semibold mb-2"
                  repeat={1}
                  cursor={false}
                />
                <ul className="list-disc pl-5 mb-4 text-center">
                  {[
                    'Participants must choose one of the provided themes.',
                    'Articles should be well-researched and provide insights beyond basic concepts.',
                    'Proper grammar, clarity, and structure are essential.',
                    'Titles should be descriptive and engaging.',
                    'The competition aims to encourage creativity and originality in addressing the chosen themes (less than 30% AI detection is acceptable).',
                    'NO single entry may be submitted in more than one competition.',
                    'Works previously published or accepted for publication are not eligible.',
                    'An individual may submit only one entry.',
                    'Use copyright-free images or create your own if necessary.',
                    'Plagiarism above 5% is not acceptable.',
                  ].map((item, index) => (
                    <li key={index}>
                      <TypeAnimation
                        sequence={[item, 1000]}
                        speed={50}
                        wrapper="span"
                        cursor={false}
                      />
                    </li>
                  ))}
                </ul>

                <TypeAnimation
                  sequence={['Submission Details', 1000]}
                  speed={50}
                  wrapper="h3"
                  className="text-xl font-semibold mb-2"
                  repeat={1}
                  cursor={false}
                />
                <ul className="list-disc pl-5 mb-4 text-center">
                  {[
                    'Deadline: Aug 2024',
                    'Format: Word Document or PDF',
                    'Word Limit: 800-1500 words',
                  ].map((item, index) => (
                    <li key={index}>
                      <TypeAnimation
                        sequence={[item, 1000]}
                        speed={50}
                        wrapper="span"
                        cursor={false}
                      />
                    </li>
                  ))}
                </ul>

                <TypeAnimation
                  sequence={['Who Can Participate?', 1000]}
                  speed={50}
                  wrapper="h3"
                  className="text-xl font-semibold mb-2"
                  repeat={1}
                  cursor={false}
                />
                <p className="text-lg text-center">
                  <TypeAnimation
                    sequence={['Anyone interested in the competition is welcome to participate!', 1000]}
                    speed={50}
                    wrapper="span"
                    cursor={false}
                  />
                </p>
              </div>

              <form onSubmit={handleSubmit} className="rsvp-form w-full">
                <input 
                  type="text" 
                  placeholder="Name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required 
                  className="input-field" 
                />
                <div className="form-gap" />
                <input 
                  type="email" 
                  placeholder="Email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                  className="input-field" 
                />
                <div className="form-gap" />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)} 
                  required 
                  className="input-field" 
                />
                <div className="form-gap" />
                <input 
                  type="text" 
                  placeholder="College Name" 
                  value={college} 
                  onChange={(e) => setCollege(e.target.value)} 
                  required 
                  className="input-field" 
                />
                <div className="form-gap" />
                <input 
                  type="text" 
                  placeholder="Facebook Link" 
                  value={link2} 
                  onChange={(e) => setLink2(e.target.value)} 
                  className="input-field" 
                />
                <div className="form-gap" />
                <input 
                  type="file" 
                  onChange={handleFileChange} 
                  required 
                  className="input-field" 
                />
                <div className="form-gap" />
                <textarea 
                  placeholder="Suggestions" 
                  value={suggestion} 
                  onChange={(e) => setSuggestion(e.target.value)} 
                  className="input-field" 
                />
                <div className="form-gap" />
                <button type="submit" className="submit-button">Submit</button>
              </form>
            </>
          ) : (
            <div className="bg-black text-white text-center h-screen flex flex-col justify-center items-center p-5">
              <TypeAnimation
                sequence={['Event Coming Soon', 1000]}
                speed={50}
                wrapper="h1"
                className="text-6xl md:text-8xl mb-5"
                cursor={false}
              />
              <TypeAnimation
                sequence={['The event you are looking for is on its way.', 1000]}
                speed={50}
                wrapper="p"
                className="text-xl md:text-2xl mb-8"
                cursor={false}
              />
              <Link
                to="/ourevents"
                className="bg-white text-black py-2 px-4 rounded-lg text-lg md:text-xl transition-transform duration-300 transform hover:scale-110"
                style={{
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6)',
                  animation: 'glow 1.5s ease-in-out infinite',
                }}
              >
                Go to Events
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventRegistration;
