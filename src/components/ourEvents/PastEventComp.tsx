import React from 'react';
import "./css/Events.css";
import { Link } from 'react-router-dom';

interface IPROPS {
  image: string;
  topic: string;
  loadLink: string;
}

const PastEventComp: React.FC<IPROPS> = ({ image, topic, loadLink }) => {
  return (
    <div className="image-container">
      <div className="semi-image">
        <img className="images" src={image} alt="image1" />
        <div className="title1">"{topic}"</div>
        <div className="btn-container">
          <div className="button-container2">
            <button> <Link to={loadLink} target="_blank"> Read More</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastEventComp;
