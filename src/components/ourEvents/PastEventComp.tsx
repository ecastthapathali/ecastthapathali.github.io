import React from 'react';
import "./css/Events.css";
import { Link } from 'react-router-dom';

interface IPROPS {
  image: string;
  topic: string;
  loadLink: string;
  secondButtonLink?: string;
}

const PastEventComp: React.FC<IPROPS> = ({ image, topic, loadLink, secondButtonLink }) => {
  return (
    <div className="image-container">
      <div className="semi-image">
        <img className="images" src={image} alt={topic} />
        <div className="title1">"{topic}"</div>
        <div className="btn-container">
          <div className="button-container2">
            <button>
              <Link to={loadLink} target="_blank"> Read More</Link>
            </button>
          </div>
          {secondButtonLink && topic === "Article Writing Competition" && (
            <div className="button-container2">
              <button>
                <Link to={secondButtonLink} > View Results</Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PastEventComp;
