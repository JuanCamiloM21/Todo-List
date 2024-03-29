import React from 'react';
import { useContext } from 'react';
import '../styles/TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
  const { totalTodos, completedTodos } = useContext(TodoContext);

  return (
    <h2 className='TodoCounter'>
      Has completado {completedTodos} de {totalTodos} TODOS
    </h2>
  );
}

export { TodoCounter };
