import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';
// import { TodoCounter } from '../src/components/TodoCounter';
// import { TodoSearch } from '../src/components/TodoSearch';
// import { TodoList } from '../src/components/TodoList';
// import { TodoItem } from '../src/components/TodoItem';
// import { CreateTodoButton } from '../src/components/CreateTodoButton';
// import { useEffect } from 'react';
// import './App.css';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el cursso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: true },
//   { text: 'LALALALAA', completed: false },
// ];

function App() {
  // useEffect(() => {}, [totalTodos]);

  return (
    <React.Fragment>
      <TodoProvider>
        <AppUI />
      </TodoProvider>
    </React.Fragment>
  );
}

export default App;
