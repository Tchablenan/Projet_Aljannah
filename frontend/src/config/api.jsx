// Pour Vite, utilisez import.meta.env au lieu de process.env
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

console.log('Environment:', import.meta.env.MODE);
console.log('API URL:', API_BASE_URL);


export const apiConfig = {
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
};

export default API_BASE_URL;