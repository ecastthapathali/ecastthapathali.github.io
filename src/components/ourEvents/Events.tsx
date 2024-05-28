import React from 'react';
import "./css/Events.css";
import { Link } from 'react-router-dom';

interface IPROPS {
  image: string;
  topic:string;
  loadLink:string;
  registerLink:string;
}

const Events: React.FC<IPROPS> = ({ image ,topic,loadLink,registerLink }) => {
  return (
    <div className="image-container">
      <div className="semi-image">
        <img className="images" src={image} alt="image1" />
        <div className="title1">"{topic}"</div>
        <div className="btn-container">

       
        <div className="button-container1">
          <button> <Link to={registerLink}> Register</Link></button>
        </div>
        <div className="button-container2">
          <button> <Link to={loadLink}> Read More</Link></button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
