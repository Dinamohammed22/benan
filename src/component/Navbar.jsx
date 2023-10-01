import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import System from "./System";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-scroll";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-">
        <div className="container-nav">
          <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
            <img
              src={require("../images/logoبعد -01 1.png")}
              className="benan-img"
              alt="benan-logo"
            />
          </NavLink>
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

            <Dropdown.Menu className="drop-menu drop-menu-nav">
              <Dropdown.Item
                className="drop-item drop-item-nav"
                href="#/action-1"
              >
                <Link
                  className="drop-link"
                  to="third-sec"
                  smooth={false}
                  duration={300}
                >
                  لماذا بنان
                </Link>
              </Dropdown.Item>
              <Dropdown.Item className="drop-item" href="#/action-2">
                <Link
                  className="drop-link"
                  to="fourth-sec"
                  smooth={false}
                  duration={300}
                >
                  مميزاتنا
                </Link>
              </Dropdown.Item>
              <Dropdown.Item className="drop-item" href="#/action-3">
                <Link
                  className="drop-link"
                  to="fifth-sec"
                  smooth={false}
                  duration={300}
                >
                  شركاؤنا
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <NavLink to="/Whous" onClick={() => window.scrollTo(0, 0)}>
            من نحن
          </NavLink>
          <NavLink to="/CommonQA" onClick={() => window.scrollTo(0, 0)}>
            الاسئلة الشائعة
          </NavLink>
          <NavLink>نظام بنان</NavLink>
          <System />
          {/* <NavLink to="/System">نسخة تجريبية</NavLink> */}
        </div>
      </div>
    );
  }
}
