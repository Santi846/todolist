import React from "react";
import './styles/task.css';
import { AiOutlineBorder} from "react-icons/ai";
// import { AiOutlineCheckSquare} from "react-icons/ai";




export function Task({ id, text, complete, completeTask, deleteTask}) {

    // if (complete) {
    //     return (
    //         <div className= 'task_container complete'>
    //             <div className="task_text" 
    //             onClick={() => {completeTask(id)}}
    //             >
    //             {text}
    //             </div>
    //             <div className="task_icons_container" 
    //             onClick={() => {deleteTask(id)}}
    //             >
    //             <AiOutlineCheckSquare className="task_icon_check_on"></AiOutlineCheckSquare>           
    //             </div>
    //         </div>
    //     );
    // }
    // return (
    //     <div className= 'task_container'>
    //         <div className="task_text">
    //             {text}
    //         </div>
    //         <div className="task_icons_container">
    //         <AiOutlineBorder className="task_icon_check_off"></AiOutlineBorder>           
    //         </div>
    //     </div>
    // );

    return (
        <div className={complete ? 'task_container complete' : 'task_container'}>
          <div 
            className='task_text'
            onClick={() => completeTask(id)}>
            {text}
          </div>
          <div 
            className='tarea-contenedor-iconos'
            onClick={() => deleteTask(id)}>
            <AiOutlineBorder className='tarea-icono' />
          </div>
        </div>
      );    
}