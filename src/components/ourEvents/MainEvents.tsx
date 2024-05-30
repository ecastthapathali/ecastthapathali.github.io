import { useNavigate } from "react-router-dom";
import "./css/MainEvents.css";

const MainEvents = () => {
  const navigate = useNavigate();

  let pastEventsClick = () => {
    navigate("/pastevents");
  };

  let upcomingEventsClick = () => {
    navigate("/upcomingevents");
  };
  return (
    <>
      <div className="container3">
        <div className="container4">
          <div className="semi-container2">
            <div className="btn-container">
              <div className="button-container1">
                <button onClick={pastEventsClick}> Past Events</button>
              </div>
              <div className="button-container3">
                <button onClick={upcomingEventsClick}> Upcoming Events</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainEvents;
