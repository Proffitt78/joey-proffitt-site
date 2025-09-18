// src/plugins/axios.ts
import axios from "axios";

const api = axios.create({
//   baseURL: "https://localhost:7214/api", // adjust to your API base URL
  baseURL: "/api", // adjust to your API base URL
});

export default api;
