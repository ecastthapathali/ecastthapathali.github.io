import "./css/UpcomingEvents.css";
import OurPastEvents from "./OurPastEvents";
import OnGoingEvents from "./OnGoingEvents";

const WholeEvents = () => {
  return (
    <div className="bg-black flex flex-col items-center">
      <OnGoingEvents />
      <OurPastEvents />
    </div>
  );
};

export default WholeEvents;
