import React from 'react';
import "./css/Events.css";
import { Link } from 'react-router-dom';

interface IPROPS {
  image: string;
  topic: string;
  loadLink: string;
  eventId: string;
}

const Events: React.FC<IPROPS> = ({ image, topic, loadLink, eventId }) => {
  return (
    <div className="image-container">
      <div className="semi-image">
        <img className="images" src={image} alt="event" />
        <div className="title1">"{topic}"</div>
        <div className="btn-container">
          <div className="button-container1">
            <Link to={`/register/${eventId}`} className="button-link">Register</Link>
          </div>
          <div className="button-container2">
            <Link to={loadLink} className="button-link">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
