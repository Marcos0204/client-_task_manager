import React, { useContext } from 'react';
import TaskContext from '../../context/task/taskContext';
import ProjectContext from '../../context/proyectos/ProjectContext';

const Task = ({task}) => {
    const taskContext = useContext(TaskContext);
    const { deleteTask, getTask, changeTaskStatus } = taskContext;

    const proyectosContext = useContext(ProjectContext);
    const { project } = proyectosContext;

    const [projectActual] = project

    const DELETE_TASK = (id) =>{
        deleteTask(id)
        getTask(projectActual.id)
    }

    const changeStatus = task =>{

        if(task.state){
            task.state = false
        } else{
            task.state = true
        }
        changeTaskStatus(task)
    }
    return (
        <li className='tarea sombra'>
            {task.name}
            <div className="estado">
                {task.state
                    ? (
                        <button
                            type='button'
                            className='completo'
                            onClick= {()=>changeStatus(task)}
                        >
                            completo
                        </button>
                    )
                    : (
                        <button
                            type='button'
                            className='incompleto'
                            onClick= {()=>changeStatus(task)}
                        >
                            incompleto
                        </button>
                    )
                }
            </div>
            <div className="acciones">
                <button
                    type='button'
                    className='btn btn-primario'
                >
                    Editar
                </button>
                <button
                    type='button'
                    className='btn btn-secundario'
                    onClick= {()=> DELETE_TASK(task.id)}
                >
                    Eliminar
                </button>
            </div>
        </li>
    )
}

export default Task
