import React from "react";
import './styles/task.css';
import { AiOutlineBorder, AiOutlineCheckSquare } from "react-icons/ai";



export function Task ({text}) {
    return (
        <div className="task_container">
            <div className="task_text">
                {text}
            </div>
            <div className="task_icon">
            <AiOutlineBorder></AiOutlineBorder>           
            </div>
        </div>
    );
}