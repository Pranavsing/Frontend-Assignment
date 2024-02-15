import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';

import Lelo from './components/Lelo'
import Pelo from './components/Pelo';
import Helo from './components/Helo';
import Cnt from './components/Cnt';
import Navbar from './components/Navbar';
import Metrices from './components/Metrices';
export default function App() {
  return (
    <div className="App">
      {/* <Helo></Helo>
      <Cnt></Cnt> */}
      <Navbar/>
      <Metrices/>
    </div>
  );
}

// export default App;

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './Navbar';
// import Metrices from './Metrices';

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/metrics" element={<Metrices />} />
//         {/* Add other routes here if needed */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;

