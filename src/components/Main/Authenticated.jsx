import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTodo } from '../../lib/contexts/hook/useTodo';
import Button from '../Button';

const Authenticated = () => {
  const navigate = useNavigate();
  const { todos } = useTodo();
  const incompleteTodosCount = todos.filter(todo => !todo.isCompleted).length;

  return (
    <div className="text-center">
      <div className="mb-4">
        <p>
          해야 할 일이 <span className="text-red-600">{incompleteTodosCount}</span>개 있습니다.
        </p>
      </div>
      <Button
        onClick={() => navigate('/todo')}
        variant="mainstyle"
        size="medium"
        text="할일 목록 보기"
      />
    </div>
  );
};

export default Authenticated;
