// Pour Vite, utilisez import.meta.env au lieu de process.env
const API_BASE_URL =
  import.meta.env.API_BASE_URL || "http://localhost:8000/api";

export default API_BASE_URL;
