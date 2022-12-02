import React from 'react';
import { useContext } from 'react';
import '../styles/TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  const onSearchValueChange = (e) => setSearchValue(e.target.value);
  return (
    <input
      className='TodoSearch'
      placeholder='Aqui tu TODO'
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
