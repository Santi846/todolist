// import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";
import React, {useState} from "react";
import './styles/taskList.css';
import { TaskForm } from "./taskForm";
import { Task } from "./task";

export function TaskList () {

    const [tasks,setTask] = useState([]);

    const addTask = task => {
        if (task.text.trim()) {
            task.text = text.task.trim();
            const updatedTasks = [task,...tasks];
            setTask(updatedTasks);
        }
    }

    return (
        <>
            <TaskForm onSubmit={addTask}></TaskForm>
            <div className="task_list_container">
                {
                    tasks.map((task) => 
                    <Task 
                    key={task.id}
                    id={task.id}
                    text={task.text}
                    ></Task>
                    )
                }
            </div>
        </>
    );
}