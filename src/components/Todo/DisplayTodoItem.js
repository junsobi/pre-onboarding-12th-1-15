import React from 'react';
import { useTodo } from '../../lib/contexts/hook/useTodo';

const DisplayTodoItem = ({ todo, toggleEditing }) => {
  const { editTodo, removeTodo } = useTodo();

  return (
    <div>
      <div>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => editTodo(todo.id, todo.todo, !todo.isCompleted)}
        />
        <span
          style={
            todo.isCompleted
              ? { textDecoration: 'line-through', color: 'gray' }
              : { color: 'black', cursor: 'pointer' }
          }
          onClick={toggleEditing}
        >
          {todo.todo}
        </span>
      </div>
      <div>
        <button onClick={toggleEditing} data-testid="modify-button">
          수정
        </button>
        <button onClick={() => removeTodo(todo.id)} data-testid="delete-button">
          삭제
        </button>
      </div>
    </div>
  );
};

export default DisplayTodoItem;
