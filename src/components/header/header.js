import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./header.css";
import LogoBening from '../../assets/logoBening.png'

class Header extends Component {
  active = {
    fontWeight: "bold",
    color: "red"
  };
  contentHeaders = {
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }

  render() {
    return (
      <div className="Header">
        <div style={this.contentHeaders}>
          <div></div>
          <NavLink exact to="/" activeStyle={this.active}>
            <img src={LogoBening} style={{ width: 200 }} alt="Logo" />
          </NavLink>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Header;
