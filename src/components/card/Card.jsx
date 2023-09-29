import React from "react";
import "./Card.scss";
const Card = () => {
  return (
    <div>
      <div
        style={{
          width: "50%",
          height: "700px",
          marginLeft: "25%",
          marginRight: "25%",
          marginTop: "5%",
          backgroundColor: "Green",
          position: "absolute",
        }}
      >
        <div
          style={{
            width: "80%",
            top: "30",
            margin: "20%",
            backgroundColor: "White",
            position: "relative",
          }}
        >
          Swiping card with profile!
        </div>
      </div>
    </div>
  );
};

export default Card;
