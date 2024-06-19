import React, {useState} from "react";
import './styles/taskForm.css';
import {v4 as uuidv4} from 'uuid';

export function TaskForm (props ) {

    const [input, setInput] = useState('');

    const manageChange = e => {
        //calling enter value as parameter
        setInput(e.target.value); 
    }

    const manageSend = e => {
        //getting out default value
        e.preventDefault();

        const newTask = {
            id: uuidv4(),
            text: input,
            complete: false
        }
        //TODO: save state in local storaage for saving when updating the page
        props.onSubmit(newTask);

        setInput('');
           
    }
    

    return (
        <form className="task-form" onSubmit={manageSend}>
            <input className="task_input" type="text" placeholder="New Task" name="text" onChange={manageChange} value={input}></input>
            <button className="add_task_button">Add Task</button>
        </form>

    );
};