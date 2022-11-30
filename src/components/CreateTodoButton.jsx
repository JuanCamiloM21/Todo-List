import React from 'react';
import '../styles/CreateTodoButton.css';

function CreateTodoButton({ setOpenModal }) {
  const onClicButton = () => setOpenModal((prevState) => !prevState);
  return (
    <button
      className='CreateTodoButton'
      onClick={() => onClicButton('Aqui se deberia abrir el modal')}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
