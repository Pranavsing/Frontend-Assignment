import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Metrices from "./components/Metrices";
import Logs from "./components/Logs";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Metrices />
      {/* <Logs /> */}
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
