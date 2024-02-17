import React from "react";
import Navbar from "./components/Navbar";
import Metrices from "./components/Metrices";
import Logs from "./components/Logs";
import Storybook from "./components/Storybook";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
export default function App() {
  return (
    <BrowserRouter>
    <Navbar>
    <Routes>
         <Route path="/" />
              <Route path="/metrices" element={<Metrices />} />
              <Route path="/logs" element={<Logs />} />
              <Route path="/storybook" element={<Storybook />} />
          </Routes>
    </Navbar>   
</BrowserRouter>
  );
}
