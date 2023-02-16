import React from "react";
import './styles/task.css';
import { AiOutlineBorder, AiOutlineCheckSquare } from "react-icons/ai";



export function Task ({task_id,text, complete, setState, completeTask, deleteTask}) {

    if (complete) {
        return (
            <div className= 'task_container complete'>
                <div className="task_text" 
                onClick={() => {completeTask(task_id)}}
                >
                {text}
                </div>
                <div className="task_icons_container" 
                onClick={() => {deleteTask(task_id)}}
                >
                <AiOutlineCheckSquare className="task_icon_check_on"></AiOutlineCheckSquare>           
                </div>
            </div>
        );
    }
    return (
        <div className= 'task_container'>
            <div className="task_text">
                {text}
            </div>
            <div className="task_icons_container">
            <AiOutlineBorder className="task_icon_check_off"></AiOutlineBorder>           
            </div>
        </div>
    );
}