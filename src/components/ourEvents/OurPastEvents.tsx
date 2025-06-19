import "./css/OurPastEvents.css"
import firstcommit from "./EventsImages/firstcommit.jpg"
import startup from "./EventsImages/startup.jpg"
import linux from "./EventsImages/linuxworkshop.jpg"
import blockchain from "./EventsImages/blockchain.jpg"
import art from "./EventsImages/art.jpg"
import net from "./EventsImages/netbootcamp.jpg"
import PastEventComp from "./PastEventComp";
import article from "./EventsImages/event1.jpg"

const OurPastEvents = () => {
  return (
    <>
  <div className="flex flex-col items-center justify-center bg-black text-white pt-10">
        <p className="text-center font-bold text-xl">OUR PAST EVENTS</p>
        <div className="w-1/2 lg:w-1/4 mx-auto border-t-1 border-b-2 border-red-800 my-4"></div>
      </div>

      <div className="container1">
        <div className="container2">
          <div className="semi-container1">
            <PastEventComp 
              image={article} 
              topic="Article Writing Competition" 
              loadLink="#"
            />
          </div>

          <div className="semi-container1">
            <PastEventComp 
              image={firstcommit} 
              topic="My First Commit" 
              loadLink="https://www.facebook.com/photo.php?fbid=243871488289053&set=pb.100079986095247.-2207520000&type=3"
            />
          </div>
          <div className="semi-container1">
            <PastEventComp 
              image={linux} 
              topic="Linux Workshop" 
              loadLink="https://www.facebook.com/ecastthapathali/photos/pb.100079986095247.-2207520000/568360141304281/?type=3"
            />
          </div>
          <div className="semi-container1">
            <PastEventComp 
              image={art} 
              topic="Unleashing the Art of Enquiry" 
              loadLink="https://www.facebook.com/photo.php?fbid=254634513879417&set=pb.100079986095247.-2207520000&type=3"
            />
          </div>
       


          <div className="semi-container1">
            <PastEventComp 
              image={net} 
              topic="ASP.NET Boot Camp" 
              loadLink="https://www.facebook.com/photo.php?fbid=257665533576315&set=pb.100079986095247.-2207520000&type=3"
            />
          </div>
          <div className="semi-container1">
            <PastEventComp 
              image={startup} 
              topic="Feasibility of Startups in Nepal" 
              loadLink="https://www.facebook.com/photo.php?fbid=269116709097864&set=pb.100079986095247.-2207520000&type=3"
            />
          </div>
          <div className="semi-container1">
            <PastEventComp 
              image={blockchain} 
              topic="Talk Show on Block Chain" 
              loadLink="https://www.facebook.com/photo.php?fbid=353277224015145&set=pb.100079986095247.-2207520000&type=3"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurPastEvents;
