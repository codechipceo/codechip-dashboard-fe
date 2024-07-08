import axios from "axios";

const devUrl = "http://localhost:5000/api";
export const axiosInstance = axios.create({
  baseURL: devUrl,
});
