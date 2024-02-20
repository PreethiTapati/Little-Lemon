import React from "react";
import "./Card.css";

const Card = ({ data }) => {
  return (
    <>
      <div className="card-container">
      <div className="card">
        <div className="imgBx" style={{ background: `url(${data.image}) no-repeat center / cover` }}></div>
        <div className="content">
          {/* <span className="price">
            
          </span> */}
          <div className="pd white">
              <h5>{data.title}</h5>
              <span>{`${data.price}`}</span>
            <p>{data.description || "No description available"}</p>
          </div>
        </div>
        </div>
        </div>
    </>
  );
};


export default Card;
