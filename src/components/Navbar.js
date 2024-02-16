import React from "react";

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
