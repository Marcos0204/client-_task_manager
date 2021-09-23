import React, { useContext } from 'react';
import Task from './Task';
import ProjectContext from '../../context/proyectos/ProjectContext';
import TaskContext from '../../context/task/taskContext';

const ListTasks = () => {
    const proyectosContext = useContext(ProjectContext);
    const { project, deleteProject } = proyectosContext;

    ///task project
    const taskContext = useContext(TaskContext);
    const { taskProject } = taskContext;
    
    
    if(!project) return <h2>seleccione un proyecto</h2>

    const [actualProject] = project

    const onClickEliminar = () => {
        
        deleteProject(actualProject.id)
    }


    return (
        <>
            <h2>Proyecto: {actualProject.name}</h2>
            <ul className="listado-tareas">
                { taskProject.length === 0
                    ? (<li className='tarea'><p>No Hay Tareas</p> </li>)
                    : taskProject.map((task, index) =>(
                        <Task task={task} key={index}/>
                    ))
                }
                <button
                    type='button'
                    className='btn btn-eliminar'
                    onClick={()=> onClickEliminar()}
                >
                    eliminar Proyecto &time;
                </button>
            </ul>
        </>
    )
}

export default ListTasks
