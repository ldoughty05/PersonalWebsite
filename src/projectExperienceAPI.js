import axios from "axios";

const ACCESS_TOKEN = "access";
const REFRESH_TOKEN = "refresh";


const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

async function getToken() {
  try {
    const res = await api.get("/api/token/knownorigin/");
    localStorage.setItem(ACCESS_TOKEN, res.data.access);
    localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
  } catch (error) {
    console.error("Failed to fetch token:", error);
  }
}

getToken();
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default api;