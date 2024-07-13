import "./css/UpcomingEvents.css";
import OurPastEvents from "./OurPastEvents";
import UpcomingEvents from "./UpcomingEvents";

const WholeEvents = () => {
  return (
    <div className="bg-black flex flex-col items-center">
      <UpcomingEvents />
      <OurPastEvents />
    </div>
  );
};

export default WholeEvents;
