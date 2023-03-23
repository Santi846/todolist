import React, {useState} from "react";
import './styles/task.css';
// import { AiOutlineBorder} from "react-icons/ai";
// import { AiOutlineCheckSquare} from "react-icons/ai";
import { AiOutlineRest, AiOutlineOrderedList} from "react-icons/ai";
import { Modal } from "./modal";

export function Task({ id, text, complete, completeTask, deleteTask}) {

    const [show, setShowing] = useState(false);

    const showModal = () => {
        setShowing(true);
    }

    const hideModal = () => {
        setShowing(false);
    }

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
          <div className="task_container_icons">
            <AiOutlineOrderedList className='task_icon' type="button" onClick={showModal}>Open</AiOutlineOrderedList>
          </div>
          <Modal show={show} handleClose={hideModal} text={text}></Modal>
        </div>
      );    
}