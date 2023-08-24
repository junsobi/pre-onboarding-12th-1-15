import React, { useState } from 'react';
import { useTodo } from '../../lib/contexts/hook/useTodo';
import Input from '../Input/Input';
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
    <form onSubmit={handleSubmit}>
      <div>
        <Input
          type="text"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          placeholder="해야할일..."
          dataTestId="new-todo-input"
          size="medium"
        />
      </div>
      <div>
        <Button type="submit" dataTestId="new-todo-add-button" text={'추가'} />
      </div>
    </form>
  );
};

export default TodoForm;
