import React from "react";
import "./css/Card.css"

interface IPROPS{
    title : String,
    placeholder :string
}

const Card: React.FC<IPROPS> = ({title,placeholder}) => {
  return (
    <>
    <div className="box">
            <div className="name">{title}</div>
            <input
              type="text"
              className="input_box"
              placeholder={placeholder}
              required
            />
          </div> 
    </>
  );
};

export default Card;