import axios from "axios";

const ACCESS_TOKEN = "access";
const REFRESH_TOKEN = "refresh";


const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

async function getToken() {
  try {
    if (localStorage.getItem(ACCESS_TOKEN) && localStorage.getItem(REFRESH_TOKEN)) {
      console.log("Token already exists in localStorage.");
      return;
    }
    const res = await api.get("/api/token/knownorigin/");
    localStorage.setItem(ACCESS_TOKEN, res.data.access);
    localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
    console.log("Token fetched and stored.");
  } catch (error) {
    console.error("Failed to fetch token:", error);
  }
}

await getToken();
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log("Token added to request headers.");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
console.log("added interceptor");
export {api, getToken};
