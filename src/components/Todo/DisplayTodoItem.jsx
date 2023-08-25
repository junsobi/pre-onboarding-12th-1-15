import React from 'react';
import { useTodo } from '../../lib/contexts/hook/useTodo';
import Button from '../Buttons/Button';
import CheckboxInput from '../Input/CheckboxInput';

const DisplayTodoItem = ({ todo, toggleEditing }) => {
  const { editTodo, removeTodo } = useTodo();

  return (
    <div className="w-full flex gap-4 justify-between items-center ">
      <div className="w-4/5 flex justify-start items-center gap-4">
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
      <div className="w-1/5 flex gap-2">
        <Button
          onClick={toggleEditing}
          dataTestId="modify-button"
          text={'수정'}
          variant="returnButton"
          size="small"
          className="h-8 py-4"
        />
        <Button
          onClick={() => removeTodo(todo.id)}
          dataTestId="delete-button"
          text={'삭제'}
          variant="returnButton"
          size="small"
          className="h-8 py-4"
        />
      </div>
    </div>
  );
};

export default DisplayTodoItem;
