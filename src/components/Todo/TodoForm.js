import React, { useState } from 'react';
import { useTodo } from '../../lib/contexts/hook/useTodo';
import Button from '../Button';

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
    <form onSubmit={handleSubmit} className="w-full flex justify-between items-center my-4 px-4">
      <input
        type="text"
        value={newTodo}
        placeholder="새로운 Todo"
        onChange={e => setNewTodo(e.target.value)}
        data-testid="new-todo-input"
        className="w-10/12 h-8 px-5 text-blue-600 rounded m-1 border border-blue-600 focus:ring-1 focus:ring-blue-600 focus:ring-inset focus:border-transparent"
      />

      <div className="w-auto">
        <Button
          type="submit"
          dataTestId="new-todo-add-button"
          text={'추가'}
          variant="returnButton"
          size="small"
          className="h-8 py-4 mr-2"
        />
      </div>
    </form>
  );
};

export default TodoForm;
