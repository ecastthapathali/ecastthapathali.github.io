import React from 'react';
import "./css/Events.css";

interface IPROPS {
  image: string;
  topic: string;
  eventId: string;
}

const Events: React.FC<IPROPS> = ({ image, topic, eventId: _eventId }) => {
  // const getReadMoreLink = (eventId: string): string => {
  //   const links: Record<string, string> = {
  //     'coming-soon': '#', 
  //     'coming-soon-2': '#',
  //     // Add more event IDs and their corresponding links here
  //   };
  //   return links[eventId] || '#'; 
  // };

  return (
    <div className="image-container">
      <div className="semi-image">
        <img className="images" src={image} alt={topic}/>
        <div className="title1">"{topic}"</div>
        <div className="btn-container">
          <div className="button-container1">
            {/* <Link to={`/register/${eventId}`} className="button-link">Register</Link> */}
            <a target="_blank" href='https://docs.google.com/forms/d/e/1FAIpQLScj68ra-PDu4ePIJW8mpMO8j-3Z2sAQBpGpBAt_OKdC8eLIcA/viewform' className="button-link">Register</a>
          </div>
          <div className="button-container2">
            {/* <a href={getReadMoreLink(eventId)} className="button-link" >Read More</a> */}
            <a target="_blank" href='https://www.facebook.com/photo?fbid=716365804372950&set=a.158299590179577' className="button-link" >Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
