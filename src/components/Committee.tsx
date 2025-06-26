import { useEffect, useState } from "react";
import Card from "./Card";

interface Member {
  name: string;
  position: string;
  imgSrc: string;
  linkedin: string;
  github: string;
}

const Committee = () => {
  const [TeamMemberList, setTeamMemberList] = useState<Member[]>([]);

  useEffect(() => {
    setTeamMemberList([
      {
        name: "Suprem Khatri",
        position: "President",
        imgSrc: "https://avatars.githubusercontent.com/u/128308240?v=4",
        linkedin: "https://www.linkedin.com/in/suprem-khatri-96ab3125a/",
        github: "https://github.com/supremkhatri",
      },

      {
        name: "Abhishek Panthee",
        position: "Vice President",
        imgSrc: "https://avatars.githubusercontent.com/u/80570587?v=4",
        linkedin: "https://www.linkedin.com/in/abhishekpanthee/",
        github: "https://github.com/abhishekpanthee",
      },
      {
        name: "Prenisha Upreti",
        position: "General Secretary",
        imgSrc:
          "https://shotcan.com/images/2024/07/02/commhr12702a9c0781ff015.jpg",
        linkedin: "https://www.linkedin.com/in/prenisha-upreti-050553264/",
        github: "https://github.com/prenisha-upreti",
      },
      {
        name: "Dikshya Khatri",
        position: "Vice Secretary / Treasurer",
        imgSrc: "https://avatars.githubusercontent.com/u/155458211?v=4",
        linkedin: "https://www.linkedin.com/in/dikshya-khatri-823826279/",
        github: "https://github.com/Dikshyakhatri333",
      },
      {
        name: "Dinanath Padhya",
        position: "Consultant",
        imgSrc: "https://avatars.githubusercontent.com/u/85153156?v=4",
        linkedin: "https://linkedin.com/in/whoisdinanath/",
        github: "https://github.com/whoisdinanath",
      },
      {
        name: "Pratik Pokharel",
        position: "Consultant",
        imgSrc: "https://avatars.githubusercontent.com/u/62210661?v=4",
        linkedin: "https://www.linkedin.com/in/pratik-pokharel-b684b91a0/",
        github: "https://github.com/pratik-writer",
      },
      {
        name: "Ninamhang Kulung",
        position: "Research and Development Team",
        imgSrc: "https://avatars.githubusercontent.com/u/118673128?v=4",
        linkedin: "https://www.linkedin.com/in/ninamhang-kulung-5a5805279/",
        github: "https://github.com/hang-kulung",
      },

      {
        name: "Sanjay Shrestha",
        position: "Research and Development Team",
        imgSrc:
          "https://shotcan.com/images/2025/06/14/eeaa563e-7dd9-4eca-b860-d82f98bcc9bbf6bc3b91a1e78096.jpg",
        linkedin: "https://www.linkedin.com/in/sanjay-shrestha-58b3b7275/",
        github: "https://github.com/sasudo2",
      },

      {
        name: "Purnima Bhandari",
        position: "Research and Development Team",
        imgSrc: "https://avatars.githubusercontent.com/u/166205776?v=4",
        linkedin: "https://www.linkedin.com/in/purnima-bhandari/",
        github: "https://github.com/purnima0122",
      },

      {
        name: "Ujjwal Dahal",
        position: "Technical Team",
        imgSrc: "https://avatars.githubusercontent.com/u/122596469?v=4",
        linkedin: "https://www.linkedin.com/in/brightnessujjwal/",
        github: "https://github.com/ujjwal-dahal",
      },
      {
        name: "Prastut Nepal",
        position: "Technical Team",
        imgSrc: "https://avatars.githubusercontent.com/u/76209855?v=4",
        linkedin: "https://www.linkedin.com/in/prastut-nepal-24325924a/",
        github: "https://github.com/nepalprastut",
      },

      {
        name: "Abinash Yadav",
        position: "Technical Team",
        imgSrc: "https://avatars.githubusercontent.com/u/52949024?v=4",
        linkedin: "https://www.linkedin.com/in/abinash-yadav-0b622936a/",
        github: "https://github.com/Avinash1286",
      },

      {
        name: "Bipul Ratna Shakya",
        position: "Technical Team",
        imgSrc: "https://avatars.githubusercontent.com/u/192164303?v=4",
        linkedin: "https://www.linkedin.com/in/bipul-ratna-shakya-baa978318/",
        github: "https://github.com/shakyabeepwool",
      },
      {
        name: "Shaswat Sharma",
        position: "Editor in Chief",
        imgSrc:
          "https://shotcan.com/images/2024/07/02/edt1ed2af06f43f4db47.jpg",
        linkedin: "https://www.linkedin.com/in/shaswat-sharma-0a6b76313/",
        github: "https://github.com/shaswat-13",
      },
      {
        name: "Shristi Mallik",
        position: "Communication, Events and HR",
        imgSrc:
          "https://shotcan.com/images/2024/07/02/commhr5468ad6fdbd96eff.th.jpg",
        linkedin: "https://www.linkedin.com/in/shristimallik/",
        github: "https://github.com/shmallik111",
      },
      {
        name: "Prajwal Khanal",
        position: "Communication, Events and HR",
        imgSrc: "https://avatars.githubusercontent.com/u/159675938?v=4",
        linkedin: "https://www.linkedin.com/in/connect-with-prajwal-khanal/",
        github: "https://github.com/connect-Prajwal-khanal",
      },
      
      {
        name: "Shoviyat Chapagain",
        position: "Graphics Designer",
        imgSrc: "https://avatars.githubusercontent.com/u/170164247?v=4",
        linkedin: "",
        github: "https://github.com/Shovi-c",
      },
      
      {
        name: "Amrit Tamang",
        position: "Graphics Designer",
        imgSrc: "https://avatars.githubusercontent.com/u/162800546?v=4",
        linkedin: "https://www.linkedin.com/in/tamang-amrit/",
        github: "https://github.com/AmritCodes-7",
      },

      {
        name: "Ayushma Devkota",
        position: "Graphics Designer",
        imgSrc: "https://avatars.githubusercontent.com/u/187758906?v=4",
        linkedin: "",
        github: "https://github.com/9lixir",
      },
      {
        name: "Agrima Shahi",
        position: "Social Media Manager",
        imgSrc: "https://avatars.githubusercontent.com/u/165810136?v=4",
        linkedin: "https://www.linkedin.com/in/agrima-shahi-990896369/",
        github: "https://github.com/agrimashahi",
      },
    ]);
  }, []);

  return (
    <section className="bg-black from-theme-lqa flex w-full text-center flex-col p-4">
      <h1 className="text-theme text-5xl my-8">Our Committee</h1>
      <div className="py-8 grid place-items-center gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {TeamMemberList.map((memInfo) => (
          <Card
            key={memInfo.name}
            imgSrc={
              memInfo.imgSrc === ""
                ? "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
                : memInfo.imgSrc
            }
            name={memInfo.name}
            pos={memInfo.position}
            linkedin={memInfo.linkedin}
            github={memInfo.github}
          />
        ))}
      </div>
    </section>
  );
};

export default Committee;
