import './App.css';
import { Task } from './components/task.jsx';

function App() {
  return (
    <div className="App">
      <h1 className='title'>Tareas para hacer</h1>
      <div className='todo_list'>
      <h1 className='mini_title'>Mis tareas</h1>
      <Task text='Aprender Recat'></Task>
      </div>
    </div>
  );
}

export default App;
