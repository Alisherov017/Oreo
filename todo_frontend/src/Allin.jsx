import React from "react";
import App from "./App";
import plovImage from "../src/assets/images/iuci3.png";
import typing from "../src/assets/images/typing.png";
import information from "../src/assets/images/iuci2.png";
import lastOne from "../src/assets/images/lastone.png";

import "./Allin.css";

const Allin = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="allPic">
          <div className="wrapper_picture">
            <img className="imagess" src={plovImage} alt="plov" />
          </div>
          <div className="wrapper_picture_typing">
            <img className="imagess" src={typing} alt="typing" />
          </div>
          <div className="wrapper_picture_information">
            <img src={information} alt="information" />
          </div>
        </div>
      </div>

      <div className="app">
        <App />
      </div>

      <div className="lastOne">
        <img className="imagess" src={lastOne} alt="lastOne" />
      </div>
    </div>
  );
};

export default Allin;
