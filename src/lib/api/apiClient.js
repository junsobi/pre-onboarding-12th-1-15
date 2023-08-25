import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://www.pre-onboarding-selection-task.shop',
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(config => {
  const authToken = localStorage.getItem('access_token');
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('access_token');
      window.location.reload(); // 웹 페이지를 강제로 새로고침
    }
    return Promise.reject(error);
  },
);

export default apiClient;
