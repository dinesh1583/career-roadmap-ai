import "./App.css";
import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

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

        <motion.div
          className="page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key={window.location.pathname}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/upload" element={<ResumePage />} />
            <Route path="/analysis" element={<AnalysisPage />} />
          </Routes>
        </motion.div>

      </div>

    </div>
  );
}

export default App;