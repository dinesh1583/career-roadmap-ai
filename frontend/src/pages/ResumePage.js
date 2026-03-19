import React, { useState } from "react";
import "./ResumePage.css";

function ResumePage() {
  const [filePath, setFilePath] = useState("");
  const [result, setResult] = useState(null);

  const handleAnalyze = async () => {
    const response = await fetch(
      `http://127.0.0.1:8000/analyze_resume/?file_path=${filePath}`,
      { method: "POST" }
    );
    const data = await response.json();
    setResult(data);
  };

  return (
    <div className="container">
      <h2> AI Resume Analyzer</h2>

      <input
        type="text"
        placeholder="Enter file path"
        value={filePath}
        onChange={(e) => setFilePath(e.target.value)}
      />
      <button onClick={handleAnalyze}>Analyze</button>

      {result && (
        <div className="results">

          {/* Career */}
          <div className="card">
            <h3>🎯 Career Match</h3>
            <h2>{result.recommended_career}</h2>

            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${result.match_score}%` }}
              ></div>
            </div>

            <p>{result.match_score}% Match</p>
          </div>

          {/* Skills */}
          <div className="card">
            <h3>✅ Skills</h3>
            <div className="tags">
              {result.detected_skills?.map((s, i) => (
                <span key={i}>{s}</span>
              ))}
            </div>
          </div>

          {/* Missing Skills */}
          <div className="card">
            <h3>❌ Missing Skills</h3>
            <div className="tags missing">
              {result.missing_skills?.slice(0, 15).map((s, i) => (
                <span key={i}>{s}</span>
              ))}
            </div>
          </div>

          {/* Roadmap Timeline */}
          <div className="card">
            <h3>🛣️ Roadmap</h3>
            {result.roadmap?.slice(0, 5).map((step, i) => (
              <div key={i} className="timeline">
                <h4>{step.phase}</h4>
                <p>{step.goal}</p>
              </div>
            ))}
          </div>

          {/* Courses */}
          <div className="card">
            <h3>📚 Courses</h3>
            {result.courses?.map((c, i) => (
              <p key={i}>
                <a href={c.link} target="_blank" rel="noreferrer">
                  {c.course}
                </a>
              </p>
            ))}
          </div>

          {/* Projects */}
          <div className="card">
            <h3>💡 Projects</h3>
            {result.projects?.map((p, i) => (
              <p key={i}>{p.project}</p>
            ))}
          </div>

          {/* Career Path */}
          <div className="card">
            <h3>🧭 Career Path</h3>
            <div className="tags">
              {result.career_path?.path?.map((p, i) => (
                <span key={i}>{p}</span>
              ))}
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

export default ResumePage;