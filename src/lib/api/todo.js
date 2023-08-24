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
    await apiClient.post('/todos', { todo });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateTodo = async (id, todo, isCompleted) => {
  try {
    await apiClient.put(`/todos/${id}`, { todo, isCompleted });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteTodo = async id => {
  try {
    await apiClient.delete(`/todos/${id}`);
  } catch (error) {
    throw new Error(error.message);
  }
};
