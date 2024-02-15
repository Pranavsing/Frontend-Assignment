import React, { Component } from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Metrices from './Metrices'
import Logs from './Logs'
import Days from './Days'
// import React from 'react'

 function Navbar() {
  return (
    <div>
      <nav className='nav'>
        <a href='/' className='site-title'>Truefondry</a>
        <ul>
            <li >
                <a href='metrices'>Metrices</a>
            </li>
             <li >
                <a href='logs'>Logs</a>
            </li>
        </ul>
        <Days></Days>
      </nav>
    </div>
  )
}
export default Navbar

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Days from './Days';

// const Navbar = () => {
//   const [selectedOption, setSelectedOption] = useState('metrics');

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//   };

//   return (
//     <nav className="navbar">
//       {/* Navbar structure with icons and links */}
//       <Link
//         to="/metrics"
//         className={`option ${selectedOption === 'metrics' ? 'selected' : ''}`}
//         onClick={() => handleOptionClick('metrics')}
//       >
//         <i className="fa fa-tachometer"></i> Metrics
//       </Link>
//       {/* Other links with icons */}
//       <Days />
//     </nav>
//   );
// };

// export default Navbar;

