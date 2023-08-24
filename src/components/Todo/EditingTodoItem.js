import React, { useState } from 'react';
import { useTodo } from '../../lib/contexts/hook/useTodo';
import Button from '../Button';
import CheckboxInput from '../Input/CheckboxInput';

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
    <form onSubmit={handleSubmit} className="w-full flex gap-4 justify-between items-center">
      <div className="w-4/5 flex justify-start items-center gap-4">
        <CheckboxInput checked={todo.isCompleted} readOnly />
        <input
          type="text"
          value={editingValue}
          onChange={handleEditChange}
          onKeyDown={handleEscapeKeyDown}
          className="w- h-8 px-5 text-blue-600 rounded m-1 border border-blue-600 focus:ring-1 focus:ring-blue-600 focus:ring-inset focus:border-transparent"
        />
      </div>
      <div className="w-1/5 flex gap-2">
        <Button
          type="submit"
          dataTestId="submit-button"
          text={'제출'}
          variant="returnButton"
          size="small"
          className="h-8 py-4"
        />
        <Button
          type="button"
          dataTestId="cancel-button"
          onClick={toggleEditing}
          text={'취소'}
          variant="returnButton"
          size="small"
          className="h-8 py-4"
        />
      </div>
    </form>
  );
};

export default EditingTodoItem;
