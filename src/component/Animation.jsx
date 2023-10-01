import React, { Component, useEffect, useState } from "react";
import image1 from "../images/Ellipse 8.png";
import image2 from "../images/Ellipse 5.png";
import image3 from "../images/Ellipse 6.png";
import image4 from "../images/Ellipse 4.png";
import image5 from "../images/Ellipse 12.png";
import image6 from "../images/Ellipse 10.png";
import image8 from "../images/Ellipse 9.png";
import GroupOfImages from "./GroupOfImages";

export default function CommonQA() {
  return (
    <div className="animation">
      <div className="containerr">
        <div className="icon">
          <div
            className="imgbox  active"
            style={{ "--i": "1" }}
            data-id="content1"
          >
            <img src={image1} />
          </div>
          <div className="imgbox" style={{ "--i": "2" }} data-id="content2">
            <img src={image2} />
          </div>
          <div className="imgbox" style={{ "--i": "3" }} data-id="content3">
            <img src={image3} />
          </div>
          <div className="imgbox" style={{ "--i": "4" }} data-id="content4">
            <img src={image4} />
          </div>
          <div className="imgbox" style={{ "--i": "5" }} data-id="content5">
            <img src={image5} />
          </div>
          <div className="imgbox" style={{ "--i": "6" }} data-id="content6">
            <img src={image6} />
          </div>
          <div className="imgbox" style={{ "--i": "7" }} data-id="content7">
            <img src={image8} />
          </div>
        </div>

        <div className="middle-images">
          <GroupOfImages />
        </div>
      </div>
    </div>
  );
}
