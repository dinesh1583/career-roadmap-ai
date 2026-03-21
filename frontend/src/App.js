import "./App.css";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import ResumePage from "./pages/ResumePage";
import AnalysisPage from "./pages/AnalysisPage";

function App() {
  return (
    <div className="app">

      <Sidebar />

      <div className="content">
        <Navbar />

        <div className="page">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/upload" element={<ResumePage />} />
            <Route path="/analysis" element={<AnalysisPage />} />
          </Routes>
        </div>

      </div>

    </div>
  );
}

export default App;