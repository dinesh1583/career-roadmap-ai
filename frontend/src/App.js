import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import ResumePage from "./pages/ResumePage";
import AnalysisPage from "./pages/AnalysisPage";

function App() {
  return (
    <div className="dashboard">

      {/* Sidebar */}
      <div className="sidebar">
        <h2>AI Navigator</h2>

        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/upload">Upload Resume</Link></li>
          <li><Link to="/analysis">Career Analysis</Link></li>
        </ul>
      </div>

      {/* Main */}
      <div className="main">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/upload" element={<ResumePage />} />
          <Route path="/analysis" element={<AnalysisPage />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;