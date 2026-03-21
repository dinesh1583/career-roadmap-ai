import { Home, FileText, BarChart, Briefcase, User } from "lucide-react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>AI Navigator</h2>

      <ul>
        <li><Link to="/"><Home size={18}/> Dashboard</Link></li>
        <li><Link to="/upload"><FileText size={18}/> Resume</Link></li>
        <li><Link to="/analysis"><BarChart size={18}/> Analysis</Link></li>
        <li><Link to="/jobs"><Briefcase size={18}/> Jobs</Link></li>
        <li><Link to="/profile"><User size={18}/> Profile</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;