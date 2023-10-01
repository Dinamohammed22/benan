import React from "react";
import "./App.css";
import System from "./System";
import image from "../images/logoبعد -01 1.png";
import { Route, BrowserRouter, NavLink, Routes } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-scroll";

import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <div className="footerr">
      <div className="container-footer">
        <div className="collumn col-logo">
          <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
            <img src={image} className="dior-ic" alt="jhj" />
          </NavLink>
        </div>

        <div className="collumn">
          <Dropdown className="drop">
            <Dropdown.Toggle
              className="drop"
              variant="success"
              id="dropdown-basic"
            >
              <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
                الرئيسية
              </NavLink>
            </Dropdown.Toggle>

            <Dropdown.Menu className="drop-menu">
              <Dropdown.Item className="drop-item" href="#/action-1">
                <Link to="third-sec" smooth={false} duration={300}>
                  لماذا بنان
                </Link>
              </Dropdown.Item>
              <Dropdown.Item className="drop-item" href="#/action-2">
                <Link to="fourth-sec" smooth={false} duration={300}>
                  مميزاتنا
                </Link>
              </Dropdown.Item>
              <Dropdown.Item className="drop-item" href="#/action-3">
                <Link to="fifth-sec" smooth={false} duration={300}>
                  شركاؤنا
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="collumn">
          <NavLink to="/Whous" onClick={() => window.scrollTo(0, 0)}>
            من نحن
          </NavLink>
        </div>

        <div className="collumn">
          <System />
        </div>

        <div className="collumn">
          <NavLink to="/CommonQA" onClick={() => window.scrollTo(0, 0)}>
            الاسئلة الشائعة
          </NavLink>
        </div>
        <div className="collumn">
          <NavLink to="/Services" onClick={() => window.scrollTo(0, 0)}>
            نظام بنان
          </NavLink>
        </div>
      </div>
      <div className="ٌroww">
        <div className="three-logos">
          <a href="Support@ghyom.net">
            <img
              src={require("../images/support.png")}
              className="imge-three-logos"
              alt="jhj"
            />
          </a>
          <a href="sales@ghyom.net">
            <img
              src={require("../images/sales.png")}
              className="imge-three-logos"
              alt="jhj"
            />
          </a>
          <a href="https://www.youtube.com/@Ghyom0">
            <img
              src={require("../images/youtube.png")}
              className="imge-three-logos"
              alt="jhj"
            />
          </a>
        </div>

        <div className="roww">
          <img
            src={require("../images/phone2.png")}
            className="phone"
            alt="jhj"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
