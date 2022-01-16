import axios, { AxiosRequestConfig } from 'axios';

const axiosConfiguration: AxiosRequestConfig = {
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json"
  }
};

const api = axios.create(axiosConfiguration);
api.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default api;