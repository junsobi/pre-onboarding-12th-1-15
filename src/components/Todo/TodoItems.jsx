import React, { useState } from 'react';
import { useTodo } from '../../lib/contexts/hook/useTodo';
import TodoItem from './TodoItem';

const TodoItems = () => {
  const { todos } = useTodo();
  const [editingTodoId, setEditingTodoId] = useState(null); // 현재 수정 중인 todo의 ID를 관리하는 상태

  return (
    <ul className="flex flex-col w-full h-full max-h-80 mt-1 p-4 border border-blue-900 rounded overflow-y-auto">
      {todos.map(todo => (
        <React.Fragment key={todo.id}>
          <TodoItem
            todo={todo}
            isEditing={todo.id === editingTodoId} // 해당 todo가 수정 중인지 판단
            startEditing={() => setEditingTodoId(todo.id)} // 수정을 시작
            stopEditing={() => setEditingTodoId(null)} // 수정을 중지
          />
        </React.Fragment>
      ))}
    </ul>
  );
};

export default TodoItems;
