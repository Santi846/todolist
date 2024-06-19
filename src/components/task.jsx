import React from "react";
import './styles/task.css';
import { AiOutlineRest} from "react-icons/ai";





export function Task({ id, text, complete, completeTask, deleteTask}) {


    return (
        <div className={complete ? 'task_container_complete' : 'task_container'}>
          <div 
            className='task_text'
            onClick={() => completeTask(id)}>
            {text}
          </div>
          <div 
            className='task_container_icons'
            onClick={() => deleteTask(id)}>
            <AiOutlineRest className='task_icon'></AiOutlineRest> 
          </div>
        </div>
      );    
}