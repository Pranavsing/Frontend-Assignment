import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Metrices from "./Metrices";
import Logs from "./Logs";
import Days from "./Days";
// import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className="nav">
        <a href="/" className="site-title">
          Truefondry
        </a>
        <ul>
          <li>
            <a href="metrices">Metrices</a>
          </li>
          <li>
            <a href="logs">Logs</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
