import React, { useState } from "react";
import "../pages/ResumePage.css";

function ResumePage() {
  const [filePath, setFilePath] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/analyze_resume/?file_path=${filePath}`,
        { method: "POST" }
      );

      const data = await response.json();
      setResult(data);

    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h2>🚀 AI Resume Analyzer</h2>

      <input
        type="text"
        placeholder="Enter file path"
        value={filePath}
        onChange={(e) => setFilePath(e.target.value)}
      />

      <button onClick={handleAnalyze}>Analyze</button>

      {loading && <p>⏳ Analyzing Resume...</p>}

      {result && (
        <div className="results">

          <div className="card">
            <h3>🎯 Career</h3>
            <p>{result.recommended_career}</p>
          </div>

          <div className="card">
            <h3>✅ Skills</h3>
            <p>{result.detected_skills?.join(", ")}</p>
          </div>

        </div>
      )}
    </div>
  );
}

export default ResumePage;