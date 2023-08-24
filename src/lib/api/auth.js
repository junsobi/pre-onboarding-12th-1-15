import apiClient from './apiClient';

export const signUp = async (email, password) => {
  try {
    const response = await apiClient.post('/auth/signup', { email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const signIn = async (email, password) => {
  try {
    const response = await apiClient.post('/auth/signin', { email, password });
    localStorage.setItem('access_token', response.data.access_token);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
