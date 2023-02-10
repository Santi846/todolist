import { useState } from 'react';
import './App.css';
import { Task } from './components/task.jsx';

function App() {

  const [isComplete, setCompletement] = useState(false);

  const setState = () => {
    setCompletement(true);
  }
  return (
    <div className="App">
      <h1 className='title'>Tareas para hacer</h1>
      <div className='todo_list'>
      <h1 className='mini_title'>Mis tareas</h1>
      <Task text='Aprender React'complete={setState}></Task>
      </div>
    </div>
  );
}

export default App;
