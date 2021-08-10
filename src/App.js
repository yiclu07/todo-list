import React from 'react';
import { TaskList } from './features/taskList/TaskList';
import CompletionTracker from './components/completionTracker/CompletionTracker';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CompletionTracker />
        <TaskList />
      </header>
    </div>
  );
}

export default App;
