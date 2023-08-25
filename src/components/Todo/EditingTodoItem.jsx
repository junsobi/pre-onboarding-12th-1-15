import React, { useState, useRef, useEffect } from 'react';
import { useTodo } from '../../lib/contexts/hook/useTodo';
import Button from '../Buttons/Button';
import CheckboxInput from '../Input/CheckboxInput';

const EditingTodoItem = ({ todo, toggleEditing }) => {
  const [editingValue, setEditingValue] = useState(todo.todo);
  const { editTodo } = useTodo();

  const inputRef = useRef(null); // input에 대한 참조 생성

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); // 수정 모드로 전환될 때 input에 포커스
    }
  }, []); // 빈 dependency array를 사용하여 컴포넌트가 mount될 때만 실행

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
    <form
      onSubmit={handleSubmit}
      className="w-full flex gap-4 justify-between items-center py-2 hover:bg-gray-100"
    >
      <div className="w-4/5 flex justify-start items-center gap-2">
        <CheckboxInput checked={todo.isCompleted} readOnly />
        <input
          data-testid="modify-input"
          ref={inputRef}
          type="text"
          value={editingValue}
          onChange={handleEditChange}
          onKeyDown={handleEscapeKeyDown}
          className="w-10/12 h-8 px-2 text-blue-600 rounded border border-blue-600 focus:ring-1 focus:ring-blue-600 focus:ring-inset focus:border-transparent"
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
