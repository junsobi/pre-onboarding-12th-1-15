import React from 'react';
import TodoForm from '../components/Todo/TodoForm';
import TodoProvider from '../lib/contexts/TodoContext';
import TodoItems from '../components/Todo/TodoItems';

function Todo() {
  return (
    <TodoProvider>
      {/* TODO 입력 부분 */}
      <TodoForm />

      {/* TODO 리스트 출력 부분 */}
      <TodoItems />
    </TodoProvider>
  );
}

export default Todo;
