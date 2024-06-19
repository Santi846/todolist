import './App.css';
import { TaskList } from './components/taskList';

function App() {
  
  return (
    <div className="App">
      <h1 className='title'>To Do</h1>
      <div className='todo_list'>
      <h1 className='mini_title'>Tasks</h1>
      <TaskList></TaskList>
      </div>
    </div>
  );
}

export default App;
