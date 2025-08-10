import axios from "axios";

const ACCESS_TOKEN = "access";
const REFRESH_TOKEN = "refresh";


const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

const authenticatedApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL
  // put access token in interceptor to guarentee we pass the newest one.
});

authenticatedApi.interceptors.request.use((config) => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

async function getToken() {
  try {
    const res = await api.get("/api/token/knownorigin/");
    localStorage.setItem(ACCESS_TOKEN, res.data.access);
    localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
  } catch (error) {
    console.error("Failed to fetch token:", error);
    throw error;
  }
}

authenticatedApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem(REFRESH_TOKEN);
      if (refreshToken) {
        // Try refreshing the access token
        console.log("Refreshing access token...");
        try {
          const res = await api.post(
            "/api/token/refresh/",
            { refresh: refreshToken }
          ); // this doesnt call from api to avoid this interceptor picking up the failed request.
          const newAccessToken = res.data.access;
          localStorage.setItem(ACCESS_TOKEN, newAccessToken);
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return authenticatedApi(originalRequest);
        } catch (refreshError) {
          console.warn("Refresh token expired or invalid. Fetching new token pair...");
        }
      } else {
        console.warn("No refresh token found. Fetching new token pair...");
      }

      // Either no refresh token or refresh failed. get a full new pair
      console.log("Fetching new token pair...");
      await getToken();
      originalRequest.headers.Authorization = `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`;
      return authenticatedApi(originalRequest);
    }
    return Promise.reject(error);
  }
);

export {api, authenticatedApi, getToken};
