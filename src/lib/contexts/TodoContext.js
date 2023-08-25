import React, { createContext, useState, useEffect, useCallback } from 'react';
import { createTodo, updateTodo, deleteTodo, getTodos } from '../api/todo';

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const hasToken = () => !!localStorage.getItem('access_token');

  const fetchTodos = async () => {
    if (!hasToken()) return;

    try {
      const response = await getTodos();
      setTodos(response);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = useCallback(
    async todo => {
      try {
        await createTodo(todo);
        fetchTodos();
      } catch (error) {
        console.error('Error adding todo:', error);
      }
    },
    [fetchTodos],
  );

  const editTodo = useCallback(
    async (id, todo, isCompleted) => {
      try {
        await updateTodo(id, todo, isCompleted);
        fetchTodos();
      } catch (error) {
        console.error('Error editing todo:', error);
      }
    },
    [fetchTodos],
  );

  const removeTodo = useCallback(
    async id => {
      try {
        await deleteTodo(id);
        fetchTodos();
      } catch (error) {
        console.error('Error removing todo:', error);
      }
    },
    [fetchTodos],
  );

  return (
    <TodoContext.Provider value={{ todos, setTodos, addTodo, editTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
