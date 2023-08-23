import React, { useState } from 'react';
import { useTodo } from '../../lib/contexts/hook/useTodo';

const TodoForm = () => {
  const [newTodo, setNewTodo] = useState('');
  const { addTodo } = useTodo();

  const handleSubmit = async event => {
    event.preventDefault();
    if (newTodo.trim()) {
      await addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          placeholder="해야할일..."
          data-testid="new-todo-input"
        />
      </div>
      <div>
        <button type="submit" data-testid="new-todo-add-button">
          추가
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
