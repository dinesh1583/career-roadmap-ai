import React, { useState } from "react";

function ResumePage() {
  const [filePath, setFilePath] = useState("");
  const [result, setResult] = useState(null);

  const handleAnalyze = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/analyze_resume/?file_path=${filePath}`,
        {
          method: "POST",
        }
      );

      const data = await response.json();
      setResult(data);

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Upload Resume 📄</h2>

      <input
        type="text"
        placeholder="Enter file path (e.g., backend/John Doe.pdf)"
        value={filePath}
        onChange={(e) => setFilePath(e.target.value)}
        style={{ padding: "10px", width: "300px" }}
      />

      <br /><br />

      <button onClick={handleAnalyze}>
        Analyze Resume
      </button>

      <br /><br />

      {result && (
        <div>
          <h3>Results:</h3>

          <p><b>Career:</b> {result.recommended_career}</p>
          <p><b>Match Score:</b> {result.match_score}</p>

          <p><b>Skills:</b> {result.detected_skills?.join(", ")}</p>

          <p><b>Missing Skills:</b> {result.missing_skills?.join(", ")}</p>
        </div>
      )}
    </div>
  );
}

export default ResumePage;