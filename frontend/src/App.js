import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import ResumePage from "./pages/ResumePage";
import AnalysisPage from "./pages/AnalysisPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function App() {
  const isLoggedIn = localStorage.getItem("token");

  return (
    <div className="app">

      {/* ✅ Show Sidebar only after login */}
      {isLoggedIn && <Sidebar />}

      <div className="content">
        {isLoggedIn && <Navbar />}

        <div className="page">
          <Routes>

            {/* ✅ Default route */}
            <Route
              path="/"
              element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
            />

            {/* 🔐 Protected routes */}
            <Route
              path="/upload"
              element={isLoggedIn ? <ResumePage /> : <Navigate to="/login" />}
            />
            <Route
              path="/analysis"
              element={isLoggedIn ? <AnalysisPage /> : <Navigate to="/login" />}
            />

            {/* 🔓 Public routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* 🔐 Protected Profile route */}
            <Route
              path="/profile"
              element={isLoggedIn ? <Profile /> : <Navigate to="/login" />}
            />

          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;