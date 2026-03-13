import React, { useState } from "react";

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
        {
          method: "POST"
        }
      );

      const data = await response.json();

      setResult(data);

    } catch (error) {

      console.error("Error analyzing resume:", error);
      alert("Error analyzing resume");

    }

  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>

      <h1>AI Career Roadmap Assistant</h1>

      <input
        type="text"
        placeholder="Enter Resume Path (example: backend/John Doe.pdf)"
        value={resumePath}
        onChange={(e) => setResumePath(e.target.value)}
        style={{ width: "400px", padding: "10px" }}
      />

      <button
        onClick={analyzeResume}
        style={{ marginLeft: "10px", padding: "10px 20px" }}
      >
        Analyze Resume
      </button>

      {result && (

        <div style={{ marginTop: "30px" }}>

          <h2>Analysis Result</h2>

          <p><b>Recommended Career:</b> {result.recommended_career}</p>
          <p><b>Match Score:</b> {result.match_score}%</p>

          <h3>Detected Skills</h3>
          <ul>
            {result.detected_skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>

          <h3>Missing Skills</h3>
          <ul>
            {result.missing_skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>

          <h3>Roadmap</h3>
          <ul>
            {result.roadmap.map((step, index) => (
              <li key={index}>
                <b>{step.phase}</b> - {step.goal}
              </li>
            ))}
          </ul>

        </div>

      )}

    </div>
  );

}

export default App;