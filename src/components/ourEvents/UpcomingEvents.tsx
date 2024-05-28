
import "./css/UpcomingEvents.css"
import Events from "./Events";


/* Upcoming Events Images */
import comingsoon from "./EventsImages/comingsoon.png"


const UpcomingEvents = () => {
  return (
    <>
     <div className="flex flex-col items-center justify-center bg-black text-white pt-10">
      <p className="text-center font-bold text-xl">OUR UPCOMING EVENTS</p>
      <div className="w-1/2 lg:w-1/4 mx-auto border-t-1 border-b-2 border-red-800 my-4"></div>
    </div>

    <div className="container1">

      <div className="container2">
        <div className="semi-container1">
          <Events 
          image={comingsoon} 
          topic="WILL BE UPDATED SOON" 
          loadLink=""
          registerLink="" />
        </div>
        <div className="semi-container1">
          <Events 
          image={comingsoon} 
          topic="WILL BE UPDATED SOON" 
          loadLink=""
          registerLink="" />
        </div>
        <div className="semi-container1">
          <Events 
          image={comingsoon} 
          topic="WILL BE UPDATED SOON" 
          loadLink=""
          registerLink="" />
        </div>
      </div>

    </div>

  </>
  )
}

export default UpcomingEvents