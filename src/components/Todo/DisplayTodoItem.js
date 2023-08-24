import React from 'react';
import { useTodo } from '../../lib/contexts/hook/useTodo';
import Button from '../Button';
import CheckboxInput from '../Input/CheckboxInput';

const DisplayTodoItem = ({ todo, toggleEditing }) => {
  const { editTodo, removeTodo } = useTodo();

  return (
    <div>
      <div>
        <CheckboxInput
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
        <Button onClick={toggleEditing} dataTestId="modify-button" text={'수정'} />
        <Button onClick={() => removeTodo(todo.id)} dataTestId="delete-button" text={'삭제'} />
      </div>
    </div>
  );
};

export default DisplayTodoItem;
