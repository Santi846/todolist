import React from "react";
import './styles/task.css';


export function Task ({text}) {
    return (
        <div className="task_container">
            <div className="task_text">
                {text}
            </div>
            <div className="task_icon">
                Eliminar
            </div>
        </div>
    );
}