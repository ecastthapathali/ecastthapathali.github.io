
import "./css/Workshop.css";
import image1 from "../images/ecast3.webp"
import image2 from  "../images/ecast6.webp"
import image3 from  "../images/ecast7.webp"
import image4 from  "../images/ecast8.webp"

const Workshop = () => {
  return (
    <>
        <div className="flex flex-col items-center justify-center bg-black text-white pt-10">
        <p className="text-center font-bold text-xl">
          WORKSHOP 
        </p>
        <div className="w-1/2 lg:w-1/4 mx-auto border-t-1 border-b-2 border-red-800 my-4"></div>
      </div>

    <div className="container">
    <div className="semi-container">
    ECAST has successfully organized several impactful workshops and events over the past year, significantly contributing to the education and skill development of students in the electronics and computer engineering fields. <br></br><br></br>

On August 26, 2022, we held a comprehensive workshop on Web App Development with Python Django. This was followed by the Cloud Computing with Microsoft Azure and Deploying Web Apps workshop on July 28, 2022, which provided valuable insights into cloud technologies. Additionally, the Linux Workshop conducted on Jestha 26 offered students practical knowledge on using and managing Linux systems.<br></br><br></br>

From July 17 to 22, 2022, ECAST also hosted a Competitive Programming event, fostering problem-solving skills and coding proficiency among participants. These initiatives underscore our commitment to enhancing the academic and professional capabilities of our members.<br></br><br></br>

Through these activities, ECAST continues to play a pivotal role in advancing the technical expertise of students at Thapathali Engineering Campus.<br></br><br></br>

<div className="image-container">

<div className="semi-image1">
<img className="images" src={image1} alt="image1"/>
<img className="images" src={image2} alt="image2" />
</div>
<div className="semi-image1">
<img className="images" src={image3} alt="image3" />
<img className="images" src={image4} alt="image4" />
</div>
</div>
    </div>
    </div>
    
    </>
  )
}

export default Workshop