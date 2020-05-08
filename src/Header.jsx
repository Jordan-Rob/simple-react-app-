import React, { Component } from "react";
import "./index.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div id="branding">
            <h1>
              <span className="highlight">Nova</span> Web Design
            </h1>
          </div>
          <nav>
            <ul>
              <li className="current">
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="services.html">Services</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
