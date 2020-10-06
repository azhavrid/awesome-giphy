import axios, { AxiosRequestConfig } from 'axios';

// In production has to be stored in .env
const API_KEY = 'Dbv9Yfrpv1hjzw7uIr5322rEDJxaa9hL';

const axiosParams: AxiosRequestConfig = {
  baseURL: 'https://api.giphy.com/v1/',
  timeout: 60000,
};

export const apiInstance = axios.create(axiosParams);

apiInstance.interceptors.request.use((requestConfig: AxiosRequestConfig) => {
  requestConfig.params = { ...requestConfig.params, api_key: API_KEY };
  return requestConfig;
});
