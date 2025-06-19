
import "./css/UpcomingEvents.css";
import Events from "./Events";


const OnGoingEvents = () => {
  const upcomingEvents = [
    {
      id: "ongoing",
      topic: "On Going",
      image: 'https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/508374271_716365811039616_8656297632071337519_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGkJgVpjCqfdqEhfAqSyRxixcFamSWj4zzFwVqZJaPjPNHvFHrZewxdHtW_lIU7JQlPKTCxnoemaM9GcQVzzYpL&_nc_ohc=PH_kzPXbY44Q7kNvwF3DzZG&_nc_oc=AdmMjHR1DmV_fHM6wUrz35oqXeDvjlLarA1DSW6EvAEpF98b5dWwa4yIVan7JeDyNCQ&_nc_zt=23&_nc_ht=scontent.fktm20-1.fna&_nc_gid=BdA6o8pOlaNGzeGD6zeZyQ&oh=00_AfNZqDp9G4OOa1Lhq2ftxo25pYXc8rMAe6AIVgEviN4APg&oe=68598C94',
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-black text-white pt-10">
        <p className="text-center font-bold text-xl">OUR ONGOING EVENTS</p>
        <div className="w-1/2 lg:w-1/4 mx-auto border-t-1 border-b-2 border-red-800 my-4"></div>
      </div>

      <div className="container1">
        <div className="container2">
          {upcomingEvents.map(event => (
            <div className="semi-container1" key={event.id}>
              <Events
                image={event.image}
                topic={event.topic}
                eventId={event.id}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OnGoingEvents;
