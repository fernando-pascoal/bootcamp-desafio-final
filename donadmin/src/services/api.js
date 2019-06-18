import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:3333",
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
});

api.interceptors.request.use(async config => {
  const token = await sessionStorage.getItem("@app:token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
