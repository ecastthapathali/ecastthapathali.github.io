import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useParams, Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import './EventRegistration.css';

interface Event {
  id: string;
  title: string;
  description: string;
}

const EventRegistration: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [college, setCollege] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [articleTitle, setArticleTitle] = useState<string>("");
  const [chosenTheme, setChosenTheme] = useState<string>("");
  const [abstract, setAbstract] = useState<string>("");
  const [confirmation, setConfirmation] = useState<boolean>(false);
  const [agreement, setAgreement] = useState<boolean>(false);
  const [document, setDocument] = useState<File | null>(null);
  const [inspiration, setInspiration] = useState<string>("");
  const [contribution, setContribution] = useState<string>("");
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  useEffect(() => {
    const events: Event[] = [
      { id: 'ai-writing-competition', title: 'AI Writing Competition', description: 'ECAST is excited to announce its AI Writing Competition, a unique opportunity for aspiring writers and tech enthusiasts to explore the intersection of creativity and technology.' },
      // Add more events as needed
    ];
    const selectedEvent = events.find(e => e.id === eventId);
    setEvent(selectedEvent || null);
  }, [eventId]);

  const showAlert = (message: string) => {
    setAlertMessage(message);
    setTimeout(() => setAlertMessage(null), 3000);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append("name", name);
    formData.append("college", college);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("articleTitle", articleTitle);
    formData.append("chosenTheme", chosenTheme);
    formData.append("abstract", abstract);
    formData.append("confirmation", confirmation ? "true" : "false");
    formData.append("agreement", agreement ? "true" : "false");
    formData.append("inspiration", inspiration);
    formData.append("contribution", contribution);
    if (document) {
      formData.append("document", document);
    }

    try {
      const response = await fetch("https://ecast.pythonanywhere.com/api/event/form/", {
        method: "POST",
        body: formData,
      });

      if (response.status !== 201) {
        const responseData = await response.json();
        showAlert(responseData.error || "Failed to submit form. Please try again.");
        return;
      }

      showAlert("Form submitted successfully!");
      setFormSubmitted(true);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setDocument(e.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-black text-white pt-5 pb-5">
      {alertMessage && (
        <div className="alert">{alertMessage}</div>
      )}
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
              <TypeAnimation
                sequence={[event.description, 1000]}
                speed={50}
                wrapper="p"
                className="event-description"
                repeat={1}
                cursor={false}
              />
              <form onSubmit={handleSubmit} className="rsvp-form w-full">
                <label className="input-label">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Eg- Abhishek Panthee" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required 
                  className="input-field" 
                />
                <div className="form-gap" />
                <label className="input-label">College/University</label>
                <input 
                  type="text" 
                  placeholder="Eg- Thapathali Campus" 
                  value={college} 
                  onChange={(e) => setCollege(e.target.value)} 
                  required 
                  className="input-field" 
                />
                <div className="form-gap" />
                <label className="input-label">Email</label>
                <input 
                  type="email" 
                  placeholder="Eg- ramshyam@gmail.com" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                  className="input-field" 
                />
                <div className="form-gap" />
                <label className="input-label">Contact</label>
                <input 
                  type="tel" 
                  placeholder="+977 9824499081" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)} 
                  required 
                  className="input-field" 
                />
                <div className="form-gap" />
                <label className="input-label">Title of the Article</label>
                <input 
                  type="text" 
                  placeholder="Title of the Article" 
                  value={articleTitle} 
                  onChange={(e) => setArticleTitle(e.target.value)} 
                  required 
                  className="input-field" 
                />
                <div className="form-gap" />
                <label className="input-label">Chosen Theme</label>
                <input 
                  type="text" 
                  placeholder="Eg - Emerging Technologies" 
                  value={chosenTheme} 
                  onChange={(e) => setChosenTheme(e.target.value)} 
                  required 
                  className="input-field" 
                />
                <div className="form-gap" />
                <label className="input-label">Abstract or Summary of the Article</label>
                <textarea 
                  placeholder="Abstract or Summary of the Article" 
                  value={abstract} 
                  onChange={(e) => setAbstract(e.target.value)} 
                  required 
                  className="input-field" 
                />
                <div className="form-gap" />
                <label className="input-label">What inspired you to choose this particular theme for your article?</label>
                <textarea 
                  placeholder="Your Answer" 
                  value={inspiration} 
                  onChange={(e) => setInspiration(e.target.value)} 
                  required 
                  className="input-field" 
                />
                <div className="form-gap" />
                <label className="input-label">How do you think your article contributes to understanding or exploring the chosen topic in a unique way?</label>
                <textarea 
                  placeholder="Your Answer" 
                  value={contribution} 
                  onChange={(e) => setContribution(e.target.value)} 
                  required 
                  className="input-field" 
                />
                <div className="form-gap" />
                <label className="input-label">Upload your document ( .doc , .docx )</label>
                <input 
                  type="file" 
                  onChange={handleFileChange} 
                  required 
                  className="input-field" 
                  accept=".doc,.docx" 
                />
                <div className="form-gap" />
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={confirmation} 
                    onChange={(e) => setConfirmation(e.target.checked)} 
                    required 
                  />
                  &nbsp; I confirm that the article is my own work and has not been previously published.
                </label>
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={agreement} 
                    onChange={(e) => setAgreement(e.target.checked)} 
                    required 
                  />
                  &nbsp; I agree to the competition rules, including plagiarism guidelines.
                </label>
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
