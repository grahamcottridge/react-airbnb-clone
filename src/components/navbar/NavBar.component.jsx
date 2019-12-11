import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.styles.scss";

class NavBar extends React.Component {
  render() {
    let navColor = "transparent";
    if (this.props.location.pathname !== "/") {
      navColor = "black";
    }

    return (
      <div className="container-fluid nav">
        <div className="row">
          <nav className={navColor}>
            <div className="nav-wrapper">
              <Link to="/" className="left">
                airbnb
              </Link>
              <ul id="nav-mobile" className="right">
                <li>
                  <Link to="/">English (GB)</Link>
                </li>
                <li>
                  <Link to="/">£ GBP </Link>
                </li>
                <li>
                  <Link to="/">Become a host</Link>
                </li>
                <li>
                  <Link to="/">Help</Link>
                </li>
                <li>
                  <Link to="/">Sign up</Link>
                </li>
                <li>
                  <Link to="/">Log in</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default NavBar;
