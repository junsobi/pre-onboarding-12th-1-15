import React, { useState } from 'react';
import { useTodo } from '../../lib/contexts/hook/useTodo';
import Input from '../Input/Input';
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
    <form onSubmit={handleSubmit}>
      <div>
        <CheckboxInput checked={todo.isCompleted} readOnly />
        <Input
          type="text"
          value={editingValue}
          onChange={handleEditChange}
          onKeyDown={handleEscapeKeyDown}
          size="medium"
        />
      </div>
      <div>
        <Button type="submit" dataTestId="submit-button" text={'제출'} />
        <Button type="button" dataTestId="cancel-button" onClick={toggleEditing} text={'취소'} />
      </div>
    </form>
  );
};

export default EditingTodoItem;
