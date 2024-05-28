import React from "react";
import Card from "./intakeComponents/Card"
import "../static/IntakeForm.css";

const IntakeForm: React.FC = () => {
  return (
    <>
      <form className="main_container">
        <div className="semi_container">
          <div className="title">ecast intake form</div>

          <Card title="full name" placeholder="Enter Your Full Name" />
          <Card title="full campus roll no." placeholder="Enter Your Full Campus Roll No." />
          <Card title="contact" placeholder="Enter Your Contact Number" />
          <Card title="email" placeholder="Enter Your Email Address" />

          <div className="box">
            <div className="name">post that you want to apply for</div>

            <div className="radio_box">
              <input type="radio" className="radio" name="position" />
              <span className="label-name">
                technical team (hardware/ software)
              </span>
            </div>

            <div className="radio_box">
              <input type="radio" className="radio" name="position" />
              <span className="label-name">research & development</span>
            </div>

            <div className="radio_box">
              <input type="radio" className="radio" name="position" />
              <span className="label-name">social media manager</span>
            </div>

            <div className="radio_box">
              <input type="radio" className="radio" name="position" />
              <span className="label-name">events & communication</span>
            </div>

            <div className="radio_box">
              <input type="radio" className="radio" name="position" />
              <span className="label-name">editor in chief</span>
            </div>

            <div className="radio_box">
              <input type="radio" className="radio" name="position" />
              <span className="label-name">graphics designer</span>
            </div>
          </div>

          <Card title="describe yourself" placeholder="Describe Yourself" />
          <Card title="what do you hope to gain from joining the club?" placeholder="Write Your Answer" />
          <Card title="something that you are currently interested in outside of course" placeholder="Write Your Answer" />


          <div className="box">
            <div className="name">
              upload your CV/RESUME. Its recommended to make one
            </div>
            <div className="file-upload-wrapper">
              <input type="file" name="file" id="file" className="file-input" />
            </div>
          </div>

          <Card title="link to any social media" placeholder="Write Your Answer" />
          
          <button type="submit" className="sub_btn">
            submit
          </button>
        </div>
      </form>
    </>
  );
};

export default IntakeForm;
