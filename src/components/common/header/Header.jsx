import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Head from "./Head";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const location = useLocation();
  const isScholarshipDisplay =
    location.pathname === "/scholarship-result/display";

  return (
    <>
      <Head isScholarshipDisplay={isScholarshipDisplay} />
      <header
        className={isScholarshipDisplay ? "scholarship-display-header" : ""}
      >
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB "}
            onClick={() => setClick(false)}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/team">Instructors</Link>
            </li>
            {/* <li>
              <Link to='/pricing'>Pricing</Link>
            </li>
            <li>
              <Link to='/journal'>Journal</Link>
            </li> */}
            <li>
              <a
                href="https://students.srgeducation.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="external-link"
              >
                SRGian
              </a>
            </li>
            <li>
              <Link to="/scholarship" className="scholarship-nav-link">
                Scholarship
              </Link>
            </li>
            {/* <li>
              <a
                href='https://srgeducation.netlify.app/'
                rel='noopener noreferrer'>
                Certificate
              </a>
            </li> */}
            <li className="nav-dropdown">
              <span className="dropdown-toggle">
                Results <i className="fa fa-caret-down"></i>
              </span>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/scholarship-result">Scholarship Result</Link>
                </li>
                <li>
                  <Link to="/results">Test Result</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="header-mobile">
            <div className="start">
              <a className="head" href="tel:+919891396090">
                +91 98913 96090
              </a>
            </div>
            <button
              className="toggle button-toggle"
              onClick={() => setClick(!click)}
            >
              {click ? (
                <i className="fa fa-times"> </i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
