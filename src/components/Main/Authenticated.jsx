import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTodo } from '../../lib/contexts/hook/useTodo';

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
      <button
        onClick={() => navigate('/todo')}
        className="w-full border border-blue-700 text-blue-700 py-2 px-4 rounded hover:bg-yellow-200"
      >
        할 일 목록 보기
      </button>
    </div>
  );
};

export default Authenticated;
