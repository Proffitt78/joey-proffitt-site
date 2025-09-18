// src/plugins/axios.ts
import axios from "axios";

const api = axios.create({
//   baseURL: "https://localhost:7214/api", // adjust to your API base URL
  baseURL: "https://joey-proffitt-portfolio-gvbzc7btfkcpeccm.westus2-01.azurewebsites.net/api", // adjust to your API base URL
});

export default api;
