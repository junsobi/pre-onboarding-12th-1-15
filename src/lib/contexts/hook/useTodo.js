import { useContext } from 'react';
import { TodoContext } from '../TodoContext';

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('TodoProvider로 감싸진 곳에서 사용가능합니다.');
  }
  return context;
};
