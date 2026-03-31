import { useState } from "react";
import axios from "axios";
import "./ResumePage.css";
import { motion } from "framer-motion";

const Skeleton = () => {
  return <div className="skeleton-card"></div>;
};

function ResumePage() {
  const [filePath, setFilePath] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyze = async () => {
    if (!filePath) {
      alert("Please enter file path");
      return;
    }

    setLoading(true);
    setData(null);

    try {
      const res = await axios.post(
        `http://127.0.0.1:8000/analyze_resume/?file_path=${filePath}`
      );
      setData(res.data);
    } catch (err) {
      alert("Error analyzing resume");
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h2>📄 Resume Analyzer</h2>

      <input
        placeholder="Enter resume path..."
        value={filePath}
        onChange={(e) => setFilePath(e.target.value)}
      />
      <button onClick={analyze}>Analyze</button>

      {/* Loading Skeleton */}
      {loading && (
        <div className="results">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      )}

      {/* Results */}
      {data && (
        <div className="results">
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3>Detected Skills</h3>
            <div className="tags">
              {data.detected_skills.map((s, i) => (
                <span key={i}>{s}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3>Missing Skills</h3>
            <div className="tags missing">
              {data.missing_skills.slice(0, 10).map((s, i) => (
                <span key={i}>{s}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3>Career</h3>
            <p>{data.recommended_career}</p>

            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${data.match_score}%` }}
              ></div>
            </div>

            <p>{data.match_score}% Match</p>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default ResumePage;