import React from 'react';
import { TaskList } from './features/taskList/TaskList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TaskList />
      </header>
    </div>
  );
}

export default App;
