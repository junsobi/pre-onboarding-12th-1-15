import React, { createContext, useState, useCallback } from 'react';

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback(todo => {
    // 일단은 id로 현재 시간을 사용합니다.
    const newTodo = {
      id: new Date().getTime(),
      todo,
      isCompleted: false,
    };
    setTodos(prev => [...prev, newTodo]);
  }, []);

  const editTodo = useCallback((id, todo, isCompleted) => {
    setTodos(prev => prev.map(t => (t.id === id ? { id, todo, isCompleted } : t)));
  }, []);

  const removeTodo = useCallback(id => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  return (
    <TodoContext.Provider value={{ todos, setTodos, addTodo, editTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;

// // 통신이 붙으면 활성화
// import React, { createContext, useState, useEffect, useCallback } from 'react';
// import { createTodo, updateTodo, deleteTodo, getTodos } from '../services/todoAPI';

// export const TodoContext = createContext();

// const TodoProvider = ({ children }) => {
//   const [todos, setTodos] = useState([]);

//   const fetchTodos = async () => {
//     try {
//       const response = await getTodos();
//       setTodos(response.data);
//     } catch (error) {
//       console.error('Error fetching todos:', error);
//     }
//   };

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   const addTodo = useCallback(async todo => {
//     try {
//       await createTodo(todo);
//       fetchTodos();
//     } catch (error) {
//       console.error('Error adding todo:', error);
//     }
//   }, [fetchTodos]);

//   const editTodo = useCallback(async (id, todo, isCompleted) => {
//     try {
//       await updateTodo(id, todo, isCompleted);
//       fetchTodos();
//     } catch (error) {
//       console.error('Error editing todo:', error);
//     }
//   }, [fetchTodos]);

//   const removeTodo = useCallback(async id => {
//     try {
//       await deleteTodo(id);
//       fetchTodos();
//     } catch (error) {
//       console.error('Error removing todo:', error);
//     }
//   }, [fetchTodos]);

//   return (
//     <TodoContext.Provider value={{ todos, setTodos, addTodo, editTodo, removeTodo }}>
//       {children}
//     </TodoContext.Provider>
//   );
// };

// export default TodoProvider;
