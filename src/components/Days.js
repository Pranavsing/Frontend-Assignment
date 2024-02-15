import React,{useState} from 'react'

//  import React, { useState } from 'react';

const Days = () => {
  const [selected, setSelected] = useState('Last 5 minutes');
  
  const options = [
    'Last 5 minutes',
    'Last 15 minutes',
    'Last 30 minutes',
    'Last 1 hour',
    'Last 3 hours',
    'Last 6 hours'
  ];

  return (
    <div className='drop'>

    <select value={selected} onChange={(e) => setSelected(e.target.value)}>
      {options.map((option, index) => (
          <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
      </div>
  );
};

export default Days;


// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// const Days = () => {
//   const history = useHistory();
//   const [timeframe, setTimeframe] = useState('last 5 minutes');
//   const options = [
//     'last 5 minutes',
//     'last 15 minutes',
//     'last 30 minutes',
//     'last 1 hour',
//     'last 3 hours',
//     'last 6 hours',
//   ];

//   const handleTimeframeChange = (newTimeframe) => {
//     setTimeframe(newTimeframe);
//     const urlParams = new URLSearchParams(history.location.search);
//     urlParams.set('timeframe', newTimeframe);
//     history.push({ search: urlParams.toString() });
//   };

//   return (
//     <div className="dropdown">
//       <button className="dropdown-toggle">
//         {timeframe} <i className="fa fa-angle-down"></i>
//       </button>
//       <ul className="dropdown-menu">
//         {options.map((option) => (
//           <li key={option}>
//             <a
//               href="#"
//               onClick={() => handleTimeframeChange(option)}
//               className={timeframe === option ? 'active' : ''}
//             >
//               {option}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Days;


