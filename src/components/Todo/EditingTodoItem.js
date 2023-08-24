import React, { useState } from 'react';
import { useTodo } from '../../lib/contexts/hook/useTodo';

const EditingTodoItem = ({ todo, toggleEditing }) => {
  const [editingValue, setEditingValue] = useState(todo.todo);
  const { editTodo } = useTodo();

  const handleEditChange = e => {
    setEditingValue(e.target.value);
  };

  const handleEscapeKeyDown = e => {
    if (e.key === 'Escape') {
      toggleEditing();
    }
  };

  const handleSubmit = e => {
    e.preventDefault(); // 기본 폼 제출 동작 방지
    if (editingValue.trim()) {
      editTodo(todo.id, editingValue, todo.isCompleted);
      toggleEditing();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="checkbox" checked={todo.isCompleted} readOnly />
        <input
          type="text"
          value={editingValue}
          onChange={handleEditChange}
          onKeyDown={handleEscapeKeyDown}
        />
      </div>
      <div>
        <button type="submit" data-testid="submit-button">
          제출
        </button>
        <button type="button" data-testid="cancel-button" onClick={toggleEditing}>
          취소
        </button>
      </div>
    </form>
  );
};

export default EditingTodoItem;
