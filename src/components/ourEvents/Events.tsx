import React from 'react';
import "./css/Events.css";
import { Link } from 'react-router-dom';

interface IPROPS {
  image: string;
  topic: string;
  eventId: string;
}

const Events: React.FC<IPROPS> = ({ image, topic, eventId }) => {
  const getReadMoreLink = (eventId: string): string => {
    const links: Record<string, string> = {
      'ai-writing-competition': 'https://docs.google.com/document/d/1Z_hiLmqXnLX4CG5aNLG9gyI6q6Gv7UJpiZSfTcVuAOM/edit?usp=sharing', 
      'coming-soon-2': '#',
      // Add more event IDs and their corresponding links here
    };
    return links[eventId] || '#'; 
  };

  return (
    <div className="image-container">
      <div className="semi-image">
        <img className="images" src={image} alt={topic} />
        <div className="title1">"{topic}"</div>
        <div className="btn-container">
          <div className="button-container1">
            <Link to={`/register/${eventId}`} className="button-link">Register</Link>
          </div>
          <div className="button-container2">
            <a href={getReadMoreLink(eventId)} className="button-link" target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
