import './App.css';
import { TaskList } from './components/taskList';

function App() {

  

  return (
    <div className="App">
      <h1 className='title'>Tareas para hacer</h1>
      <div className='todo_list'>
      <h1 className='mini_title'>Mis tareas</h1>
      {/* <TaskForm></TaskForm> */}
      {/* <Task text='Aprender React'complete={setState}></Task> */}
      <TaskList></TaskList>
      </div>
    </div>
  );
}

export default App;
