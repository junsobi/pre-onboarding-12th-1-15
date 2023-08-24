import apiClient from './apiClient';

export const getTodos = async () => {
  try {
    const response = await apiClient.get('/todos');
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const createTodo = async todo => {
  try {
    const response = await apiClient.post('/todos', { todo });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateTodo = async (id, todo, isCompleted) => {
  try {
    const response = await apiClient.put(`/todos/${id}`, { todo, isCompleted });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteTodo = async id => {
  try {
    const response = await apiClient.delete(`/todos/${id}`);
    if (response.status === 204) return;
  } catch (error) {
    throw new Error(error.message);
  }
};
