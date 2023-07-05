import { useEffect, useState } from "react";
import Card from "./Card";

interface Member {
  name: string;
  position: string;
  imgSrc: string;
}

const Committee = () => {
  const [TeamMemberList, setTeamMemberList] = useState<Member[]>([]);

  useEffect(() => {
    setTimeout(() => {
      //set TeamMemberList to the list of members from the backend
      //fetch("https://ecast-backend.herokuapp.com/api/members")
      //  .then((res) => res.json())
      //  .then((data) => {
      //    setTeamMemberList(data);
      //  });

      setTeamMemberList([
        {
          name: "Om Prakash Sharma",
          position: "President",
          imgSrc: "https://avatars.githubusercontent.com/u/66164291?v=4",
        },
        {
          name: "Prashant Raj Bista",
          position: "Vice President",
          imgSrc: "https://avatars.githubusercontent.com/u/85779064?v=4",
        },
        {
          name: "Namita Bhatta",
          position: "General Secretary",
          imgSrc: "",
        },
        {
          name: "Prahlad Acharya",
          position: "Treasurer",
          imgSrc: "",
        },
        {
          name: "Abhinav Chalise",
          position: "Software Coordinator",
          imgSrc: "https://avatars.githubusercontent.com/u/82364981?v=4",
        },
        {
          name: "Nishan Khanal",
          position: "Research and Development Head",
          imgSrc: "https://avatars.githubusercontent.com/u/66510055?v=4",
        },
      ]);
    }, 1000);
  }, []);

  return (
    <section className="bg-gradient-to-t from-theme-lqa flex w-full text-center flex-col p-4">
      <h1 className="text-theme text-5xl my-8">Our Committee</h1>
      {/* Team Member Cards Collections */}
      <div className="py-8 grid place-items-center gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {/* replace it with the appropaite object containing team info... */}
        {TeamMemberList.map((memInfo) => (
          <Card
            imgSrc={
              memInfo.imgSrc == ""
                ? "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
                : memInfo.imgSrc
            }
            name={memInfo.name}
            pos={memInfo.position}
          />
        ))}
      </div>
    </section>
  );
};

export default Committee;
