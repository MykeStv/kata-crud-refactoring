import React from 'react'
import TodoList from './components/TodoList';
import { ContextProvider } from './providers/ContextProvider';

function App() {


  return (
    <div className="App">
      <ContextProvider>

        <TodoList />

      </ContextProvider>     
    </div>
  );
}

export default App;
