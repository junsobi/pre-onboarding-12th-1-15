import React from 'react';
import DisplayTodoItem from './DisplayTodoItem';
import EditingTodoItem from './EditingTodoItem';

const TodoItem = ({ todo, isEditing, startEditing, stopEditing }) => {
  const toggleEditing = () => {
    if (isEditing) {
      stopEditing();
    } else {
      startEditing();
    }
  };

  return (
    <li>
      {isEditing ? (
        <EditingTodoItem todo={todo} toggleEditing={toggleEditing} />
      ) : (
        <DisplayTodoItem todo={todo} toggleEditing={toggleEditing} />
      )}
    </li>
  );
};

export default TodoItem;
