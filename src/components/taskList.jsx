// import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";
import React, {useState} from "react";
import './styles/taskList.css';
import { TaskForm } from "./taskForm";
import { Task } from "./task";

export function TaskList (text) {

    const [tasks, setTask] = useState([]);

    const addTask = task => {
        if (text) {
            task.text = text.task.trim();

            const updatedTasks = [task,...tasks];

            setTask(updatedTasks);
        }

        // if (task.text.trim()) {
        //     task.text = text.task.trim();

        //     const updatedTasks = [task,...tasks];

        //     setTask(updatedTasks);
        // }
    }

    const deleteTask = id => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTask(updatedTasks);
    }
    
    const completeTask = id => {
        const updatedTasks = tasks.map( task => {

            if (task.id === id) {
              task.complete = !task.complete;  
            }
            return task;
        });

        setTask(updatedTasks);
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
                    complete={task.complete}
                    completeTask={completeTask}
                    deleteTask={deleteTask}
                    ></Task>
                    )
                }
            </div>
        </>
    );
}