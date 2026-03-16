import React, { useState } from "react";
import "./App.css";

function App() {

  const [resumePath, setResumePath] = useState("");
  const [result, setResult] = useState(null);

  const analyzeResume = async () => {

    if (!resumePath) {
      alert("Please enter resume path");
      return;
    }

    try {

      const response = await fetch(
        `http://127.0.0.1:8000/analyze_resume/?file_path=${resumePath}`,
        { method: "POST" }
      );

      const data = await response.json();
      setResult(data);

    } catch (error) {

      console.error(error);
      alert("Error analyzing resume");

    }

  };

  return (
    <div className="container">

      <h1 className="title">AI Career Roadmap Assistant</h1>

      <div className="input-section">

        <input
          type="text"
          placeholder="Enter Resume Path (example: backend/John Doe.pdf)"
          value={resumePath}
          onChange={(e) => setResumePath(e.target.value)}
        />

        <button onClick={analyzeResume}>Analyze Resume</button>

      </div>

      {result && (

        <div className="result-container">

          <div className="card">

            <h2>Recommended Career</h2>
            <p>{result.recommended_career}</p>

          </div>

          <div className="card">

            <h2>Match Score</h2>
            <p>{result.match_score}%</p>

          </div>

          <div className="card">

            <h2>Detected Skills</h2>

            <ul>
              {result.detected_skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>

          </div>

          <div className="card">

            <h2>Missing Skills</h2>

            <ul>
              {result.missing_skills.slice(0,10).map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>

          </div>

          <div className="card">

            <h2>Career Roadmap</h2>

            <ul>
              {result.roadmap.slice(0,6).map((step, index) => (
                <li key={index}>
                  <b>{step.phase}</b> — {step.goal}
                </li>
              ))}
            </ul>

          </div>

        </div>

      )}

    </div>
  );

}

export default App;