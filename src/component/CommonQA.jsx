// import { Dropdown } from "bootstrap";
import Dropdown3 from "./Dropdown3";
import React, { Component } from "react";
import "./App.css";


export default class CommonQA extends Component {
  render() {
    return (
      <div className="commonQA">
        <h1 className="qa-title">!مهمتنا مساعدتك</h1>
        <div className="container-qa">
          <div className="first-sec-qa">
            <Dropdown3 />
          </div>
        </div>
      </div>
    );
  }
}
