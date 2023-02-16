import React, {useState} from "react";
import './styles/taskForm.css'
import {v4 as uuidv4} from 'uuid';

export function TaskForm (props ) {

    const [input, setInput] = useState('');

    const manageChange = e => {
        setInput(e.target.value);
        console.log(e.target.value);
    }

    const manageSend = e => {
        e.preventDefault();
        console.log('Enviando formulario');
        const newTask = {
            id: uuidv4(),
            text:input,
            complete:false
        }
        props.onSubmit(newTask);
    }

    return (
        <form className="task-form" onSubmit={manageSend}>
            <input className="task_input" type="text" placeholder="Nueva Tarea" name="text" onChange={manageChange}></input>
            <button className="add_task_button">Agregar tarea</button>
        </form>

    );
};