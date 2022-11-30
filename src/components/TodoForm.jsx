import React, { useContext } from 'react';
import { useState } from 'react';
import { TodoContext } from '../TodoContext';
import '../styles/TodoForm.css';

const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = useState('');
  const { addTodo, setOpenModal } = useContext(TodoContext);

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor=''>Escribe tu nuevo TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder='Crea tu primer todo'
      />
      <div className='TodoForm-buttonContainer'>
        <button
          type='button'
          onClick={onCancel}
          className='TodoForm-button TodoForm-button--cancel'
        >
          Cancelar
        </button>
        <button type='submit' className='TodoForm-button TodoForm-button--add'>
          Añadir
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
