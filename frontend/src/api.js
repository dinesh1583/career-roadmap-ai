import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

export const analyzeResume = (filePath) => {
  return API.post(`/analyze_resume/?file_path=${filePath}`);
};