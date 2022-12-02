import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

function App() {
  return (
    <React.Fragment>
      <TodoProvider>
        <AppUI />
      </TodoProvider>
    </React.Fragment>
  );
}

export default App;
