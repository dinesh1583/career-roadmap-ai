import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Python", value: 80 },
  { name: "SQL", value: 60 },
  { name: "ML", value: 70 },
  { name: "Data", value: 65 }
];

function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2>🚀 Dashboard</h2>

      {/* Cards */}
      <motion.div
        className="cards"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2 }}
      >

        <motion.div className="card stat" whileHover={{ scale: 1.05 }}>
          <h3>Career</h3>
          <p>Data Scientist</p>
        </motion.div>

        <motion.div className="card stat" whileHover={{ scale: 1.05 }}>
          <h3>Match Score</h3>
          <p>85%</p>
        </motion.div>

        <motion.div className="card stat" whileHover={{ scale: 1.05 }}>
          <h3>Skills</h3>
          <p>12</p>
        </motion.div>

      </motion.div>

      {/* Chart */}
      <div className="card chart">
        <h3>Skill Strength</h3>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </motion.div>
  );
}

export default Dashboard;