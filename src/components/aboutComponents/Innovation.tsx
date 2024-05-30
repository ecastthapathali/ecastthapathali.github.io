import {useNavigate } from "react-router-dom";
import "./css/Innovation.css";

const Innovation = () => {

  let navigate = useNavigate()

  let handleClick=()=>{
    navigate("/ourevents")
  }
  return (
    <>
        <div className="flex flex-col items-center justify-center bg-black text-white pt-10">
        <p className="text-center font-bold text-xl">
          PROGRAM 
        </p>
        <div className="w-1/2 lg:w-1/4 mx-auto border-t-1 border-b-2 border-red-800 my-4"></div>
      </div>

    <div className="container">
    <div className="semi-container">
    ECAST conducts various programs, including flagship events like "My First Commit," a Software Fellowship Program focusing on emerging technologies and web development. They organize competitions like the "Pride Month Design Competition" to raise awareness and celebrate LGBTQIA+ rights. Additionally, ECAST hosts seminars and talks such as "Unleashing the Art of Enquiry" and "Talk Show on Block Chain" to explore research and career prospects in technology fields. The society actively participates in projects like the development of the Thapathali Campus website and engages in initiatives like the Yathartha Tech-Fest, where they handle tasks such as proposal writing, social media management, website development, and event coordination. ECAST also conducts coding competitions, gaming events like the PUBG Competition, and workshops on topics ranging from ASP.NET to machine learning. Looking ahead, their future plans include organizing workshops, documentation sessions, and projects related to machine learning and blockchain, aiming to continue promoting technological innovation and skill development within the campus community.

    <div className="button-container2">
          <button onClick={handleClick}>   Read More</button>
      </div>
    </div>
    </div>
    
    </>
  )
}

export default Innovation